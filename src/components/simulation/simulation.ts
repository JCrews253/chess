import { IPosition, Color, Piece, HandleMoves, CheckForPromotion} from "../piece/piece";

export interface Move{
    start: number,
    end: number
}

export var boardsChecked:number = 0

const KingPoints = 900
const QueenPoints = 90
const BishopPoints = 30
const KnightPoints = 30
const RookPoints = 50
const PawnPoints = 10

var reverseArray = function(array:number[]) {
    return array.slice().reverse();
};

const LPawnPosPoints = [
        0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,
        5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0,
        1.0,  1.0,  2.0,  3.0,  3.0,  2.0,  1.0,  1.0,
        0.5,  0.5,  1.0,  2.5,  2.5,  1.0,  0.5,  0.5,
        0.0,  0.0,  0.0,  2.0,  2.0,  0.0,  0.0,  0.0,
        0.5, -0.5, -1.0,  0.0,  0.0, -1.0, -0.5,  0.5,
        0.5,  1.0, 1.0,  -2.0, -2.0,  1.0,  1.0,  0.5,
        0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
    ];

const DPawnPosPoints = reverseArray(LPawnPosPoints);

const KnightPosPoints = [
        -5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0,
        -4.0, -2.0,  0.0,  0.0,  0.0,  0.0, -2.0, -4.0,
        -3.0,  0.0,  1.0,  1.5,  1.5,  1.0,  0.0, -3.0,
        -3.0,  0.5,  1.5,  2.0,  2.0,  1.5,  0.5, -3.0,
        -3.0,  0.0,  1.5,  2.0,  2.0,  1.5,  0.0, -3.0,
        -3.0,  0.5,  1.0,  1.5,  1.5,  1.0,  0.5, -3.0,
        -4.0, -2.0,  0.0,  0.5,  0.5,  0.0, -2.0, -4.0,
        -5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0
    ];

const LBishopPosPoints = [
     -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0,
     -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0,
     -1.0,  0.0,  0.5,  1.0,  1.0,  0.5,  0.0, -1.0,
     -1.0,  0.5,  0.5,  1.0,  1.0,  0.5,  0.5, -1.0,
     -1.0,  0.0,  1.0,  1.0,  1.0,  1.0,  0.0, -1.0,
     -1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0,
     -1.0,  0.5,  0.0,  0.0,  0.0,  0.0,  0.5, -1.0,
     -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0
];

const DBishopPosPoints = reverseArray(LBishopPosPoints);

const LRookPosPoints = [
      0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,
      0.5,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.5,
     -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5,
     -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5,
     -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5,
     -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5,
     -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5,
      0.0,   0.0, 0.0,  0.5,  0.5,  0.0,  0.0,  0.0
];

const DRookPosPoints = reverseArray(LRookPosPoints);

const QueenPosPoints = [
     -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0,
     -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0,
     -1.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0,
     -0.5,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5,
      0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5,
     -1.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0,
     -1.0,  0.0,  0.5,  0.0,  0.0,  0.0,  0.0, -1.0,
     -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0
];

const LKingPosPoints = [
     -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0,
     -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0,
     -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0,
     -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0,
     -2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0,
     -1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0,
      2.0,  2.0,  0.0,  0.0,  0.0,  0.0,  2.0,  2.0 ,
      2.0,  3.0,  1.0,  0.0,  0.0,  1.0,  3.0,  2.0
];

const DKingPosPoints = reverseArray(LKingPosPoints);


export const Simulate = async (board:IPosition[], depth:number, color:Color):Promise<Move> => {
    boardsChecked = 0
    var cloneBoard:IPosition[] = JSON.parse(JSON.stringify(board))
    var bestScore = -Infinity
    var bestMove:Move = {start:-1,end:-1}
    var alpha:number = -Infinity
    var beta:number = Infinity
    const pieces:IPosition[] = cloneBoard.filter( s => s.color === color)
    pieces.forEach( p => {
        const moves = HandleMoves(p,cloneBoard)
        moves.forEach( m => {
            boardsChecked++
            cloneBoard[m] = {
                piece: cloneBoard[p.index].piece,
                color: cloneBoard[p.index].color,
                firstMove:false,
                index: m,
            }
            if(CheckForPromotion(m,cloneBoard)){
                cloneBoard[m] = {
                    piece: Piece.Queen,
                    color: cloneBoard[p.index].color,
                    index: m,
                    firstMove:false,  
                }
            }
            cloneBoard[p.index] = {
                piece: Piece.Empty,
                color: Color.None,
                index: p.index,
                firstMove:false
            }
            var score = MinMax(cloneBoard,depth-1, color === Color.Light ? Color.Dark : Color.Light, false, alpha,beta)
            if(score > bestScore){  
                bestScore = score
                bestMove = {
                    start: p.index,
                    end: m
                }
            }
            cloneBoard = JSON.parse(JSON.stringify(board))
        })
    })
    return bestMove
}

