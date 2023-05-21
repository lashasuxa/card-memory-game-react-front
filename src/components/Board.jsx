// Board.js
import { Box } from '@mui/material';
import BoardBox from './BoardBox';
import { useState, useEffect } from 'react';

function Board({ boardSize, theme }) {
  const allUniqueNumbers = Array.from({ length: boardSize * boardSize / 2 }, (_, i) => i);
  let allNumbersDoubled = [...allUniqueNumbers, ...allUniqueNumbers];
  allNumbersDoubled.sort(() => Math.random() - 0.5);

  const [boxes, setBoxes] = useState(allNumbersDoubled.map((number, i) => ({ number, isClicked: false, isCorrect: false })));
  const [clickedBoxIds, setClickedBoxIds] = useState([]);

  useEffect(() => {
    if (clickedBoxIds.length === 2) {
      const [firstBoxId, secondBoxId] = clickedBoxIds;
      if (boxes[firstBoxId].number === boxes[secondBoxId].number) {
        setBoxes((boxes) =>
          boxes.map((box, i) =>
            i === firstBoxId || i === secondBoxId ? { ...box, isCorrect: true } : box
          )
        );
      } else {
        setTimeout(() => {
          setBoxes((boxes) =>
            boxes.map((box, i) =>
              i === firstBoxId || i === secondBoxId ? { ...box, isClicked: false } : box
            )
          );
        }, 1000);
      }
      setClickedBoxIds([]);
    }
  }, [clickedBoxIds]);

  const handleClick = (id) => {
    if (boxes[id].isCorrect || boxes[id].isClicked || clickedBoxIds.length === 2) {
      return; // If the box is already matched, clicked, or two items are already clicked, do nothing
    }
  
    setBoxes((prevBoxes) =>
      prevBoxes.map((prevBox, index) =>
        index === id ? { ...prevBox, isClicked: true } : prevBox
      )
    );
    setClickedBoxIds((prevIds) => [...prevIds, id]);
  };

  return (
    <Box sx={{ pb: '102px' }}>
      {Array.from({ length: boardSize }, (_, rowIndex) => (
        <Box key={rowIndex} display="flex" justifyContent="center">
          {Array.from({ length: boardSize }, (_, colIndex) => {
            const id = rowIndex * boardSize + colIndex;
            const box = boxes[id];
            return (
              <BoardBox
                key={colIndex}
                number={box.number}
                isClicked={box.isClicked}
                isCorrect={box.isCorrect}
                boardSize={boardSize}
                theme={theme}
                onClick={() => handleClick(id)}
              />
            );
          })}
        </Box>
      ))}
    </Box>
  );
}

export default Board;
