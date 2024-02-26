import Button from "phaser3-rex-plugins/plugins/button"

class BackButton extends Phaser.GameObjects.Image{
    constructor(scene) {
        super(scene, 80, 650, 'backBtn')
        scene.add.existing(this)
        this.scene = scene
        this.setTintFill('0x40A2E3')
 
        // button & event
        this.button = new Button(this, {enable: true});
        this.button.on('over', function (button, gameObject, pointer, event) {
            // console.log('over')
            this.setTintFill('0x0D9276')
        }, this);
        this.button.on('out', function (button, gameObject, pointer, event) {
            // console.log('out')
            this.setTintFill('0x40A2E3')
            this.setScale(1)
        }, this);
        this.button.on('down', function (button, gameObject, pointer, event) {
            // console.log('down')
            this.setScale(0.8)
        }, this);
        this.button.on('up', function (button, gameObject, pointer, event) {
            // console.log('up')
            this.setScale(1)
            this.scene.scene.start('MenuScene');

        }, this);
    }
}

export default BackButton;