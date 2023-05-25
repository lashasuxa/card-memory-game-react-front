// Game.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Board from '../components/Board';
import ScoreBoard from '../components/ScoreBoard';
import { Box } from '@mui/material';

function Game({ onNewGame, boardSize, players, theme, setIsGameOver, isGameOver }) {
  const [isGameStarted, setGameStarted] = useState(false);
  const [restartKey, setRestartKey] = useState(0);
  const [clicks, setClicks] = useState(0);

  // Reset game state to its initial state
  const resetGameState = () => {
    setGameStarted(false);
    setClicks(0);
    setRestartKey(restartKey + 1);
  }

  useEffect(() => {
    if (isGameOver) {
      resetGameState();
    }
  }, [isGameOver]);

  const handleClick = () => {
    setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <Box sx={{ width: '100%', height: '100%', padding: '67px 165px 35px' }}>
      <Header onNewGame={onNewGame} onRestart={resetGameState} />
      <Board key={restartKey} boardSize={boardSize} theme={theme} isGameStarted={isGameStarted} setGameStarted={setGameStarted} onClick={handleClick} setIsGameOver={setIsGameOver} />
      <ScoreBoard players={players} isGameOver={isGameOver} restartKey={restartKey} clicks={clicks} />
    </Box>
  );
}

export default Game;
