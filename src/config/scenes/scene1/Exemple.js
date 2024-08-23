import Phaser from "phaser"
import img from "./assets/BackGround1DestroyedForest.png"
import player from "./assets/player.png";

//maxY = 38
//510

export default class GameScene extends Phaser.Scene{

    constructor(){
        super("scene-game");
        this.playerSpeed = 400;
    }

    preload(){
        this.load.image("bg", img);
        this.load.image("player", player);
        this.load.image("platform", player);
        
    }

    create(){
        this.add.image(0,0,"bg").setOrigin(0,0);

        this.player = this.physics.add.image(10, 530,"player").setOrigin(0,0);
        this.player.setCollideWorldBounds(true);
        this.player.body.allowGravity = false;

        this.cursor = this.input.keyboard.createCursorKeys();

        // Cria uma plataforma na altura 510 com largura de 800 pixels      
        const platform = this.physics.add.staticImage(400, 510).setOrigin(0.5, 1);
        platform.setDisplaySize(800, 5); // Define a largura da plataforma para 800 pixels
        platform.refreshBody(); // Atualiza o corpo da plataforma para aplicar as mudanças de escala

        // Configura a colisão entre o jogador e a plataforma
        this.physics.add.collider(this.player, platform);
    }
        
    update(){
        const {up, down, left , right} = this.cursor;
        
        if (right.isDown === left.isDown) this.player.setVelocityX(0);
        else if(right.isDown) this.player.setVelocityX(this.playerSpeed);
        else if(left.isDown) this.player.setVelocityX(-this.playerSpeed);

        if (up.isDown === down.isDown) this.player.setVelocityY(0);
        else if(up.isDown) this.player.setVelocityY(-this.playerSpeed);
        else if(down.isDown) this.player.setVelocityY(this.playerSpeed);

    }
}