import React, { useState } from 'react';
import Header from '../components/Header';
import Board from '../components/Board';
import ScoreBoard from '../components/ScoreBoard';
import { Box } from '@mui/material';

function Game({ onNewGame, boardSize, players, theme,setIsGameOver,isGameOver  }) {
  const [isGameStarted, setGameStarted] = useState(false);
  const [restartKey, setRestartKey] = useState(0);
  const [clicks, setClicks] = useState(0); // Create a new state for clicks
  


  const handleRestart = () => {
    setGameStarted(false);
    setRestartKey((prevKey) => prevKey + 1);
    setClicks(0); // Reset the number of clicks when the game restarts
  };

  const handleClick = () => {
    setClicks(prevClicks => {
      const newClicks = prevClicks + 1;
    
      return newClicks;
    });
  };

  return (
    <Box sx={{ width: '100%', height: '100%', padding: '67px 165px 35px' }}>
      <Header onNewGame={onNewGame} onRestart={handleRestart} />
      <Board key={restartKey} boardSize={boardSize} theme={theme} isGameStarted={isGameStarted} setGameStarted={setGameStarted} onClick={handleClick} setIsGameOver={setIsGameOver} />
      <ScoreBoard players={players} isGameOver={isGameOver} restartKey={restartKey} clicks={clicks} />
    </Box>
  );
}

export default Game;
