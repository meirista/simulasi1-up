import DragImage from "./DragImage"


class DragGroup extends Phaser.GameObjects.Container{
    constructor(scene, x, y) {
        super(scene, x, y)
        scene.add.existing(this)
        this.scene = scene
        this.dragData = scene.allData[scene.game.info.level]
        this.numCorrect = 0

        this.addDragImage('pc', 150, 230)
        this.addDragImage('switch', 150, 370)
        this.addDragImage('hub', 150, 490)
    }
    addDragImage(name, initX, initY) {
        let filteredData = this.dragData.filter(item => item.name == name)
        let numDrag = (filteredData.length == 0) ? 2 : filteredData.length + 1

        for(let i = 0; i < numDrag + 1; i++) {
            // drag image
            this.add(this.img = new DragImage(this.scene, initX, initY, name))
            // freeze first drag image (paling bawah)      
            this.img.drag.setEnable(i > 0)
            // text
            this.add(this.text = this.scene.add.text(
                initX, 
                initY + this.img.height/2 + 20, 
                name, 
                {
                    fontFamily: 'Arial', 
                    fontSize: 24, 
                    color: '#40A2E3',
                    align: 'center'
                }
            ).setOrigin(0.5))
        }

    }
    lockAllDrag() {
        this.list.forEach(item => {
            if(item.type == 'Image') {
                item.drag.setEnable(false)
            }
        })
    }
}

export default DragGroup;