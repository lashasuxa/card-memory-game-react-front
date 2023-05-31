import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function formatTime(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function ScoreBoard({ players, isGameOver, restartKey, clicks, setClicks, time, setTime, scores = [] }) {
  
  const [scoresState, setScoresState] = useState(Array(players).fill(0));
  
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

      // Log scores for each player
      newScoresState.forEach((score, index) => {
        console.log(`Player ${index + 1}: ${score}`);
      });

      return newScoresState;
    });
  }, [players, scores]);

  const formattedTime = formatTime(time);

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
          {
            Array.from({ length: players }, (_, i) => (
              <Box
                key={i}
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
                <p>Player {i + 1}</p>
                <p>Score: {scoresState[i]}</p>
              </Box>
            ))
          }
      </Box>
    );
  }
}

export default ScoreBoard;