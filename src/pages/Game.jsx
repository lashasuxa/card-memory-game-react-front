// Game.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Board from '../components/Board';
import ScoreBoard from '../components/ScoreBoard';
import { Box } from '@mui/material';

function Game({ onNewGame, boardSize, players, theme, setIsGameOver, isGameOver, clicks, setClicks, time, setTime }) {
  const [isGameStarted, setGameStarted] = useState(false);
  const [restartKey, setRestartKey] = useState(0);
  

  // Reset game state to its initial state
  const resetGameState = () => {
    setGameStarted(false);
    setRestartKey(restartKey + 1);
    // Reset time and clicks
    setTime(0);
    setClicks(0);
  }

  useEffect(() => {
    if (!isGameOver) {
      const timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      return () => clearInterval(timer); // clean up on component unmount or when isGameOver changes
    }
  }, [isGameOver, setTime]);

  const handleClick = () => {
    setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <Box>
      <Header onNewGame={onNewGame} onRestart={resetGameState} />
      <Board
        key={restartKey}
        boardSize={boardSize}
        theme={theme}
        isGameStarted={isGameStarted}
        setGameStarted={setGameStarted}
        // Pass down onClick as handleClick
        onClick={() => setClicks(prevClicks => prevClicks + 1)}
        setIsGameOver={setIsGameOver}
      />
      <ScoreBoard
        players={players}
        isGameOver={isGameOver}
        restartKey={restartKey}
        // Pass down clicks and setClicks
        clicks={clicks}
        setClicks={setClicks}
        // Pass down time and setTime
        time={time}
        setTime={setTime}
      />
    </Box>
  );
}

export default Game;