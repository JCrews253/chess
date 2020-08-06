import { IPosition, Color, Piece, KnightMoves, HandleMoves, PawnMoves } from "../piece/piece";
import Board from "../Board/Board";

export interface Move{
    start: number,
    end: number
}

const KingPoints = 900
const QueenPoints = 90
const BishopPoints = 30
const KnightPoints = 30
const RookPoints = 50
const PawnPoints = 10


export const Simulate = (board:IPosition[], depth:number, color:Color):Move => {
    const cloneBoard:IPosition[] = JSON.parse(JSON.stringify(board))
    var bestScore = -Infinity
    var bestMove:Move = {start:-1,end:-1}
    const pieces:IPosition[] = cloneBoard.filter( s => s.color === color)
    pieces.forEach( p => {
        const moves = HandleMoves(p,cloneBoard)
        moves.forEach( m => {
            var score = MinMax(cloneBoard,depth, color, false)
            if(score > bestScore){
                bestScore = score
                bestMove = {
                    start: p.index,
                    end: m
                }
            }
        })
    })
    return bestMove
}

const MinMax = (board:IPosition[], depth:number, color:Color, isMaximizing:boolean):number => {
    var cloneBoard:IPosition[] = JSON.parse(JSON.stringify(board))
    if(depth <= 0) return CalcScore(cloneBoard)
    var bestScore = isMaximizing ? -Infinity : Infinity
    var bestMove:Move = {start: -1, end: -1}
    const pieces:IPosition[] = cloneBoard.filter( s => s.color === color)
    pieces.forEach( p => {
        const moves = HandleMoves(p,cloneBoard)
        moves.forEach( m => {
            const originalState = [...cloneBoard]
            cloneBoard[m] = {
                ...cloneBoard[p.index],
                firstMove:false,
                index: m,
            }
            cloneBoard[p.index] = {
                piece: Piece.Empty,
                color: Color.None,
                index: p.index,
                firstMove:false
            }
            var score = MinMax(cloneBoard,depth-1, color, false)
            cloneBoard = [...originalState]
            if(isMaximizing ? score > bestScore : score < bestScore){
                bestScore = score
                bestMove = {
                    start: p.index,
                    end: m
                }
            }
        })
    })
    return CalcScore(cloneBoard)
}

const CalcScore = (board:IPosition[]):number => {
    const lightPieces =  board.filter( s => s.color === Color.Light)
    const darkPieces =  board.filter( s => s.color === Color.Dark)

    var score = 0
    darkPieces.forEach( p => score-= GetPoints(p))
    lightPieces.forEach( p => score+=GetPoints(p))
    return score
}

const GetPoints = (piece:IPosition):number => {
    if(piece.piece === Piece.King ) return KingPoints
    else if(piece.piece === Piece.Queen ) return QueenPoints
    else if(piece.piece === Piece.Bishop ) return BishopPoints
    else if(piece.piece === Piece.Knight ) return KnightPoints
    else if(piece.piece === Piece.Rook ) return RookPoints
    else if(piece.piece === Piece.Pawn ) return PawnPoints
    else return 0
} 