import React, { useState } from 'react'
import Board from './Board/board'
import './game.css'

function Game() {
        const [gameWinner,setGameWinner] = useState(null);
        const [gameStatus,setGameStatus] = useState(null)

        const getWinner = (winnerStatus) => {
            setGameWinner(`Game winner: Player ${winnerStatus}`);
        }
  return (
    <div className = "game" >
        <Board  setGameStatus = {setGameStatus} gameWinner= {gameWinner}
                setGameWinner = {setGameWinner}
                getWinner = {(winnerStatus)=> {getWinner(winnerStatus)}} />
        <span className='gameSpan' > {gameWinner}</span>
        <span className='gameSpan' id='gameStatus' >{gameStatus}</span>
    </div>
  )  
}

export default Game