import { IPosition, Color, Piece, KnightMoves, HandleMoves } from "../piece/piece";

export interface Move{
    start: number,
    end: number
}



export const Simulate = (board:IPosition[], depth:number, color:Color) => {
    var bestScore = -Infinity
    var bestMove = {}
    const pieces:IPosition[] = board.filter( s => s.color === color)
    pieces.forEach( p => {
        const moves = HandleMoves(p,board)
        moves.forEach( m => {
            var score = MinMax(board,depth,false)
            if(score > bestScore){
                bestScore = score
                bestMove = {
                    start: p.index,
                    end: m
                }
            }
        })
    })
}

const MinMax = (board:IPosition[], depth:number, isMaximizing:boolean):number => {
    return -1
}