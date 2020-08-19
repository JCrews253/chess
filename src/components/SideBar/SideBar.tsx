import React from 'react'
import './SideBar.css'
import { useSelector } from 'react-redux'
import { RootStore } from '../../store'
import { MovesState } from '../../Reducers/GameMoves/GameMovesReducer'
import { boardsChecked } from '../simulation/simulation'

interface Turn{
    number: number,
    lightMove: string,
    darkMove: string
}

const SideBar = () => {

    const FormatMoves = (state:MovesState):Turn[] => {
        const formatted:Turn[] = []
        formatted.push({
            number: 0,
            lightMove: 'Light',
            darkMove: 'Dark'
        })
        var count = 1
        for(let i = 0; i < state.moves.length; i+=2){
            formatted.push({
                number: count,
                lightMove: state.moves[i],
                darkMove: state.moves[i+1]
            })
            count++
        }
        return formatted
    }

    const turns = FormatMoves(useSelector((state: RootStore) => state.moves))

    return(
        <div className='SideBar__container'>
            <div className='SideBar__boards-checked'>Evaluated Boards: {boardsChecked}</div>
            <div className='SideBar__moves'>
                {turns.map( (_,idx) => {
                    return(
                        <div className={['SideBar__move',
                            ((idx % 2 === 1) ? "" : 'SideBar__move-light-background')].join(" ")}>
                            <div className='SideBar__move-item'>{turns[idx].number + ")."}</div>
                            <div className='SideBar__move-item'>{turns[idx].lightMove}</div>
                            <div className='SideBar__move-item'>{((turns[idx].darkMove === undefined) ? "" : turns[idx].darkMove)}</div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default SideBar