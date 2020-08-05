import React, { useState } from 'react'
import './Board.css'

interface boardArray{
    piece: Piece,
    color?: Color,
    firstMove?: boolean,
}

enum Color{
    dark,
    light,
    none
}

enum Piece{
    king,
    queen,
    rook,
    bishop,
    knight,
    pawn, 
    empty
}

const Board = () => {

    const InitializeBoard = ():boardArray[] => {
        let newBoard:boardArray[] = new Array(64).fill({piece: Piece.empty, color: Color.none, firstMove: true})
        newBoard[0] = {piece: Piece.rook, color: Color.dark, firstMove: true}
        newBoard[1] = {piece: Piece.knight, color: Color.dark, firstMove: true}
        newBoard[2] = {piece: Piece.bishop, color: Color.dark, firstMove: true}
        newBoard[3] = {piece: Piece.queen, color: Color.dark, firstMove: true}
        newBoard[4] = {piece: Piece.king, color: Color.dark, firstMove: true}
        newBoard[5] = {piece: Piece.bishop, color: Color.dark, firstMove: true}
        newBoard[6] = {piece: Piece.knight, color: Color.dark, firstMove: true}
        newBoard[7] = {piece: Piece.rook, color: Color.dark, firstMove: true}

        newBoard[44] = {piece: Piece.rook, color: Color.dark, firstMove: true}

        for(let i=8; i<16; i++) newBoard[i] = {piece: Piece.pawn, color: Color.dark, firstMove: true}
        newBoard[56] = {piece: Piece.rook, color: Color.light, firstMove: true}
        newBoard[57] = {piece: Piece.knight, color: Color.light, firstMove: true}
        newBoard[58] = {piece: Piece.bishop, color: Color.light, firstMove: true}
        newBoard[59] = {piece: Piece.queen, color: Color.light, firstMove: true}
        newBoard[60] = {piece: Piece.king, color: Color.light, firstMove: true}
        newBoard[61] = {piece: Piece.bishop, color: Color.light, firstMove: true}
        newBoard[62] = {piece: Piece.knight, color: Color.light, firstMove: true}
        newBoard[63] = {piece: Piece.rook, color: Color.light, firstMove: true}
        for(let i=49; i<56; i++) newBoard[i] = {piece: Piece.pawn, color: Color.light, firstMove: true}
        return newBoard
    }
    const GetRow = (idx:number):number => Math.floor( idx / 8 )
    const GetCol = (idx:number):number => idx >= 8 ? idx % 8 : idx
    const GetIdxByRowCol = (row:number,col:number):number => 8*row + col
    const isLight = (idx:number) => ( GetRow(idx) % 2 ) === (GetCol(idx) % 2)
    const isLightPiece = (idx:number) => board[idx].color === Color.light 
    const isKing = (idx:number) =>  board[idx].piece === Piece.king
    const isQueen = (idx:number) =>  board[idx].piece === Piece.queen
    const isBishop = (idx:number) =>  board[idx].piece === Piece.bishop
    const isKnight = (idx:number) =>  board[idx].piece === Piece.knight
    const isRook = (idx:number) =>  board[idx].piece === Piece.rook
    const isPawn = (idx:number) =>  board[idx].piece === Piece.pawn
    const isSelected = (idx:number) => selected === idx
    const isAvailableMove = (idx:number) => availableMoves.includes(idx)
    const isKillingMove = (idx:number) => killingMoves.includes(idx)
    const SwapTurns = () => setTurn((turn === Color.light) ? Color.dark : Color.light)
    const HandlePieceClick = (idx:number) => {

        if(availableMoves.includes(idx) && board[idx].piece === Piece.empty){
            const newBoard = [...board]
            newBoard[idx] = {
                ...newBoard[selected],
                firstMove: false
            }
            newBoard[selected] = {
                piece: Piece.empty,
                color: Color.none
            }
            setAvailableMoves([])
            setKillingMoves([])
            SetSelected(-1)
            setBoard(newBoard)
            SwapTurns()
        }
        else if(availableMoves.includes(idx)){
            const newBoard = [...board]
            newBoard[idx] = {
                ...newBoard[selected],
                firstMove: false
            }
            newBoard[selected] = {
                piece: Piece.empty,
                color: Color.none
            }
            setAvailableMoves([])
            setKillingMoves([])
            SetSelected(-1)
            setBoard(newBoard)
            SwapTurns()
        }
        else{
            SetSelected(idx)
            setAvailableMoves([])
            setKillingMoves([])
            if(isKnight(idx)) ShowKnightMoves(idx)
            else if(isRook(idx)) ShowRookMoves(idx)
            else if(isBishop(idx)) ShowBishopMoves(idx)
            else if(isBishop(idx)) ShowBishopMoves(idx)
            else if(isQueen(idx)) ShowQueenMoves(idx)
            else if(isKing(idx)) ShowKingMoves(idx)
            else if(isPawn(idx)) ShowPawnMoves(idx)
        }
    }
    const ShowKnightMoves = (idx: number) => {
        const row = GetRow(idx)
        const col = GetCol(idx)      
        const moves:number[] = []
        if(row >= 2 && col <= 6) moves.push(GetIdxByRowCol(row-2,col+1))
        if(row >= 1 && col <= 5) moves.push(GetIdxByRowCol(row-1,col+2))
        if(row <= 6 && col <= 5) moves.push(GetIdxByRowCol(row+1,col+2))
        if(row <= 5 && col <= 6) moves.push(GetIdxByRowCol(row+2,col+1))
        if(row <= 5 && col >= 1) moves.push(GetIdxByRowCol(row+2,col-1))
        if(row <= 6 && col >= 2) moves.push(GetIdxByRowCol(row+1,col-2))
        if(row >= 1 && col >= 2) moves.push(GetIdxByRowCol(row-1,col-2))
        if(row >= 2 && col >= 1) moves.push(GetIdxByRowCol(row-2,col-1))
        FilterAvailableMoves(moves,idx)
    }
    const ShowRookMoves = (idx:number) => {
        const row = GetRow(idx)
        const col = GetCol(idx)
        const moves:number[] =[]
        //up
        var cRow = row
        while((cRow - 1 > -1 ) && board[GetIdxByRowCol(cRow-1,col)].piece === Piece.empty){
            moves.push(GetIdxByRowCol(cRow-1,col))
            cRow--
        }
        if(cRow > 0 && board[GetIdxByRowCol(cRow-1,col)].color !== turn) moves.push(GetIdxByRowCol(cRow-1,col))

        //Right
        var cCol = col
        while((cCol + 1 < 8 && board[GetIdxByRowCol(row,cCol+1)].piece === Piece.empty)){
            moves.push(GetIdxByRowCol(row,cCol+1))
            cCol++
        }
        if(cCol < 7 && board[GetIdxByRowCol(row,cCol + 1)].color !== turn) moves.push(GetIdxByRowCol(row,cCol+1))


        //Down
        cRow = row
        while((cRow + 1 < 8 && board[GetIdxByRowCol(cRow+1,col)].piece === Piece.empty)){
            moves.push(GetIdxByRowCol(cRow+1,col))
            cRow++
        }
        if(cRow < 7 && board[GetIdxByRowCol(cRow+1,col)].color !== turn) moves.push(GetIdxByRowCol(cRow+1,col))

        //Left
        cCol = col
        while((cCol - 1 > 0 && board[GetIdxByRowCol(row,cCol-1)].piece === Piece.empty)){
            moves.push(GetIdxByRowCol(row,cCol-1))
            cCol--
        }
        if(cCol > 0 && board[GetIdxByRowCol(row,cCol - 1)].color !== turn) moves.push(GetIdxByRowCol(row,cCol-1))

        FilterAvailableMoves(moves,idx)
    }
    const ShowBishopMoves = (idx:number) => {
        const row = GetRow(idx)
        const col = GetCol(idx)      
        const moves:number[] = []
        //Up Right
        var cRow = row
        var cCol = col
        while(cRow - 1 > 0 && cCol + 1 < 8 && board[GetIdxByRowCol(cRow-1,cCol+1)].piece === Piece.empty){
            moves.push(GetIdxByRowCol(cRow-1,cCol+1))
            cRow--
            cCol++
        }
        if(cRow - 1 > 0 && cCol + 1 < 8 && board[GetIdxByRowCol(cRow-1,cCol+1)].color !== turn) moves.push(GetIdxByRowCol(cRow-1,cCol+1))
        
        //Down Right
        cRow = row
        cCol = col
        while(cRow + 1 < 8 && cCol + 1 < 8 && board[GetIdxByRowCol(cRow+1,cCol+1)].piece === Piece.empty){
            moves.push(GetIdxByRowCol(cRow+1,cCol+1))
            cRow++
            cCol++
        }
        if(cRow + 1 < 8 && cCol + 1 < 8 && board[GetIdxByRowCol(cRow+1,cCol+1)].color !== turn) moves.push(GetIdxByRowCol(cRow+1,cCol+1))

        //Down Left
        cRow = row
        cCol = col
        while(cRow + 1 < 8 && cCol - 1 > -1 && board[GetIdxByRowCol(cRow+1,cCol-1)].piece === Piece.empty){
            moves.push(GetIdxByRowCol(cRow+1,cCol-1))
            cRow++
            cCol--
        }
        if(cRow + 1 < 8 && cCol - 1 > -1 && board[GetIdxByRowCol(cRow+1,cCol-1)].color !== turn) moves.push(GetIdxByRowCol(cRow+1,cCol-1))

        //Up Left
        cRow = row
        cCol = col
        while(cRow - 1 > -1 && cCol - 1 > -1 && board[GetIdxByRowCol(cRow-1,cCol-1)].piece === Piece.empty){
            moves.push(GetIdxByRowCol(cRow-1,cCol-1))
            cRow--
            cCol--
        }
        if(cRow - 1 > -1 && cCol - 1 > -1 && board[GetIdxByRowCol(cRow-1,cCol-1)].color !== turn) moves.push(GetIdxByRowCol(cRow-1,cCol-1))

        FilterAvailableMoves(moves,idx)
    }
    const ShowQueenMoves = (idx:number) => {
        const row = GetRow(idx)
        const col = GetCol(idx)      
        const moves:number[] = []
        //Up Right
        var cRow = row
        var cCol = col
        while(cRow - 1 > -1 && cCol + 1 < 8 && board[GetIdxByRowCol(cRow-1,cCol+1)].piece === Piece.empty){
            moves.push(GetIdxByRowCol(cRow-1,cCol+1))
            cRow--
            cCol++
        }
        if(cRow - 1 > -1 && cCol + 1 < 8 && board[GetIdxByRowCol(cRow-1,cCol+1)].color !== turn) moves.push(GetIdxByRowCol(cRow-1,cCol+1))
        
        //Down Right
        cRow = row
        cCol = col
        while(cRow + 1 < 8 && cCol + 1 < 8 && board[GetIdxByRowCol(cRow+1,cCol+1)].piece === Piece.empty){
            moves.push(GetIdxByRowCol(cRow+1,cCol+1))
            cRow++
            cCol++
        }
        if(cRow + 1 < 8 && cCol + 1 < 8 && board[GetIdxByRowCol(cRow+1,cCol+1)].color !== turn) moves.push(GetIdxByRowCol(cRow+1,cCol+1))

        //Down Left
        cRow = row
        cCol = col
        while(cRow + 1 < 8 && cCol - 1 > -1 && board[GetIdxByRowCol(cRow+1,cCol-1)].piece === Piece.empty){
            moves.push(GetIdxByRowCol(cRow+1,cCol-1))
            cRow++
            cCol--
        }
        if(cRow + 1 < 8 && cCol - 1 > -1 && board[GetIdxByRowCol(cRow+1,cCol-1)].color !== turn) moves.push(GetIdxByRowCol(cRow+1,cCol-1))

        //Up Left
        cRow = row
        cCol = col
        while(cRow - 1 > -1 && cCol - 1 > -1 && board[GetIdxByRowCol(cRow-1,cCol-1)].piece === Piece.empty){
            moves.push(GetIdxByRowCol(cRow-1,cCol-1))
            cRow--
            cCol--
        }
        if(cRow - 1 > -1 && cCol - 1 > -1 && board[GetIdxByRowCol(cRow-1,cCol-1)].color !== turn) moves.push(GetIdxByRowCol(cRow-1,cCol-1))

        //up
        cRow = row
        while((cRow - 1 > -1 ) && board[GetIdxByRowCol(cRow-1,col)].piece === Piece.empty){
            moves.push(GetIdxByRowCol(cRow-1,col))
            cRow--
        }
        if(cRow > 0 && board[GetIdxByRowCol(cRow-1,col)].color !== turn) moves.push(GetIdxByRowCol(cRow-1,col))

        //Right
        cCol = col
        while((cCol + 1 < 8 && board[GetIdxByRowCol(row,cCol+1)].piece === Piece.empty)){
            moves.push(GetIdxByRowCol(row,cCol+1))
            cCol++
        }
        if(cCol < 7 && board[GetIdxByRowCol(row,cCol + 1)].color !== turn) moves.push(GetIdxByRowCol(row,cCol+1))


        //Down
        cRow = row
        while((cRow + 1 < 8 && board[GetIdxByRowCol(cRow+1,col)].piece === Piece.empty)){
            moves.push(GetIdxByRowCol(cRow+1,col))
            cRow++
        }
        if(cRow < 7 && board[GetIdxByRowCol(cRow+1,col)].color !== turn) moves.push(GetIdxByRowCol(cRow+1,col))

        //Left
        cCol = col
        while((cCol - 1 > 0 && board[GetIdxByRowCol(row,cCol-1)].piece === Piece.empty)){
            moves.push(GetIdxByRowCol(row,cCol-1))
            cCol--
        }
        if(cCol > 0 && board[GetIdxByRowCol(row,cCol - 1)].color !== turn) moves.push(GetIdxByRowCol(row,cCol-1))

        FilterAvailableMoves(moves,idx)
    }
    const ShowKingMoves = (idx:number) => {
        const row = GetRow(idx)
        const col = GetCol(idx)      
        const moves:number[] = []
        if(row > 0) moves.push(GetIdxByRowCol(row-1,col)) //up
        if(row > 0 && col < 7) moves.push(GetIdxByRowCol(row-1,col+1)) //up right
        if(col < 7) moves.push(GetIdxByRowCol(row,col+1)) //right
        if(row < 7 && col < 7) moves.push(GetIdxByRowCol(row+1,col+1)) //down right
        if(row < 7) moves.push(GetIdxByRowCol(row+1,col)) //down
        if(row < 7 && col > 0) moves.push(GetIdxByRowCol(row+1,col-1)) //down left
        if(col > 0) moves.push(GetIdxByRowCol(row,col-1)) //left
        if(row > 0 && col > 0) moves.push(GetIdxByRowCol(row-1,col-1)) //up left

        //castling

        FilterAvailableMoves(moves,idx)
    }
    const ShowPawnMoves = (idx:number) => {
        const row = GetRow(idx)
        const col = GetCol(idx)
        const isFirst = board[idx].firstMove      
        const moves:number[] = []
        if(board[idx].color === Color.light){
            if(board[GetIdxByRowCol(row-1,col)].piece === Piece.empty) moves.push(GetIdxByRowCol(row-1,col))
            if(isFirst && board[GetIdxByRowCol(row-1,col)].piece === Piece.empty) moves.push(GetIdxByRowCol(row-2,col))
            if(board[GetIdxByRowCol(row-1,col+1)].piece !== Piece.empty) moves.push(GetIdxByRowCol(row-1,col+1))
            if(board[GetIdxByRowCol(row-1,col-1)].piece !== Piece.empty) moves.push(GetIdxByRowCol(row-1,col-1))
        }
        else{
            if(board[GetIdxByRowCol(row+1,col)].piece === Piece.empty) moves.push(GetIdxByRowCol(row+1,col))
            if(isFirst && board[GetIdxByRowCol(row+1,col)].piece === Piece.empty) moves.push(GetIdxByRowCol(row+2,col))
            if(board[GetIdxByRowCol(row+1,col+1)].piece !== Piece.empty) moves.push(GetIdxByRowCol(row+1,col+1))
            if(board[GetIdxByRowCol(row+1,col-1)].piece !== Piece.empty) moves.push(GetIdxByRowCol(row+1,col-1))
        }
        FilterAvailableMoves(moves,idx)
    }

    const FilterAvailableMoves = (array:number[],idx:number) => {
        var availableMoves = array.filter(() => board[idx].color === turn)
        var killingMoves:number[] = []
        availableMoves = availableMoves.filter(p => {
            if(board[p].piece !== Piece.empty && isLightPiece(idx) === isLightPiece(p)){
                return false
            }
            else if(board[p].piece !== Piece.empty) killingMoves.push(p)  
            return true
        })
        setAvailableMoves(availableMoves)
        setKillingMoves(killingMoves)
    }

    const[turn,setTurn]=useState(Color.light)
    const[board,setBoard] = useState( () => InitializeBoard())
    const[selected,SetSelected] = useState(-1)
    const[availableMoves, setAvailableMoves] = useState([-1])
    const[killingMoves,setKillingMoves] = useState([-1])
    const[lightPieces,setLightPieces] = useState([])
    const[takenLightPieces,setTakenLightPieces] = useState([])
    const[darkPieces,setDarkPieces] = useState([])
    const[takenDarkPieces,setTakenDarkPieces] = useState(new Array(0))

    return(
        <div className='Board__container'>
            <div className='Board__gameboard'>
                {board.map( (_,idx) => {
                    return( 
                    <div className={[
                        'Board__space',
                        `${isLight(idx) ? 'Board__spaceLight' : 'Board__spaceDark'}`,
                        `${isKing(idx) ? isLightPiece(idx) ? 'Board__king-light' : 'Board__king-dark' : '' }`,
                        `${isQueen(idx) ? isLightPiece(idx) ? 'Board__queen-light' : 'Board__queen-dark' : '' }`,
                        `${isBishop(idx) ? isLightPiece(idx) ? 'Board__bishop-light' : 'Board__bishop-dark' : '' }`,
                        `${isKnight(idx) ? isLightPiece(idx) ? 'Board__knight-light' : 'Board__knight-dark' : '' }`,
                        `${isRook(idx) ? isLightPiece(idx) ? 'Board__rook-light' : 'Board__rook-dark' : '' }`,
                        `${isPawn(idx) ? isLightPiece(idx) ? 'Board__pawn-light' : 'Board__pawn-dark' : '' }`,
                        `${isSelected(idx) && 'Board__Selected'}`,
                        `${isAvailableMove(idx) && 'Board__AvailableMove'}`,
                        `${isKillingMove(idx) && 'Board__KillingMove'}`
                    ].join(" ")}
                    onClick={() => HandlePieceClick(idx)}>{idx}</div>)
                })}
            </div>
        </div>
    )
}
 
export default Board