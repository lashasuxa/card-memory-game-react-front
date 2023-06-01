import React, { useState, useEffect } from 'react';
import Game from '../src/pages/Game';
import { Box, Typography, Button, Modal } from '@mui/material';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [bgColor, setBgColor] = useState('#304859');
  const [boardSize, setBoardSize] = useState(4);
  const [players, setPlayers] = useState(1);
  const [theme, setTheme] = useState('numbers');
  const [isGameOver, setIsGameOver] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [gameKey, setGameKey] = useState(Date.now());
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState(Array(players).fill(0));
  const [cardsClicked, setCardsClicked] = useState(0);

  const resetAll = () => {
    setGameStarted(false);
    setClicks(0);
    setTime(0);
    setCurrentPlayer(1);
    setIsGameOver(false);
    setScores(Array(players).fill(0));
    setCardsClicked(0);
    setGameKey(Date.now());
  }

  const handleScoreUpdate = (player) => {
    setScores(prevScores => {
        const newScores = [...prevScores];
        console.log('Updating score for player:', player);
        newScores[player - 1]++;
        console.log('Updated scores:', newScores); 
        return newScores;
    });
  };

  const handlePlayerTurn = () => {
    if (cardsClicked === 2) {
      setCurrentPlayer((currentPlayer % players) + 1);
      setCardsClicked(0);
    } else {
      setCardsClicked(cardsClicked + 1);
    }
  };

  useEffect(() => {
    setScores(Array(players).fill(0));
  }, [players]);

  useEffect(() => {
    if (isGameOver) {
      setModalOpen(true);
      setTime(Date.now() - gameKey);
    }
  }, [isGameOver]);

  const handleStartGame = () => {
    resetAll();
    setGameStarted(true);
    setBgColor('white');
  };

  const handleNewGame = () => {
    setBgColor('#304859');
    resetAll();
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
  };
  
  const handleRestartModal =()=>{
    resetAll();
    setModalOpen(false);
    setGameStarted(true);
    console.log("restarted from modal")
  };
  
  const handleNewGameModal = () => {
    setBgColor('#304859');
    console.log("setup new game")
    resetAll();
    setModalOpen(false);
  };

  function formatTime(time) {
    time = Math.floor(time / 1000);
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  const formattedTime = formatTime(time);

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
        <Typography>{formattedTime}</Typography>
      </Box>
      <Box sx={{bgcolor:'#DFE7EC', height:72,marginBottom:4 , paddingLeft:'32px',paddingRight:'32px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Typography>Moves Taken</Typography>
        <Typography>{clicks}</Typography>
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
        <Game
          key={gameKey}
          onNewGame={handleNewGame}
          boardSize={boardSize}
          players={players}
          theme={theme}
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
          // Pass down clicks and setClicks
          clicks={clicks}
          setClicks={setClicks}
          // Pass down time and setTime
          time={time}
          setTime={setTime}
          currentPlayer={currentPlayer}
          onPlayerTurn={handlePlayerTurn}
          scores={scores}
          onScoreUpdate={handleScoreUpdate}
          cardsClicked={cardsClicked}
          setCardsClicked={setCardsClicked}
        />
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