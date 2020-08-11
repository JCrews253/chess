import React, { useState, useEffect, useCallback } from 'react'
import './Board.css'
import { Piece, IPosition, Color, HandleMoves, CheckForPromotion, CheckForRightCastle, CheckForLeftCastle } from '../piece/piece'
import { Simulate, Move, boardsChecked } from '../simulation/simulation'

const Board = () => {
    const GetRow = (idx:number):number => Math.floor( idx / 8 )
    const GetCol = (idx:number):number => idx >= 8 ? idx % 8 : idx
    const isLight = (idx:number) => ( GetRow(idx) % 2 ) === (GetCol(idx) % 2)
    const isLightPiece = (idx:number) => board[idx].color === Color.Light 
    const isKing = (idx:number) =>  board[idx].piece === Piece.King
    const isQueen = (idx:number) =>  board[idx].piece === Piece.Queen
    const isBishop = (idx:number) =>  board[idx].piece === Piece.Bishop
    const isKnight = (idx:number) =>  board[idx].piece === Piece.Knight
    const isRook = (idx:number) =>  board[idx].piece === Piece.Rook
    const isPawn = (idx:number) =>  board[idx].piece === Piece.Pawn
    const SwapTurns = () => setTurn((turn === Color.Light) ? Color.Dark : Color.Light)
    const isSelected = (idx:number) => selected === idx
    const isAvailableMove = (idx:number) => availableMoves.includes(idx)
    const isKillingMove = (idx:number) => killingMoves.includes(idx)
    const InitializeBoard = ():IPosition[] => {
        let newBoard:IPosition[] = new Array(64).fill({piece: Piece.Empty, color: Color.None, firstMove: true, index: -1})
        newBoard.forEach( (_,i) => newBoard[i] = {piece: Piece.Empty, color: Color.None, firstMove: true, index: i})
        newBoard[0] = {piece: Piece.Rook, color: Color.Dark, firstMove: true, index: 0}
        newBoard[1] = {piece: Piece.Knight, color: Color.Dark, firstMove: true, index: 1}
        newBoard[2] = {piece: Piece.Bishop, color: Color.Dark, firstMove: true, index: 2}
        newBoard[3] = {piece: Piece.Queen, color: Color.Dark, firstMove: true, index: 3}
        newBoard[4] = {piece: Piece.King, color: Color.Dark, firstMove: true, index: 4}
        newBoard[5] = {piece: Piece.Bishop, color: Color.Dark, firstMove: true, index: 5}
        newBoard[6] = {piece: Piece.Knight, color: Color.Dark, firstMove: true, index: 6}
        newBoard[7] = {piece: Piece.Rook, color: Color.Dark, firstMove: true, index: 7}
        for(let i=8; i<16; i++) newBoard[i] = {piece: Piece.Pawn, color: Color.Dark, firstMove: true, index: i}

        newBoard[56] = {piece: Piece.Rook, color: Color.Light, firstMove: true, index: 56}
        newBoard[57] = {piece: Piece.Knight, color: Color.Light, firstMove: true, index: 57}
        newBoard[58] = {piece: Piece.Bishop, color: Color.Light, firstMove: true, index: 58}
        newBoard[59] = {piece: Piece.Queen, color: Color.Light, firstMove: true, index: 59}
        newBoard[60] = {piece: Piece.King, color: Color.Light, firstMove: true, index: 60}
        newBoard[61] = {piece: Piece.Bishop, color: Color.Light, firstMove: true, index: 61}
        newBoard[62] = {piece: Piece.Knight, color: Color.Light, firstMove: true, index: 62}
        newBoard[63] = {piece: Piece.Rook, color: Color.Light, firstMove: true, index: 63}
        for(let i=48; i<56; i++) newBoard[i] = {piece: Piece.Pawn, color: Color.Light, firstMove: true, index: i}
        return newBoard
    }
    const HandlePieceClick = (idx:number) => {    
        if(availableMoves.includes(idx)){
            const newBoard = [...board]
            newBoard[idx] ={
                ...board[selected],
                index:idx,
                firstMove: false
            } 
            if(CheckForPromotion(idx,newBoard)){
                newBoard[idx] = {
                    piece: Piece.Queen,
                    color: board[selected].color,
                    index: idx,
                    firstMove:false,  
                }
            }
            else if(CheckForRightCastle(selected,board) && idx === selected + 2){
                newBoard[idx-1] = {
                    ...newBoard[idx+1],
                    index: idx-1,
                    firstMove: false
                }
                newBoard[idx+1] = {
                    piece: Piece.Empty,
                    color: Color.None,
                    index: idx+1,
                    firstMove: false
                }
            }
            else if(CheckForLeftCastle(selected,board) && idx === selected - 2){
                newBoard[idx+1] = {
                    ...newBoard[idx-2],
                    index: idx+1,
                    firstMove: false
                }
                newBoard[idx-2] = {
                    piece: Piece.Empty,
                    color: Color.None,
                    index: idx-2,
                    firstMove: false
                }
            }
            newBoard[selected] = {
                piece: Piece.Empty,
                color: Color.None,
                index: selected,
                firstMove: false
            }
            SetSelected(-1)
            setBoard(newBoard)
            setAvailableMoves([])
            setKillingMoves([])
            SwapTurns()
        }
        else{
            SetSelected(idx)
            if(board[idx].color === turn) setAvailableMoves(HandleMoves(board[idx],board))
            else setAvailableMoves([])
        }
    }
    const CheckForWin = () => {
        var lightKing = false
        var darkKing = false
        board.forEach(s => {
            if(s.piece === Piece.King) (s.color === Color.Light) ? lightKing = true : darkKing = true
        })
        if(lightKing === false) {
            alert("Dark has won")
            ShowPopUp()
            setGameOver(true)
        }
        else if(darkKing === false){
            alert("Light has won")
            ShowPopUp()
            setGameOver(true)
        }  
    }
    const MakeAiMove = (move:Move) => {
        const newBoard = [...board]
        newBoard[move.end] = {
            ...newBoard[move.start],
            firstMove: false,
            index: move.end
        }
        if(CheckForPromotion(move.end,newBoard)){
            newBoard[move.end] = {
                piece: Piece.Queen,
                color: newBoard[move.end].color,
                index: move.end,
                firstMove:false,  
            }
        }
        else if(CheckForRightCastle(move.start,board) && move.end === move.start + 2){
            newBoard[move.end-1] = {
                ...newBoard[move.end+1],
                index: move.end-1,
                firstMove: false
            }
            newBoard[move.end+1] = {
                piece: Piece.Empty,
                color: Color.None,
                index: move.end+1,
                firstMove: false
            }
        }
        else if(CheckForLeftCastle(move.start,board) && move.end === move.start - 2){
            newBoard[move.end+1] = {
                ...newBoard[move.end-2],
                index: move.end+1,
                firstMove: false
            }
            newBoard[move.end-2] = {
                piece: Piece.Empty,
                color: Color.None,
                index: move.end-2,
                firstMove: false
            }
        }
        newBoard[move.start] = {
            piece: Piece.Empty,
            color: Color.None,
            firstMove: false,
            index: move.start
        }
        setAiMoveStart(move.start)
        setAiMoveFinish(move.end)
        setBoard(newBoard)
        SwapTurns()
    }
    const ShowPopUp = () => 5

    const[board,setBoard] = useState( () => InitializeBoard())
    const[turn,setTurn] = useState(Color.Light)
    const[selected,SetSelected] = useState(-1)
    const[availableMoves, setAvailableMoves] = useState([-1])
    const[killingMoves,setKillingMoves] = useState([-1])
    const[gameOver,setGameOver] = useState(false)
    const[aiMoveStart,setAiMoveStart] = useState(-1)
    const[aiMoveFinish,setAiMoveFinish] = useState(-1)

    useEffect( () => {
        const kMoves:number[] =[]
        board.forEach( s => {
            if(s.piece !== Piece.Empty && s.color !== turn){
                if(availableMoves.includes(s.index)) kMoves.push(s.index)
            }
        })
        setKillingMoves(kMoves)
    }, [availableMoves])
    useEffect(() => {
        const GetMove = async () => {
            if(turn === Color.Dark){
                const move = await Simulate(board,3,Color.Dark)
                MakeAiMove(move)
            }
        }
        GetMove()
    },[turn])
    useEffect(() => CheckForWin())
    useEffect(() => {
        setBoard(InitializeBoard())
        setGameOver(false)
    },[gameOver])

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
                        `${isKillingMove(idx) && 'Board__KillingMove'}`,
                        `${idx === aiMoveStart && 'Board__AiMoveStart'}`,
                        `${idx === aiMoveFinish && 'Board__AiMoveFinish'}`
                    ].join(" ")}
                    onClick={() => HandlePieceClick(idx)}
                    key={idx}>{idx}</div>)
                })}
            </div>
            <div className='Board__stats'>
                <h1>Number of boards evaluated: {boardsChecked}</h1>
            </div>
        </div>
    )
}

export default Board