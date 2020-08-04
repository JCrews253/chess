import React, { useState } from 'react'
import './Board.css'
import { kStringMaxLength } from 'buffer'

interface boardArray{
    piece: Piece,
    color: Color,
}

enum Color{
    dark,
    light
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
        let newBoard:boardArray[] = new Array(64).fill({piece: Piece.empty, color: Color.light})
        newBoard[0] = {piece: Piece.rook, color: Color.dark}
        newBoard[1] = {piece: Piece.knight, color: Color.dark}
        newBoard[2] = {piece: Piece.bishop, color: Color.dark}
        newBoard[3] = {piece: Piece.queen, color: Color.dark}
        newBoard[4] = {piece: Piece.king, color: Color.dark}
        newBoard[5] = {piece: Piece.bishop, color: Color.dark}
        newBoard[6] = {piece: Piece.knight, color: Color.dark}
        newBoard[7] = {piece: Piece.rook, color: Color.dark}
        for(let i=8; i<16; i++) newBoard[i] = {piece: Piece.pawn, color: Color.dark}
        newBoard[56] = {piece: Piece.rook, color: Color.light}
        newBoard[57] = {piece: Piece.knight, color: Color.light}
        newBoard[58] = {piece: Piece.bishop, color: Color.light}
        newBoard[59] = {piece: Piece.queen, color: Color.light}
        newBoard[60] = {piece: Piece.king, color: Color.light}
        newBoard[61] = {piece: Piece.bishop, color: Color.light}
        newBoard[62] = {piece: Piece.knight, color: Color.light}
        newBoard[63] = {piece: Piece.rook, color: Color.light}
        for(let i=48; i<56; i++) newBoard[i] = {piece: Piece.pawn, color: Color.light}
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
    const HandlePieceClick = (idx:number) => {
        SetSelected(idx)
        setAvailableMoves([])
        if(isKnight(idx)) ShowKnightMoves(idx)

    }

    const ShowKnightMoves = (idx: number) => {
        const row = GetRow(idx)
        const col = GetCol(idx)
        
        const KnightMoves:number[][] = [[]]
        KnightMoves.push(
            [row - 2, col - 1 ],
            [row - 2, col + 1 ],
            [row - 1, col - 2 ],
            [row - 1, col + 2 ],
            [row + 1, col - 2 ],
            [row + 1, col + 2 ],
            [row + 2, col - 1 ],
            [row + 2, col + 1 ]
            )
        FilterAvailableMoves(KnightMoves,idx)
    }

    const FilterAvailableMoves = (array:number[][],idx:number) => {
        const isdark = !isLight(idx)
        const availableMoves = array.filter(e => (e[0] > -1 && e[0] < 8 && e[1] > -1 && e[1] < 8))
        var convertedToIdx:number[] = []
        availableMoves.forEach(e => convertedToIdx.push(GetIdxByRowCol(e[0],e[1])))
    
        setAvailableMoves(convertedToIdx)
    }


    const[board,setBoard] = useState( () => InitializeBoard())
    const[selected,SetSelected] = useState(-1)
    const[availableMoves, setAvailableMoves] = useState([-1])

    return(
        <div className='Board__container'>
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
                    `${isAvailableMove(idx) && 'Board__AvailableMove'}`
                ].join(" ")}
                onClick={() => HandlePieceClick(idx)}>{idx}</div>)
            })}
        </div>
    )
}
 
export default Board