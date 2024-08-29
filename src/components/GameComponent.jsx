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
            alignContent={'center'}
            width={"800px"}
            height={"450px"}
            id="phaser-container"
        />
        
    </>
    
  )
}

export default GameComponent