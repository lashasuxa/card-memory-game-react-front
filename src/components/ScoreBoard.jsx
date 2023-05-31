import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

function formatTime(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function ScoreBoard({ players, isGameOver, restartKey, clicks, setClicks, time, setTime, scores = [], currentPlayer, onScoreUpdate }) {
  const [scoresState, setScoresState] = useState(Array(players).fill(0));
  const [currentTurn, setCurrentTurn] = useState(1);

  useEffect(() => {
    setScoresState(prevScoresState => {
      let newScoresState;
      if (scores.length !== 0) {
        newScoresState = scores;
      } else if (prevScoresState.length !== players) {
        newScoresState = Array(players).fill(0);
      } else {
        newScoresState = prevScoresState;
      }
      return newScoresState;
    });
  }, [players, scores]);

  useEffect(() => {
    if (clicks % 2 === 0) {
      setCurrentTurn(prevTurn => (prevTurn % players) + 1);
    }
  }, [clicks, players]);

  const formattedTime = formatTime(time);

  const handleScoreUpdate = () => {
    onScoreUpdate(currentTurn); // Update the score for the current turn player
  };

  useEffect(() => {
    if (isGameOver) {
      handleScoreUpdate();
    }
  }, [isGameOver, handleScoreUpdate]);

  if (players === 1) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
        <Box
          sx={{
            width: '255px',
            height: '72px',
            borderRadius: '10px',
            backgroundColor: '#DFE7EC',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <p>Time</p>
          <p>{formattedTime}</p>
        </Box>
        <Box
          sx={{
            width: '255px',
            height: '72px',
            borderRadius: '10px',
            backgroundColor: '#DFE7EC',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <p>Clicks</p>
          <p>{clicks}</p>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
        {Array.from({ length: players }, (_, i) => (
          <Box
            key={i}
            sx={{
              width: '255px',
              height: '72px',
              borderRadius: '10px',
              backgroundColor: currentTurn === i + 1 ? '#FDA214' : '#DFE7EC',
              padding: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: currentTurn === i + 1 ? 'white' : 'black'
            }}
          >
            <p>Player {i + 1}</p>
            <p>Score: {scoresState[i]}</p>
            {currentTurn === i + 1 && (
              <span style={{ color: '#152938' }}>CURRENT TURN: {currentTurn}</span>
            )}
          </Box>
        ))}
      </Box>
    );
  }
}

export default ScoreBoard;
