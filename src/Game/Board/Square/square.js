import React from 'react'
import './square.css'

function Square(props) {
  return (
    <div>
       <button onClick={props.click} > {props.value} </button>
    </div>
  )
}

export default Square