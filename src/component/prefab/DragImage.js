import Drag from "phaser3-rex-plugins/plugins/drag";

class DragImage extends Phaser.GameObjects.Image{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        this.scene = scene
        this.name = texture
        this.init = {x:x, y:y}
        this.drag = new Drag(this, {});

        this.on('dragstart', function(pointer, dragX, dragY){
            this.parentContainer.bringToTop(this)
        },this);

        this.on('drag', function(pointer, dragX, dragY){
            this.target = null
            this.parentContainer.dragData.forEach(item => {
                let dist = Phaser.Math.Distance.Between(this.x, this.y, item.x, item.y)
                if(dist < 60 && !item.isLock) {
                    this.target = item
                }
            });

            if(this.target) {
                this.setPosition(this.target.x, this.target.y)
            }
        },this);

        this.on('dragend', function(pointer, dragX, dragY, dropped){
            if(this.target) {
                // lock drag in drop location
                this.drag.setEnable(false)
                if (this.name == this.target.name) {    // if answer correct, lock
                    this.scene.correctSound.play()
                    // drop positition can't filled again
                    this.parentContainer.dragData.forEach(item => {
                        if(item.x == this.target.x && item.y == this.target.y) {
                            item.isLock = true
                        }
                    })
                    // if all drag at drop, lock all drag
                    this.parentContainer.numCorrect++
                    if(this.parentContainer.numCorrect == this.parentContainer.dragData.length) {
                        this.parentContainer.lockAllDrag()
                    }
                } else {    // if answer false, send back to init
                    this.setTint('0xFF0000')
                    this.scene.wrongSound.play()
                    this.scene.time.delayedCall(500, this.initPosition, [], this)
                }   

            }else{
                // back to init
                this.initPosition()
            }
            this.target = null
        },this);
    }
    initPosition() {
        this.setPosition(this.init.x, this.init.y)
        this.drag.setEnable(true)
        this.clearTint()
    }
}

export default DragImage;