import Button from "phaser3-rex-plugins/plugins/button";

class ChoiceButton extends Phaser.GameObjects.Container{
    constructor(scene, x, y, index) {
        super(scene, x, y)
        scene.add.existing(this)
        this.scene = scene
        this.index = index

        // rectangle
        this.add(this.rect = scene.add.rexRoundRectangle(0, 0, 200, 150, 10, 0xFFF6E9, 1))
        this.rect.setStrokeStyle(4, 0x40A2E3, 1);

        // setsize container
        this.setSize(this.rect.width, this.rect.height);

        // text
        let txt = scene.game.info.titles[index].replace(' ', '\n')    // upah whitespace jadi enter
        this.add(this.text = scene.add.text(0, 0, txt, {
            fontFamily: 'Arial', 
            fontSize: 30, 
            color: '#40A2E3',
            align: 'center'
            }).setOrigin(0.5));
        
        // button & event
        this.button = new Button(this, {enable: true});
        this.button.on('over', function (button, gameObject, pointer, event) {
            // console.log('over')
            this.text.setColor('#0D9276')
            this.rect.setStrokeStyle(4, 0x0D9276, 1);
        }, this);
        this.button.on('out', function (button, gameObject, pointer, event) {
            // console.log('out')
            this.text.setColor('#40A2E3')
            this.rect.setStrokeStyle(4, 0x40A2E3, 1);
            this.setScale(1)
        }, this);
        this.button.on('down', function (button, gameObject, pointer, event) {
            // console.log('down')
            this.setScale(0.95)
        }, this);
        this.button.on('up', function (button, gameObject, pointer, event) {
            // console.log('up')
            this.setScale(1)
            this.scene.enterGame(this.index)
        }, this);

    }
}

export default ChoiceButton;