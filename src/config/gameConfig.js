import Phaser from "phaser";
import GameScene from "./scenes/scene1/Exemple";


const canvasSize = {
    width: 400,
    height: 225,
}

const config = {
    type: Phaser.WEBGL,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-container',
        fullscreenTarget: 'phaser-container',
        width: canvasSize.width,
        height: canvasSize.height
    },
    
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y:500},
            debug: false
        }
    },
    scene: [GameScene],
    render: {
        pixelArt: true,  // Ativa o modo pixel art para evitar interpolação de escala
        antialias: true // Desativa o antialiasing
    }
};

export default config;