import { useState } from 'react';
import { Box } from '@mui/material';

function BoardBox() {
  const [bgColor, setBgColor] = useState('#304859');

  const handleClick = () => {
    setBgColor('yellow');
    setTimeout(()=>{
      setBgColor('#304859')
    },2000)
    console.log("clicked")
  };

  return (
    <Box 
      onClick={handleClick}
      width="118px" 
      height="118px" 
      border="1px solid black" 
      margin="20px"
      borderRadius="50%"
      backgroundColor={bgColor}
    />
  );
}

export default BoardBox;