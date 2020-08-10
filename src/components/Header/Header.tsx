import React from 'react'
import './Header.css'

const Header = () => {

    return(
        <div className='Header__container'>
            <div className='Header__title-container'>
                <h1>Chess AI with Min Max Algorithm</h1>
            </div>
            <div className='Header__legend-container'>
                <div className='Header__legend-item'>
                    <div className='Header__selected-index'/>
                    <p>Selected Index</p>
                </div>
                <div className='Header__legend-item'>
                    <div className='Header__available-move'/>
                    <p>Available Move</p>
                </div>
                <div className='Header__legend-item'>
                    <div className='Header__killing-move'/>
                    <p>Taking Move</p>
                </div>
                <div className='Header__legend-item'>
                    <div className='Header__ai-start-pos'/>
                    <p>AI Turn Start Position</p>
                </div>
                <div className='Header__legend-item'>
                    <div className='Header__ai-finish-pos'/>
                    <p>AI Turn End Position</p>
                </div>
            </div>
        </div>
    )
}

export default Header