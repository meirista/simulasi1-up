// import { Boot } from './scenes/Boot';
import { GameScene } from './scenes/GameScene';

// import { BusGame } from './scenes/GameScene/BusGame'
// import { TreeGame } from './scenes/GameScene/TreeGame'
// import { RingGame } from './scenes/GameScene/RingGame'
// import { StarGame } from './scenes/GameScene/StarGame'
// import { HybridGame } from './scenes/GameScene/HybridGame'

import { MenuScene } from './scenes/MenuScene';
import { Preloader } from './scenes/Preloader';
import RoundRectanglePlugin from 'phaser3-rex-plugins/plugins/roundrectangle-plugin.js';
import BBCodeTextPlugin from 'phaser3-rex-plugins/plugins/bbcodetext-plugin.js';
import ButtonPlugin from 'phaser3-rex-plugins/plugins/button-plugin.js';
import DragPlugin from 'phaser3-rex-plugins/plugins/drag-plugin.js';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: 'game-container',
    backgroundColor: '#FFFFFF',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        // Boot,
        Preloader,
        MenuScene,
        GameScene
    ],
    plugins: {
        global: [{
            key: 'rexRoundRectanglePlugin',
            plugin: RoundRectanglePlugin,
            start: true
        },
        {
            key: 'rexBBCodeTextPlugin',
            plugin: BBCodeTextPlugin,
            start: true
        },
        {
            key: 'rexButton',
            plugin: ButtonPlugin,
            start: true
        },
        {
            key: 'rexDrag',
            plugin: DragPlugin,
            start: true
        },
        // ...
        ]
    }
};


const game = new Phaser.Game(config);
game.info = {
    level : null,    // level 0 s/d 4 => bus, dst
    titles : [
        'Bus Topology',
        'Star Topology',
        'Ring Topology',
        'Tree Topology',
        'Hybrid Topology',
    ],
    
};
export default game;
