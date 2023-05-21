import React, { useState } from 'react';
import Header from '../components/Header';
import Board from '../components/Board';
import ScoreBoard from '../components/ScoreBoard';
import { Box } from '@mui/material';

function Game({ onNewGame, boardSize, players, theme }) {
  const [isGameStarted, setGameStarted] = useState(false);
  const [restartKey, setRestartKey] = useState(0);

  const handleRestart = () => {
    setGameStarted(false);
    setRestartKey((prevKey) => prevKey + 1);
  };

  return (
    <Box sx={{ width: '100%', height: '100%', padding: '67px 165px 35px' }}>
      <Header onNewGame={onNewGame} onRestart={handleRestart} />
      <Board key={restartKey} boardSize={boardSize} theme={theme} isGameStarted={isGameStarted} setGameStarted={setGameStarted} />
      <ScoreBoard players={players} />
    </Box>
  );
}

export default Game;