export const MinMax = (board:IPosition[], depth:number, color:Color, isMaximizing:boolean,alpha:number, beta:number):number => {
    //Make a copy of the board
    var cloneBoard:IPosition[] = JSON.parse(JSON.stringify(board))
    //if the depth reaches the end return the score of the current board
    if(depth <= 0) return CalcScore(cloneBoard)
    //set -inf if maximizing players turn 
    var bestScore = isMaximizing ? -Infinity : Infinity
    var bestMove:Move = {start: -1, end: -1}
    const pieces:IPosition[] = cloneBoard.filter( s => s.color === color)
    pieces.forEach( p => {
        const moves = HandleMoves(p,cloneBoard)
        moves.forEach( m => {
            boardsChecked++
            cloneBoard[m] = {
                piece: cloneBoard[p.index].piece,
                color: cloneBoard[p.index].color,
                index: m,
                firstMove:false,  
            }
            if(CheckForPromotion(m,cloneBoard)){
                cloneBoard[m] = {
                    piece: Piece.Queen,
                    color: cloneBoard[p.index].color,
                    index: m,
                    firstMove:false,  
                }
            }
            cloneBoard[p.index] = {
                piece: Piece.Empty,
                color: Color.None,
                index: p.index,
                firstMove:false
            }
            var score = MinMax(cloneBoard,depth-1, color === Color.Light ? Color.Dark : Color.Light, isMaximizing ? false : true,alpha,beta)       
            if(isMaximizing ? score > bestScore : score < bestScore){
                bestScore = score
                bestMove = {
                    start: p.index,
                    end: m
                }
            }
            cloneBoard = JSON.parse(JSON.stringify(board))
        })
    })
    if(bestMove.start !== -1 && bestMove.end !== -1){
        cloneBoard[bestMove.end] = {
            piece: cloneBoard[bestMove.start].piece,
            color: cloneBoard[bestMove.start].color,
            index: bestMove.end,
            firstMove:false,  
        }
        if(CheckForPromotion(bestMove.end,cloneBoard)){
            cloneBoard[bestMove.end] = {
                piece: Piece.Queen,
                color: cloneBoard[bestMove.end].color,
                index: bestMove.end,
                firstMove:false,  
            }
        }
        cloneBoard[bestMove.start] = {
            piece: Piece.Empty,
            color: Color.None,
            index: bestMove.start,
            firstMove:false
        }
        return CalcScore(cloneBoard)
    }
    else return  isMaximizing ? -Infinity : Infinity
}

const CalcScore = (board:IPosition[]):number => {
    const lightPieces =  board.filter( s => s.color === Color.Light)
    const darkPieces =  board.filter( s => s.color === Color.Dark)

    var score = 0
    darkPieces.forEach( p => score+= GetPoints(p))
    lightPieces.forEach( p => score-=GetPoints(p))
    return score
}

const GetPoints = (piece:IPosition):number => {
    if(piece.piece === Piece.King ) return KingPoints + ((piece.color === Color.Light) ? LKingPosPoints[piece.index] : DKingPosPoints[piece.index])
    else if(piece.piece === Piece.Queen ) return QueenPoints + QueenPosPoints[piece.index]
    else if(piece.piece === Piece.Bishop ) return BishopPoints + ((piece.color === Color.Light) ? LBishopPosPoints[piece.index] : DBishopPosPoints[piece.index])
    else if(piece.piece === Piece.Knight ) return KnightPoints + KnightPosPoints[piece.index]
    else if(piece.piece === Piece.Rook ) return RookPoints + ((piece.color === Color.Light) ? LRookPosPoints[piece.index] : DRookPosPoints[piece.index])
    else if(piece.piece === Piece.Pawn ) return PawnPoints + ((piece.color === Color.Light) ? LPawnPosPoints[piece.index] : DPawnPosPoints[piece.index])
    else return 0
} 