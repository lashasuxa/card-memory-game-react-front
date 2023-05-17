import Header from '../components/Header'
import Board from '../components/Board'
import ScoreBoard from '../components/ScoreBoard';
import { Box } from '@mui/material';


function Game({ onNewGame,boardSize,players }) {
    return (
      <Box sx={{width:'100%', height:'100%', padding: '67px 165px 35px'}}>
        <Header onNewGame={onNewGame} />
        <Board boardSize={boardSize}/>
        <ScoreBoard players={players}/>
      </Box>
    )
  }
export default Game