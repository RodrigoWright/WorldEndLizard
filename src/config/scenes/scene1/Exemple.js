import Phaser from "phaser"
import img from "./assets/Bastionofsins.png"
import player from "./assets/lancer.png";

//maxY = 38
//510

export default class GameScene extends Phaser.Scene{
    constructor(){
        super("scene-game");
        this.playerSpeed = 200;
    }

    preload(){
        this.load.image("bg", img);
        this.load.image("player", player);
        this.load.image("platform", player);
        
    }

    create(){
        const bg = this.add.image(0,0,"bg").setOrigin(0,0);
        bg.displayHeight = this.scale.height;
        bg.displayWidth = this.scale.width;

        this.player = this.physics.add.image(20, 100,"player").setOrigin(0,0);
        this.player.setCollideWorldBounds(true);
        this.player.body.allowGravity = true;

        this.cursor = this.input.keyboard.createCursorKeys();

        // Cria uma plataforma na altura 510 com largura de 800 pixels      
        const platform = this.physics.add.staticImage(0, 220).setOrigin(0, 0);
        platform.setDisplaySize(400, 20); // Define a largura da plataforma para 800 pixels
        platform.refreshBody(); // Atualiza o corpo da plataforma para aplicar as mudanças de escala

        // Configura a colisão entre o jogador e a plataforma
        this.physics.add.collider(this.player, platform);

        // Adiciona um botão ou tecla para acionar o fullscreen
        
        const fullscreenButton = this.add.text(0, 0, '[< >]', { fontSize: '10px', fill: '#fff' });
        fullscreenButton.setInteractive();
        fullscreenButton.on('pointerup', function () {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        }, this);
    }
        
    update(){
        const {up, down, left , right} = this.cursor;
        
        if (right.isDown === left.isDown) {this.player.setVelocityX(0)} 
        else if(right.isDown) {this.player.setVelocityX(this.playerSpeed); console.log("right pressed")}
        else if(left.isDown) this.player.setVelocityX(-this.playerSpeed);

        // if (up.isDown === down.isDown) this.player.setVelocityY(0);
        // else if(up.isDown) this.player.setVelocityY(-this.playerSpeed);
        if(down.isDown) this.player.setVelocityY(this.playerSpeed);
        if (this.player.body.touching.none) console.log("touch")
        if (up.isDown && !this.player.body.touching.none){
            console.log("up pressed")
            this.player.setVelocityY(-200);
        }

    }
}