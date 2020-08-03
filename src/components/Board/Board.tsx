import React from 'react'
import './Board.css'

const Board = () => {

    var spaces = new Array(64).fill(0)
    console.log(spaces)
    return(
        <div className='Board__container'>
            {spaces.map( (_,idx) => {
                return <div className='space'>idx</div>
            })}
        </div>
    )
}

export default Board