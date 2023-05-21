import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

function formatTime(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function ScoreBoard({ players }) {
  const [time, setTime] = useState(0);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = formatTime(time);

  const handleClick = () => {
    setClicks((prevClicks) => {
      console.log('Moves:', prevClicks + 1); // Log the number of moves to the console
      return prevClicks + 1;
    });
  };
  

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
              backgroundColor: '#DFE7EC',
              padding: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <p>Player {i + 1}</p>
            <p>Score: 0</p>
          </Box>
        ))}
      </Box>
    );
  }
}

export default ScoreBoard;
