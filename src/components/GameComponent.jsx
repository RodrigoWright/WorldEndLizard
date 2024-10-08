import React, { useEffect } from 'react'
import Phaser from "phaser";
import { Box } from '@mui/material';

const GameComponent = ({ config }) => {
  useEffect(() => {
    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true)
    }
  }, [config])

  return (
    <>  
        <Box
            border={"2px solid red"}
            alignContent={'center'}
            id="phaser-container"
        />
        
    </>
    
  )
}

export default GameComponent