import { Box } from "@mui/material"

function Footer() {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                }} className="players">
                <Box sx={{
                    width: '255px', 
                    height: '72px', 
                    borderRadius: '10px', 
                    backgroundColor: '#DFE7EC', 
                    padding: '15px'
                }}/>
                <Box sx={{
                    width: '255px', 
                    height: '72px', 
                    borderRadius: '10px', 
                    backgroundColor: '#DFE7EC', 
                    padding: '15px'
                }}/>
                <Box sx={{
                    width: '255px', 
                    height: '72px', 
                    borderRadius: '10px', 
                    backgroundColor: '#DFE7EC', 
                    padding: '15px'
                }}/>
                <Box sx={{
                    width: '255px', 
                    height: '72px', 
                    borderRadius: '10px', 
                    backgroundColor: '#DFE7EC', 
                    padding: '15px'
                }}/>
            </Box>
        </Box>
    )
}

export default Footer;
