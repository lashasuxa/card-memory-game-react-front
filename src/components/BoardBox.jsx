// BoardBox.js
import { useState } from 'react';
import { Box } from '@mui/material';

function BoardBox({ number, boardSize }) {
  const [bgColor, setBgColor] = useState('#304859');

  const handleClick = () => {
    setBgColor('yellow');
    setTimeout(()=>{
      setBgColor('#304859')
    },2000)
    console.log("clicked")
    console.log(boardSize)
  };

  const boxSize = boardSize === 4 ? "118px" : "81px";

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
      {number}
    </Box>
  );
}

export default BoardBox;
