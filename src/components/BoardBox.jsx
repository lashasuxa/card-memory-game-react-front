import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

function BoardBox({ number, boardSize, theme, isClicked, isCorrect, onClick }) {  // accept theme as a prop
  const [bgColor, setBgColor] = useState('#304859');
  
  const boxSize = boardSize === 4 ? "118px" : "81px";

  useEffect(() => {
    if(isCorrect){
      setBgColor('#808080'); // Set grey color if correct
    } else {
      setBgColor('#304859');
    }
  }, [isCorrect]);

  return (
    <Box 
      onClick={onClick}
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
          ?<img src='/White.png' alt="Icon" />
          : number
      )}
    </Box>
  );
}

export default BoardBox;
