import React, { useState, forwardRef, useImperativeHandle } from 'react'
import './PopUpWinner.css'

const PopUpWinner = forwardRef((winner:string,ref) => {

    const[display,setDisplay] = useState(true)

    useImperativeHandle(ref, () =>{
        return {
            showPopUp: () => Show(),
            hidePopUP: () => Hide()
        }
    })

    const Show = () => {
        if(!display) setDisplay(true)
    }

    const Hide = () => {
        if(display) setDisplay(false)
    }


    if(display){
        return(
            <div className='PopUpWinner__container'>
                <div className='PopUpWinner__backdrop'>
                    <div className='PopUpWinner__Content'>
                        <h1>{winner} has won!</h1>
                    </div>
                </div>    
            </div>
        )
    }
    else return null
}
)
export default PopUpWinner