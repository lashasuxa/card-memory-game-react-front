import { Box,Button, Typography } from "@mui/material"

function Header({ onNewGame }) {
  return (
    <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',pb:"85px"}}>
      <Typography sx={{fontSize:'40px',color:'black'}}>memory</Typography>
      <Box>
        <Button variant="contained" sx={{mr:'16px'}}>Restart</Button>
        <Button variant="contained" onClick={onNewGame}>New Game</Button>
      </Box>
    </Box>
  )
}

export default Header;
