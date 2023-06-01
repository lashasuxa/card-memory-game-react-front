import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

function BoardBox({ number, image, boardSize, theme, isClicked, isCorrect, onClick }) {
  const [bgColor, setBgColor] = useState('#304859');

  const boxSize = boardSize === 4 ? "118px" : "81px";

  useEffect(() => {
    if(isCorrect){
      setBgColor('#FDA214');
      setTimeout(() => {
        setBgColor('#808080');
      }, 500); // Change to #808080 after 500ms
    } else {
      setBgColor('#304859');
    }
  }, [isCorrect]);

  const handleBoxClick = () => {
    if(!isCorrect && !isClicked) {
      onClick(); 
    }
  }

  return (
    <Box 
      onClick={handleBoxClick} 
      width={boxSize} 
      height={boxSize} 
      margin="20px"
      borderRadius="50%"
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      fontSize={"44px"}
      backgroundColor={bgColor}
    >
      {isClicked && (
        theme === 'icons'
          ? <img src={`/${image}.png`} alt="Icon" />
          : number
      )}
    </Box>
  );
}

export default BoardBox;