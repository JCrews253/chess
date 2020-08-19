import { GameMoveDispatchTypes, clearMoves, addMove} from './GameMovesAction'

export interface MovesState{
    moves: string[]
}

const initState = {
    moves: []
}

export const GameMovesReducer = (state:MovesState = initState, action: GameMoveDispatchTypes):MovesState => {
    switch(action.type){
        case 'ADD_MOVE':
            return {...state, moves: [...state.moves, action.payload]}
        case "CLEAR_MOVES":
            return {moves: []}
        default:
            return state
    }
}