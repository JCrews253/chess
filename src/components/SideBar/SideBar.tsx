import React from 'react'
import './SideBar.css'
import { useSelector } from 'react-redux'
import { RootStore } from '../../store'

const SideBar = () => {

    const movesState = useSelector((state: RootStore) => state.moves)


    return(
        <div className='SideBar__container'>
            <div className='SideBar__moves'>
                {movesState.moves.map( (_,idx) => {
                    return(
                        <div className='SideBar__move'>
                            {idx + ")." +movesState.moves[idx]}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default SideBar