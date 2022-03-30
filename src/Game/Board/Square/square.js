import React from 'react'
import './square.css'

function Square(props) {
  return (
    <>
      <button className='squareBtn' onClick={props.click} > {props.value} </button>
    </>
  )
}

export default Square

