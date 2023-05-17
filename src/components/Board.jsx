// Board.js
import { Box } from '@mui/material';
import BoardBox from './BoardBox';

function Board({ boardSize }) {
  // Create an array from 0 to (boardSize * boardSize / 2) - 1
  const allUniqueNumbers = Array.from({ length: boardSize * boardSize / 2 }, (_, i) => i);

  // Duplicate and shuffle the array
  let allNumbersDoubled = [...allUniqueNumbers, ...allUniqueNumbers];
  allNumbersDoubled.sort(() => Math.random() - 0.5);

  return (
    <Box sx={{pb:'102px'}}>
      {Array.from({ length: boardSize }, (_, rowIndex) => (
        <Box 
          key={rowIndex}
          display="flex"
          justifyContent="center"
        >
          {Array.from({ length: boardSize }, (_, colIndex) => (
            <BoardBox key={colIndex} number={allNumbersDoubled[rowIndex * boardSize + colIndex]} boardSize={boardSize} /> 
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default Board;
