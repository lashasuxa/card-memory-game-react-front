import Header from '../components/Header'
import Board from '../components/Board'
import Footer from '../components/Footer'
import { Box } from '@mui/material';

function Game({ onNewGame }) {
    return (
      <Box sx={{width:'100%', height:'100%', padding: '67px 165px 35px'}}>
        <Header onNewGame={onNewGame} />
        <Board/>
        <Footer/>
      </Box>
    )
  }
export default Game