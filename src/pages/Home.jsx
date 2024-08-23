import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function Home() {

  const navigate = useNavigate()

  function handleClick () {
    navigate('./Game', {replace: true});
  }

  return (
    <>
      <Button 
        variant='contained' 
        size='large' 
        onClick={handleClick}
      > 
        Start 
      </Button>
    </>
    
  );
}

export default Home;
