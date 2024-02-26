import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        // //  We loaded this image in our Boot Scene, so we can display it here
        // this.add.image(512, 384, 'background');

        // //  A simple progress bar. This is the outline of the bar.
        // this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        // //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        // const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        // //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        // this.load.on('progress', (progress) => {

        //     //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
        //     bar.width = 4 + (460 * progress);

        // });

        
    }

    preload ()
    {
        this.load.image('backBtn', 'assets/images/backButton.png');
        this.load.image('pc', 'assets/images/pc.png');
        this.load.image('switch', 'assets/images/switch.png');
        this.load.image('hub', 'assets/images/hub.png');
        for(let i = 1; i <= 5; i++) {
            this.load.image('line'+i, 'assets/images/Line'+i+'.png');
        }
        this.load.audio('correct', 'assets/audios/correct.wav')
        this.load.audio('wrong', 'assets/audios/wrong.mp3')
    }

    create ()
    {
        this.scene.start('MenuScene');
    }
}
