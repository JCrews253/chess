import { type } from "os";

export type addMove = {
    type: "ADD_MOVE",
    payload: string
}

export type clearMoves = {
    type: "CLEAR_MOVES",
    payload: string
}

export const GameMoves = (state:any, action:GameMoveActions):GameMoveDispatchTypes => ({
    type: action,
    payload: state
})

export type GameMoveActions = "ADD_MOVE" | "CLEAR_MOVES"

export type GameMoveDispatchTypes = addMove | clearMoves