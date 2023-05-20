import { useState } from 'react';
import { Box } from '@mui/material';
import { useEffect } from 'react';

function BoardBox({ number, boardSize, theme,isCorrect }) {  // accept theme as a prop
  const [bgColor, setBgColor] = useState('#304859');
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    console.log(theme);
    
  };

  const boxSize = boardSize === 4 ? "118px" : "81px";
  useEffect(() => {
    if(!isCorrect && isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 2000);
    }
  }, [isCorrect, isClicked]);

  return (
    <Box 
      onClick={handleClick}
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
