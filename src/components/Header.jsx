import { Box,Button, Typography } from "@mui/material"

function Header (){
    return (
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',pb:"85px"}}>
            <Typography sx={{fontSize:'40px',color:'black'}}>memory</Typography>
            <Box>
                <Button variant="contained" sx={{mr:'16px'}}>Restart</Button>
                <Button variant="contained">New Game</Button>
            </Box>
        </Box>
    )
}
export default Header