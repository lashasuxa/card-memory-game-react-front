import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

function Header({ onNewGame, onRestart }) {


  const handleRestart = () => {
    onRestart(); // Call the restart handler passed from the parent component
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', pb: "85px" }}>
      <Typography sx={{ fontSize: '40px', color: 'black' }}>memory</Typography>
      <Box>
        <Button variant="contained" sx={{ mr: '16px' }} onClick={handleRestart}>Restart</Button>
        <Button variant="contained" onClick={onNewGame}>New Game</Button>
      </Box>
    </Box>
  );
}

export default Header;
