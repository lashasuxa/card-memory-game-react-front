import { Box } from '@mui/material';
import BoardBox from './BoardBox';  // import the new BoardBox component

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
            <BoardBox key={colIndex} />  // use the new BoardBox component
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default Board;
