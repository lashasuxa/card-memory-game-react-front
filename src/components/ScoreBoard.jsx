import { Box } from '@mui/material';

function ScoreBoard({ players }) {
  if (players === 1) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
        <Box sx={{ width: '255px', 
                   height: '72px', 
                   borderRadius: '10px', 
                   backgroundColor: '#DFE7EC', 
                   padding: '15px',
                   display:'flex',
                   justifyContent:'space-between',
                   alignItems:'center'}}>
          <p>Time</p>
          <p>0</p>
        </Box>
        <Box sx={{ width: '255px', 
                   height: '72px', 
                   borderRadius: '10px', 
                   backgroundColor: '#DFE7EC', 
                   padding: '15px',
                   display:'flex',
                   justifyContent:'space-between',
                   alignItems:'center'}}>
          <p>Moves</p>
          <p>0</p>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
        {Array.from({ length: players }, (_, i) => (
          <Box key={i} sx={{ width: '255px', 
                           height: '72px', 
                           borderRadius: '10px', 
                           backgroundColor: '#DFE7EC', 
                           padding: '15px',
                           display:'flex',
                           justifyContent:'space-between',
                           alignItems:'center'}}>
            <p>Player {i + 1}</p>
            <p>Score: 0</p>
          </Box>
        ))}
      </Box>
    );
  }
}

export default ScoreBoard;
