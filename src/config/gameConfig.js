import Phaser from "phaser";
import GameScene from "./scenes/scene1/Exemple";

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-container',
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y:500},
            debug: true
        }
    },
    scene: [GameScene]
};

export default config;