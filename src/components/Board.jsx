// Board.js
import { Box } from '@mui/material';
import BoardBox from './BoardBox';
import { useState } from 'react';

function Board({ boardSize, theme }) {
  const allUniqueNumbers = Array.from({ length: boardSize * boardSize / 2 }, (_, i) => i);
  let allNumbersDoubled = [...allUniqueNumbers, ...allUniqueNumbers];
  allNumbersDoubled.sort(() => Math.random() - 0.5);

  const [previousNumber, setPreviousNumber] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClick = (number) => {
    if(previousNumber === number) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      setPreviousNumber(number);
    }
  }

  return (
    <Box sx={{pb:'102px'}}>
      {Array.from({ length: boardSize }, (_, rowIndex) => (
        <Box 
          key={rowIndex}
          display="flex"
          justifyContent="center"
        >
          {Array.from({ length: boardSize }, (_, colIndex) => (
            <BoardBox key={colIndex} 
              number={allNumbersDoubled[rowIndex * boardSize + colIndex]} 
              boardSize={boardSize} 
              theme={theme} 
              handleClick={handleClick} 
              isCorrect={isCorrect} 
            />
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default Board;
