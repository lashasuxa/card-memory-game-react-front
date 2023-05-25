import React, { useState, useEffect } from 'react';
import Game from '../src/pages/Game';
import { Box, Typography, Button, Modal } from '@mui/material';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [bgColor, setBgColor] = useState('#304859');
  const [boardSize, setBoardSize] = useState(4);
  const [players, setPlayers] = useState(1);
  const [theme, setTheme] = useState('numbers');
  const [isGameOver, setIsGameOver] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isGameOver) {
      setModalOpen(true);
    }
  }, [isGameOver]);

  const handleStartGame = () => {
    setGameStarted(true);
    setBgColor('white');
    setIsGameOver(false);
  };

  const handleNewGame = () => {
    setGameStarted(false);
    setBgColor('#304859');
  };

  const handleBoardSizeChange = (size) => {
    setBoardSize(size);
  }

  const handlePlayersChange = (num) => {
    setPlayers(num);
  }

  const handleThemeChangeToNumbers = () => {
    setTheme('numbers');
  }

  const handleThemeChangeToIcons = () => {
    setTheme('icons');
  }

  const handleClose = () => {
  
    setModalOpen(false);
    setIsGameOver(false);
   
    
  };
  const handleRestartModal = () => {
    console.log("restarted from modal")
    setModalOpen(false);
    setIsGameOver(false);
    handleStartGame();
  };
  const handleNewGameModal = () => {
    console.log("setup new game")
    setModalOpen(false);
    setIsGameOver(false);
    handleNewGame();
  };

  const body = (
    <Box sx={{ width: 645, bgcolor: 'background.paper', boxShadow: 24, p: 4, mx: 'auto', my: '20%', borderRadius: '10px',color:"black"  }}>
      <Typography id="modal-title" variant="h2" component="h2" textAlign='center' >
        You did it!
      </Typography>
      <Typography id="modal-description" sx={{ mt: 2,textAlign:'center',mb:3 }}>
      Game over! Here’s how you got on…
      </Typography>
      <Box sx={{bgcolor:'#DFE7EC', height:72,marginBottom:2, paddingLeft:'32px',paddingRight:'32px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Typography>Time Elapsed</Typography>
        <Typography>1:53</Typography>
      </Box>
      <Box sx={{bgcolor:'#DFE7EC', height:72,marginBottom:4 , paddingLeft:'32px',paddingRight:'32px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Typography>Moves Taken</Typography>
        <Typography>39 Moves</Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',mb:5}}>
       
        <Button variant="contained" color="primary" onClick={handleRestartModal}>Restart</Button>
        <Button variant="contained" color="primary" onClick={handleNewGameModal}>Setup New Game</Button>
      </Box>
    </Box>
  );

  return (
    <Box className='main' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', backgroundColor: bgColor }}>
      {!gameStarted ? (
        <>
          <Typography sx={{ textAlign: 'center', marginBottom: '78px', fontSize: '40px' }}>memory</Typography>
          <Box className="card" style={{ backgroundColor: 'white', width: '654px', height: '559px', borderRadius: '20px', padding: '57px' }}>
            <Typography sx={{ color: '#7191A5', marginBottom: '16px' }}>Select Theme</Typography>
            <Box className="num_icon" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
              <Button variant="contained" size="large" onClick={handleThemeChangeToNumbers}>Numbers</Button>
              <Button variant="contained" size="large" onClick={handleThemeChangeToIcons}>Icons</Button>
            </Box>
            <Typography sx={{ color: '#7191A5', marginBottom: '16px' }}>Numbers of Players</Typography>
            <Box className="num_icon" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
              <Button variant="contained" size="large" onClick={() => handlePlayersChange(1)}>1</Button>
              <Button variant="contained" size="large" onClick={() => handlePlayersChange(2)}>2</Button>
              <Button variant="contained" size="large" onClick={() => handlePlayersChange(3)}>3</Button>
              <Button variant="contained" size="large" onClick={() => handlePlayersChange(4)}>4</Button>
            </Box>
            <Typography sx={{ color: '#7191A5', marginBottom: '16px' }}>Grid Size</Typography>
            <Box className="num_icon" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
              <Button variant="contained" size="large" onClick={() => handleBoardSizeChange(4)}>4X4</Button>
              <Button variant="contained" size="large" onClick={() => handleBoardSizeChange(6)}>6X6</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" size="large" onClick={handleStartGame}>Start Game</Button>
            </Box>
          </Box>
        </>
      ) : (
        <Game onNewGame={handleNewGame} boardSize={boardSize} players={players} theme={theme} isGameOver={isGameOver} setIsGameOver={setIsGameOver} />
      )}
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {body}
      </Modal>
    </Box>
  );
}

export default App;