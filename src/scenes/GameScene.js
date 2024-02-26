import { Scene } from 'phaser';
import DragGroup from '../component/prefab/DragGroup';
import BackButton from '../component/prefab/BackButton';

export class GameScene extends Scene
{
    constructor ()
    {
        super('GameScene');
    }

    create ()
    {
        this.correctSound = this.sound.add('correct')
        this.wrongSound = this.sound.add('wrong', {volume: 3})

        // info
        this.allData = [
            [   // Bus Topology
                {name: 'pc', x: 496 , y: 300},
                {name: 'pc', x: 755 , y: 300},
                {name: 'pc', x: 1005 , y: 300},
                {name: 'pc', x: 615 , y: 500},
                {name: 'pc', x: 870 , y: 500}
            ],
            [   // Star Topology
                {name: 'pc', x: 757 , y: 193},
                {name: 'pc', x: 926 , y: 236},
                {name: 'pc', x: 995 , y: 402},
                {name: 'pc', x: 926 , y: 567},
                {name: 'pc', x: 757 , y: 605},
                {name: 'pc', x: 569 , y: 236},
                {name: 'pc', x: 504 , y: 402},
                {name: 'pc', x: 569 , y: 567},
                {name: 'switch', x: 750 , y: 402},
            ],
            [   // Ring Topology
                {name: 'pc', x: 750 , y: 233},
                {name: 'pc', x: 750 , y: 567},
                {name: 'pc', x: 577 , y: 407},
                {name: 'pc', x: 936 , y: 407}
            ],
            [   // Tree Topology
                {name: 'switch', x: 753 , y: 192},
                {name: 'switch', x: 509 , y: 400},
                {name: 'switch', x: 995 , y: 400},
                {name: 'pc', x: 372 , y: 563},
                {name: 'pc', x: 502 , y: 603},
                {name: 'pc', x: 635 , y: 563},
                {name: 'pc', x: 866 , y: 563},
                {name: 'pc', x: 995 , y: 603},
                {name: 'pc', x: 1126 , y: 563},
            ],
            [   // Hybrid Topology
                {name: 'pc', x: 553 , y: 234},
                {name: 'pc', x: 376 , y: 405},
                {name: 'pc', x: 553 , y: 563},
                {name: 'switch', x: 723 , y: 408},
                {name: 'switch', x: 960 , y: 408},
                {name: 'pc', x: 1139 , y: 251},
                {name: 'pc', x: 1194 , y: 408},
                {name: 'pc', x: 1139 , y: 562}
            ]
        ]

        // title
        this.text = this.add.text(
            this.game.config.width/2, 
            60, 
            this.game.info.titles[this.game.info.level], 
            {
                fontFamily: 'Arial', 
                fontSize: 30, 
                color: '#40A2E3',
                align: 'center'
            }
        ).setOrigin(0.5)

        // back button
        this.backButton = new BackButton(this)

        // lines image
        this.lines = this.add.image(750, 400, 'line'+(this.game.info.level+1))

        // drag images
        this.dragGroup = new DragGroup(this)

    }
}
