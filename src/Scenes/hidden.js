class hidden extends Phaser.Scene {
    constructor() {
        super("hiddenlevel");

    
        this.my = {sprite: {}, text: {}}; 

        
    }

    create() {
        let my = this.my;
        
        // Create key objects
        this.myScore = 0;
        

        



        // update HTML description
        document.getElementById('description').innerHTML = 'Welcome to the HIDDEN level! Thank you for playing!'
        my.text.ending = this.add.text(750, 450, "Welcome to the HIDDEN level! Thank you for playing! ", {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0.5, 0.5); // Center the text
  
        
        

    

    }

    update() {
        let my = this.my;
        this.input.once('pointerdown', () => {
            this.scene.start('platformerScene'); 
        });

        
    }

}