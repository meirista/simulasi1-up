import { Scene } from 'phaser';
import ChoiceButton from '../component/prefab/ChoiceButton';

export class MenuScene extends Scene
{
    constructor ()
    {
        super('MenuScene');
    }

    create ()
    {
        let multiplier = [
            {x: -1, y: -1},
            {x: 1, y: -1},
            {x: 0, y: 0},
            {x: -1, y: 1},
            {x: 1, y: 1},
        ]
        let offset = {x: 300, y: 150} 
        
        for(let i = 0; i < 5; i++) {
            let x = (this.game.config.width/2) + (multiplier[i].x * offset.x)
            let y = (this.game.config.height/2) + (multiplier[i].y * offset.y)
            this.choiceBtn = new ChoiceButton(this, x, y, i)

        }
    }
    
    enterGame(index) {
        this.game.info.level = index
        this.scene.start('GameScene');


    }
}
