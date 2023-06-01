import { Box } from '@mui/material';

function formatTime(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function ScoreBoard({ players, isGameOver, restartKey, clicks, setClicks, time, setTime, scores = [], currentPlayer, onScoreUpdate }) {

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
        {Array.from({ length: players }, (_, i) => (
          <Box
            key={i}
            sx={{
              width: '255px',
              height: '72px',
              borderRadius: '10px',
              backgroundColor: currentPlayer === i + 1 ? '#FDA214' : '#DFE7EC',
              padding: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: currentPlayer === i + 1 ? 'white' : 'black'
            }}
          >
            <p>Player {i + 1}</p>
            <p>Score: {scores[i]}</p>
          </Box>
        ))}
        <span style={{ color: '#152938' }}>
          CURRENT TURN: {currentPlayer}
        </span>
      </Box>
    );
  }
}

export default ScoreBoard;
