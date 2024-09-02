import Phaser from "phaser"
import img from "./assets/Bastionofsins.png"
//import player from "./assets/lancer2.png";
import player from "./assets/lancerspritesheet.png";

//maxY = 38
//510

export default class GameScene extends Phaser.Scene{
    constructor(){
        super("scene-game");
        this.playerSpeed = 1000;
    }

    preload(){
        this.load.image("bg", img);
//        this.load.image("player", player);
        this.load.image("platform", player);
        this.load.spritesheet("player", player, {
            frameWidth: 32,
            frameHeight: 32
        });
        
    }

    create(){
        this.player = this.add.sprite(32, 32, "player").setOrigin(0,0);

        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNames('player', {start: 9, end: 12}),
            frameRate: 6,
            repeat: 0
        })
        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNames('player', {start: 17, end: 20}),
            frameRate: 6,
            repeat: -1
        })
        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNames('player', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
        })

        const bg = this.add.image(0,0,"bg").setOrigin(0,0);
        bg.displayHeight = this.scale.height;
        bg.displayWidth = this.scale.width;

        this.player = this.physics.add.sprite(20, 100,"player").setOrigin(0,0);
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
        
        if (right.isDown === left.isDown) {
            this.player.anims.play('idle', true);
            this.player.setVelocityX(0);
        } 
        else if(right.isDown) {
            this.player.anims.play('right', true)
            this.player.setVelocityX(this.playerSpeed); 
            console.log("right pressed")
        }
        else if(left.isDown){
            this.player.anims.play("left", true)
            this.player.setVelocityX(-this.playerSpeed);
        } 

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