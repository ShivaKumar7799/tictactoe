import React,{useEffect, useState} from 'react'
import Square from './Square/square'
import './board.css'

function Board(props) {
        const [squares,setSquare] = useState(Array(9).fill(null));
        const [turn,setTurn] = useState('X');
        const [status,setStatus] = useState(1);
        const [buttonClicks,setButtonClicks] = useState(0)


        const handleClick =(i) => {
                if(props.gameWinner === null){
                        if(squares[i] === null){
                                setButtonClicks((prev)=> prev + 1)
                                console.log(buttonClicks)
                                const newSquare = squares.slice();
                        if(turn === "X"){
                                newSquare[i] = "X"
                                setTurn("O");
                                setStatus(2)
                        }else{
                                newSquare[i] = "O"
                                setTurn("X");
                                setStatus(1)
                        }
                        setSquare(newSquare)
                        } else{
                                alert("Can't update already filled blocks")
                        }
                } else{
                        alert("Game Over, Winner is already declared")
                  }
        }
        const callWinner = (turn) => {
                let turnValue;
                let winnerStatus;

                status === 1 ? winnerStatus = 2 : winnerStatus = 1
                turn === "X"? turnValue = "O" : turnValue = "X"

                if(squares[0] === turnValue && squares[1] === turnValue && squares[2] === turnValue){
                        props.getWinner(winnerStatus)
                }
                else if(squares[3] === turnValue && squares[4] === turnValue && squares[5] === turnValue){
                        props.getWinner(winnerStatus)
                }
                else if(squares[6] === turnValue && squares[7] === turnValue && squares[8] === turnValue){
                props.getWinner(winnerStatus)
                }
                else if(squares[0] === turnValue && squares[3] === turnValue && squares[6] === turnValue){
                        props.getWinner(winnerStatus)
                }
                else if(squares[1] === turnValue && squares[4] === turnValue && squares[7] === turnValue){
                        props.getWinner(winnerStatus)
                }
                else if(squares[2] === turnValue && squares[5] === turnValue && squares[8] === turnValue){
                        props.getWinner(winnerStatus)
                }
                else if(squares[0] === turnValue && squares[4] === turnValue && squares[8] === turnValue){
                        props.getWinner(winnerStatus)
                }
                else if(squares[2] === turnValue && squares[4] === turnValue && squares[6] === turnValue){
                        props.getWinner(winnerStatus)
                }
                else if(buttonClicks === 9){
                        props.setGameStatus(`Match Drawn`)
                }
        }
        useEffect(() => {callWinner(turn)} ,[squares])
        const createSquare = (i) => {
                return <Square value = {squares[i]} click = {()=> {handleClick(i)}}  />
        }
  return (
    <div className='board'>
            <h1>Tic Tac Toe</h1>
            <span >{`Player ${status} Turn  `}</span>
            <table>
                    <tbody>
                            <tr>
                                    <td> { createSquare(0) }</td>
                                    <td> { createSquare(1) }</td>
                                    <td> { createSquare(2) }</td>
                            </tr>
                            <tr>
                                    <td> { createSquare(3) }</td>
                                    <td> { createSquare(4) }</td>
                                    <td> { createSquare(5) }</td>
                            </tr>
                            <tr>
                                    <td> { createSquare(6) }</td>
                                    <td> { createSquare(7) }</td>
                                    <td> { createSquare(8) }</td>
                            </tr>
                    </tbody>
            </table>
    </div>
  )
}

export default Board