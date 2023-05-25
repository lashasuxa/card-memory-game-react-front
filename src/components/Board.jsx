import { Box } from '@mui/material';
import BoardBox from './BoardBox';
import { useState, useEffect } from 'react';

function Board({ boardSize, theme, setIsGameOver, onClick }) {
  const imageNames = ['anchor', 'car', 'chicken', 'coffee', 'currency-sign', 'dinner', 'flask', 'football', 'hand-spock', 'house', 'microwave', 'moon', 'notes', 'pizza', 'snowflake', 'sun', 'tool', 'umbrella'];
  if (boardSize * boardSize / 2 > imageNames.length) {
    throw new Error("Not enough unique images to populate the board!");
  }

  const allUniqueBoxValues = Array.from({ length: boardSize * boardSize / 2 }, (_, i) => ({ number: i + 1, image: imageNames[i] }));
  let allBoxValuesDoubled = [...allUniqueBoxValues, ...allUniqueBoxValues];
  allBoxValuesDoubled.sort(() => Math.random() - 0.5);

  const [boxes, setBoxes] = useState(allBoxValuesDoubled.map(boxValue => ({ ...boxValue, isClicked: false, isCorrect: false })));
  const [clickedBoxIds, setClickedBoxIds] = useState([]);

  useEffect(() => {
    if (clickedBoxIds.length === 2) {
      const [firstBoxId, secondBoxId] = clickedBoxIds;
      if (boxes[firstBoxId].image === boxes[secondBoxId].image) {
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

  useEffect(() => {
    const allBoxesCorrect = boxes.every(box => box.isCorrect);
    if (allBoxesCorrect) {
      setIsGameOver(true);
      console.log('finished');
    }
  }, [boxes]);

  const handleClick = (id) => {
    if (boxes[id].isCorrect || boxes[id].isClicked || clickedBoxIds.length === 2) {
      return;
    }
    onClick();
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
                image={box.image}
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
