import { Box } from '@mui/material';

function Card() {
  return (
    <Box sx={{
      width: '118px',
      height: '118px',
      borderRadius: '59px',
      backgroundColor: '#BCCED9',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img src="path-to-your-image" alt="description" />
    </Box>
  );
}

export default Card;