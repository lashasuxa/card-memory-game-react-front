import { Box } from '@mui/material';

function Board() {
  const boardSize = 4;

  return (
    <Box sx={{pb:'102px'}}>
      {Array.from({ length: boardSize }, (_, rowIndex) => (
        <Box 
          key={rowIndex}
          display="flex"
          justifyContent="center"
        >
          {Array.from({ length: boardSize }, (_, colIndex) => (
            <Box 
              key={colIndex}
              width="118px" 
              height="118px" 
              border="1px solid black" 
              margin="20px"
              borderRadius="50%"
              backgroundColor="#304859"
            />
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default Board;