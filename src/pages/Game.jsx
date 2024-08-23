import { Box, Button } from "@mui/material";
import GameComponent from "../components/GameComponent"
import config from "../config/gameConfig"
import { useNavigate } from "react-router-dom";

function Game () {

    const navigate = useNavigate();

    function handleClick () {
        navigate('/', {replace: true});
      }
    
    return (
        <>
            <Box
                minHeight={"100vh"}
            >
                <Box 
                    minWidth={"100vh"} 
                    padding={"20px"}
                    display={"flex"}
                    justifyContent={"initial"}
                    marginBottom={"100px"}
                >
                    <Button variant="contained" onClick={handleClick}>Back</Button>
                </Box>
                
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                >
                    <GameComponent config={config}/>        
                </Box>
            </Box>
            
        </>
    );
}

export default Game;