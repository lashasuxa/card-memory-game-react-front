import { useState } from 'react';
import Game from '../src/pages/Game'
import { Box, Typography, Button } from '@mui/material';
import './App.css';


function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [bgColor, setBgColor] = useState('#304859');
  const [boardSize,setBoardSize]=useState(4);
  const [players,setPlayers]=useState(1);
  

  const handleStartGame = () => {
    setGameStarted(true);
    setBgColor('white');  // change the color to white when the game starts
  };
  const handleNewGame = () => {
    setGameStarted(false);
    setBgColor('#304859');
  };
  const handleBoardSizeChange = (size) => {
    setBoardSize(size);  // Update board size when a button is clicked
  }
  const handlePlayersChange = (num) => {
    setPlayers(num);
  }
 

  return (
    <Box className='main' style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', 
      width:"100vw",
      backgroundColor: bgColor, 
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
                  <Button variant="contained" size="large" >Numbers</Button>
                  <Button variant="contained" size="large" >Icons</Button>
            </Box>
              <Typography sx={{color:'#7191A5',marginBottom:'16px'}}>Numbers of Players</Typography>
              <Box className="num_icon" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom:'32px'
                }}>
                    <Button variant="contained" size="large" onClick={() => handlePlayersChange(1)}>1</Button>
                    <Button variant="contained" size="large" onClick={() => handlePlayersChange(2)}>2</Button>
                    <Button variant="contained" size="large" onClick={() => handlePlayersChange(3)}>3</Button>
                    <Button variant="contained" size="large" onClick={() => handlePlayersChange(4)}>4</Button>
              </Box>
                <Typography sx={{color:'#7191A5',marginBottom:'16px'}}>Grid Size</Typography>
                <Box className="num_icon" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom:'32px'
                  }}>
                      <Button variant="contained" size="large" onClick={() => handleBoardSizeChange(4)}>4X4</Button>
                      <Button variant="contained" size="large" onClick={() => handleBoardSizeChange(6)}>6X6</Button>
                      
                </Box>
              
                  <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Button variant="contained" size="large" onClick={handleStartGame}>Start Game</Button>
                  </Box>
             </Box>
        </>
        ) : (
        // Render the game components
        <Game onNewGame={handleNewGame} boardSize={boardSize} players={players}/>
      )}
    </Box>
  )
}

export default App;
