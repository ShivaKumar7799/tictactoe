import React, { useState } from 'react'
import Board from './Board/board'
import './game.css'

function Game() {
  const [gameWinner,setGameWinner] = useState(" ");

  const getWinner = (turnValue) => {
      if(turnValue){
        setGameWinner(`Game winner : ${turnValue}`)
      } 
  }

  return (
   <div >
      <Board setGameWinner = {setGameWinner}  gameWinner = {gameWinner} getWinner = {(turnValue) => {getWinner(turnValue)}} />
      <span className='game' > {gameWinner} </span>
   </div>
  )
}

export default Game
