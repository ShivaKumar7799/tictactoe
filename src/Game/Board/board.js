import React, {useState, useEffect } from 'react'
import Square from './Square/square'
import './board.css'

function Board(props) {
        const [squares,setSquares] = useState(Array(9).fill(null));
        const [turn, setTurn] = useState("X");
        const [status,setStatus] = useState("X");
        const [buttonClicks,setButtonClicks] = useState(0)


        const handleClick = (i) => {
                
               if(props.gameWinner === " "){
                if(squares[i] === null){
                        setButtonClicks((prev) => prev + 1);
                        const newSquare = squares.slice();
                        if(turn === "X"){
                                newSquare[i] = "X";
                                setTurn(()=> "O");
                                setStatus(()=> "O");
                        } else {
                                newSquare[i] = "O";
                                setTurn(()=> "X");
                                setStatus(()=> "X");
                        }
                setSquares(newSquare)
                } else {
                        alert("Can't update the Selected blocks")
                }
               }
               else{
                       alert("Game over, Winner is already declared")
               }
        }

        const callWinner = (turn) => {
                let turnValue;
                (turn === "X")? turnValue = "O" : turnValue = "X";

                if(squares[0] === turnValue && squares[1] === turnValue && squares[2] === turnValue){
                        props.getWinner(turnValue);
                } 
                else if(squares[3] === turnValue && squares[4] === turnValue && squares[5] === turnValue){
                        props.getWinner(turnValue);
                }
                else if(squares[6] === turnValue && squares[7] === turnValue && squares[8] === turnValue){
                        props.getWinner(turnValue);
                }
                else if(squares[0] === turnValue && squares[3] === turnValue && squares[6] === turnValue){
                        props.getWinner(turnValue);
                }
                else if(squares[1] === turnValue && squares[4] === turnValue && squares[7] === turnValue){
                        props.getWinner(turnValue);
                }
                else if(squares[2] === turnValue && squares[5] === turnValue && squares[8] === turnValue){
                        props.getWinner(turnValue);
                }
                else if(squares[0] === turnValue && squares[4] === turnValue && squares[8] === turnValue){
                        props.getWinner(turnValue);
                }
                else if(squares[2] === turnValue && squares[4] === turnValue && squares[6] === turnValue){
                        props.getWinner(turnValue);
                }
                else if(buttonClicks === 9){
                        props.setGameWinner(`Game Drawn`)
                }
        }
        useEffect(callWinner, [squares,turn,callWinner])

        const createSquare = (i) => {
                return <Square value = {squares[i]} click = {() => {handleClick(i)}} />
        }

  return (
   <div className='boardComponent'>   
        <h1> Tic Tac Toe :</h1>
        <span id= 'status'> {`Next player : ${status} `} </span> 
        <table className='table' >
                <tbody>
                        <tr>   
                                <td> {createSquare(0)}   </td>
                                <td> {createSquare(1)}   </td>
                                <td> {createSquare(2)}   </td>
                        </tr>
                        <tr>   
                                <td> {createSquare(3)}   </td>
                                <td> {createSquare(4)}   </td>
                                <td> {createSquare(5)}   </td>
                        </tr>
                        <tr>   
                                <td> {createSquare(6)}   </td>
                                <td> {createSquare(7)}   </td>
                                <td> {createSquare(8)}   </td>
                        </tr>
                </tbody>
        </table>
   </div>
  )
}

export default Board