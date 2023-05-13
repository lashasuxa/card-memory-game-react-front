import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './App.css';
import Header from './components/Header';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [imageSrc, setImageSrc] = useState('/babel.png');  // Replace with your initial image source if any

  const handleStartGame = () => {
    setGameStarted(true);
    setImageSrc('/babel.png');  // Replace with your actual image source
  };

  return (
    <Box className='main' style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', 
    }}>
      {!gameStarted ? (
        <>
          <Typography sx={{textAlign:'center',marginBottom:'78px',fontSize:'40px'}}>memory</Typography>
          <Box className="card" style={{ 
            backgroundColor: 'white', 
            width: '654px', 
            height: '559px', 
            borderRadius: '20px',
            padding:'57px',
          }}>
           <Typography sx={{color:'#7191A5',marginBottom:'16px'}}>Select Theme</Typography>
            <Box className="num_icon" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom:'32px'
              }}>
                  <Button variant="contained" color="primary">Numbers</Button>
                  <Button variant="contained">Icons</Button>
            </Box>
              <Typography sx={{color:'#7191A5',marginBottom:'16px'}}>Numbers of Players</Typography>
              <Box className="num_icon" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom:'32px'
                }}>
                    <Button variant="contained" color='primary'>1</Button>
                    <Button variant="contained">2</Button>
                    <Button variant="contained">3</Button>
                    <Button variant="contained">4</Button>
              </Box>
                <Typography sx={{color:'#7191A5',marginBottom:'16px'}}>Grid Size</Typography>
                <Box className="num_icon" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom:'32px'
                  }}>
                      <Button variant="contained">4X4</Button>
                      <Button variant="contained">6X6</Button>
                      
                </Box>
              
                  <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Button variant="contained" onClick={handleStartGame}>Start Game</Button>
                  </Box>
             </Box>
        </>
      ) : (
        // Render the game components
        <img src={imageSrc} alt="game" />
      )}
    </Box>
  )
}

export default App;
