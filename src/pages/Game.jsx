import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Board from '../components/Board';
import ScoreBoard from '../components/ScoreBoard';
import { Box } from '@mui/material';

function Game({ onNewGame, boardSize, players, theme, setIsGameOver, isGameOver, clicks, setClicks, time, setTime, currentPlayer, onPlayerTurn, scores, onScoreUpdate }) {
  const [isGameStarted, setGameStarted] = useState(false);
  const [restartKey, setRestartKey] = useState(0);
  

  
  const handleClick = () => {
    setClicks(prevClicks => prevClicks + 1);
    onPlayerTurn();
  };

  // Reset game state to its initial state
  const resetGameState = () => {
    setGameStarted(false);
    setRestartKey(restartKey + 1);
    // Reset time and clicks
    setTime(0);
    setClicks(0);
    // Reset scores
    onScoreUpdate();
  }

  useEffect(() => {
    if (!isGameOver) {
      const timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      return () => clearInterval(timer); // clean up on component unmount or when isGameOver changes
    }
  }, [isGameOver, setTime]);
    // simulate a score update
    useEffect(() => {
      const intervalId = setInterval(() => {
        onScoreUpdate(currentPlayer);
        onPlayerTurn(); // change to the next player
      }, 3000);
      return () => clearInterval(intervalId);
    }, [currentPlayer, onPlayerTurn, onScoreUpdate]);

  return (
    <Box>
      <Header onNewGame={onNewGame} onRestart={resetGameState} />
      <Board
        key={restartKey}
        boardSize={boardSize}
        theme={theme}
        isGameStarted={isGameStarted}
        setGameStarted={setGameStarted}
        setIsGameOver={setIsGameOver}
        currentPlayer={currentPlayer}
        onClick={() => {
          handleClick();
          // Assuming onScoreUpdate is called when a match is made
          onScoreUpdate(currentPlayer);
        }}
      />
      <ScoreBoard
        players={players}
        currentPlayer={currentPlayer}
        scores={scores}
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
