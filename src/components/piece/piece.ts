export interface IPosition{
    piece: Piece,
    color: Color,
    index: number,
    firstMove: boolean
}

export enum Piece{
    King,
    Queen,
    Bishop,
    Knight,
    Rook,
    Pawn,
    Empty
}

export enum Color{
    Dark,
    Light,
    None
}

const GetRow = (idx:number):number => Math.floor( idx / 8 )
const GetCol = (idx:number):number => idx >= 8 ? idx % 8 : idx
const GetIdxByRowCol = (row:number,col:number):number => 8 * row + col

export const HandleMoves = (piece:IPosition,board:IPosition[]):number[] => {
    var moves:number[] = []
    if(piece.piece === Piece.Knight) moves = KnightMoves(piece.index,board) 
    if(piece.piece === Piece.Rook) moves = RookMoves(piece.index,board) 
    if(piece.piece === Piece.Bishop) moves = BishopMoves(piece.index,board) 
    if(piece.piece === Piece.Queen) moves = moves.concat(BishopMoves(piece.index,board)).concat(RookMoves(piece.index,board)) 
    if(piece.piece === Piece.King) moves = KingMoves(piece.index,board)
    if(piece.piece === Piece.Pawn) moves = PawnMoves(piece.index,board)
    return moves
}

export const KnightMoves = (idx: number,board:IPosition[]):number[] => {
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
    return moves.filter(m => board[m].color !== board[idx].color)
}

export const RookMoves = (idx:number, board:IPosition[]):number[] => {
    const row = GetRow(idx)
    const col = GetCol(idx)
    const moves:number[] =[]
    //up
    var cRow = row
    while((cRow - 1 > -1 ) && board[GetIdxByRowCol(cRow-1,col)].piece === Piece.Empty){
        moves.push(GetIdxByRowCol(cRow-1,col))
        cRow--
    }
    if(cRow > 0 && board[GetIdxByRowCol(cRow-1,col)].color !== board[idx].color) moves.push(GetIdxByRowCol(cRow-1,col))

    //Right
    var cCol = col
    while((cCol + 1 < 8 && board[GetIdxByRowCol(row,cCol+1)].piece === Piece.Empty)){
        moves.push(GetIdxByRowCol(row,cCol+1))
        cCol++
    }
    if(cCol < 7 && board[GetIdxByRowCol(row,cCol + 1)].color !== board[idx].color) moves.push(GetIdxByRowCol(row,cCol+1))

    //Down
    cRow = row
    while((cRow + 1 < 8 && board[GetIdxByRowCol(cRow+1,col)].piece === Piece.Empty)){
        moves.push(GetIdxByRowCol(cRow+1,col))
        cRow++
    }
    if(cRow < 7 && board[GetIdxByRowCol(cRow+1,col)].color !== board[idx].color) moves.push(GetIdxByRowCol(cRow+1,col))

    //Left
    cCol = col
    while((cCol - 1 > 0 && board[GetIdxByRowCol(row,cCol-1)].piece === Piece.Empty)){
        moves.push(GetIdxByRowCol(row,cCol-1))
        cCol--
    }
    if(cCol > 0 && board[GetIdxByRowCol(row,cCol - 1)].color !== board[idx].color) moves.push(GetIdxByRowCol(row,cCol-1))

    return moves
}

export const BishopMoves = (idx:number, board:IPosition[]):number[] => {
    const row = GetRow(idx)
    const col = GetCol(idx)      
    const moves:number[] = []
    //Up Right
    var cRow = row
    var cCol = col
    while(cRow - 1 > -1 && cCol + 1 < 8 && board[GetIdxByRowCol(cRow-1,cCol+1)].piece === Piece.Empty){
        moves.push(GetIdxByRowCol(cRow-1,cCol+1))
        cRow--
        cCol++
    }
    if(cRow - 1 > -1 && cCol + 1 < 8 && board[GetIdxByRowCol(cRow-1,cCol+1)].color !== board[idx].color) moves.push(GetIdxByRowCol(cRow-1,cCol+1))
    
    //Down Right
    cRow = row
    cCol = col
    while(cRow + 1 < 8 && cCol + 1 < 8 && board[GetIdxByRowCol(cRow+1,cCol+1)].piece === Piece.Empty){
        moves.push(GetIdxByRowCol(cRow+1,cCol+1))
        cRow++
        cCol++
    }
    if(cRow + 1 < 8 && cCol + 1 < 8 && board[GetIdxByRowCol(cRow+1,cCol+1)].color !== board[idx].color) moves.push(GetIdxByRowCol(cRow+1,cCol+1))

    //Down Left
    cRow = row
    cCol = col
    while(cRow + 1 < 8 && cCol - 1 > -1 && board[GetIdxByRowCol(cRow+1,cCol-1)].piece === Piece.Empty){
        moves.push(GetIdxByRowCol(cRow+1,cCol-1))
        cRow++
        cCol--
    }
    if(cRow + 1 < 8 && cCol - 1 > -1 && board[GetIdxByRowCol(cRow+1,cCol-1)].color !== board[idx].color) moves.push(GetIdxByRowCol(cRow+1,cCol-1))

    //Up Left
    cRow = row
    cCol = col
    while(cRow - 1 > -1 && cCol - 1 > -1 && board[GetIdxByRowCol(cRow-1,cCol-1)].piece === Piece.Empty){
        moves.push(GetIdxByRowCol(cRow-1,cCol-1))
        cRow--
        cCol--
    }
    if(cRow - 1 > -1 && cCol - 1 > -1 && board[GetIdxByRowCol(cRow-1,cCol-1)].color !== board[idx].color) moves.push(GetIdxByRowCol(cRow-1,cCol-1))


    return moves
}

export const KingMoves = (idx:number, board:IPosition[]):number[] => {
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

    //Remove check moves

    return moves.filter(m => board[m].color !== board[idx].color)
}

export const PawnMoves = (idx:number, board:IPosition[]):number[] => {
    const row = GetRow(idx)
    const col = GetCol(idx)      
    const moves:number[] = []

    if(board[idx].color === Color.Light){
        if(row > 0 && board[GetIdxByRowCol(row-1,col)].piece === Piece.Empty) moves.push(GetIdxByRowCol(row-1,col))
        if(board[idx].firstMove && 
            board[GetIdxByRowCol(row-1,col)].piece === Piece.Empty &&
            board[GetIdxByRowCol(row-2,col)].piece === Piece.Empty){
                moves.push(GetIdxByRowCol(row-2,col))
            }
        if( col > 0 &&
            board[GetIdxByRowCol(row-1,col-1)].piece !== Piece.Empty &&
            board[GetIdxByRowCol(row-1,col-1)].color !== Color.Light){
                moves.push(GetIdxByRowCol(row-1,col-1))
            }
        if( col < 7 &&
            board[GetIdxByRowCol(row-1,col+1)].piece !== Piece.Empty &&
            board[GetIdxByRowCol(row-1,col+1)].color !== Color.Light){
                moves.push(GetIdxByRowCol(row-1,col+1))
            } 
    }
    else{
        if(row < 7 && board[GetIdxByRowCol(row+1,col)].piece === Piece.Empty) moves.push(GetIdxByRowCol(row+1,col))
        if(board[idx].firstMove && 
            board[GetIdxByRowCol(row+1,col)].piece === Piece.Empty &&
            board[GetIdxByRowCol(row+2,col)].piece === Piece.Empty){
                moves.push(GetIdxByRowCol(row+2,col))
            } 
        if(col > 0 &&
            board[GetIdxByRowCol(row+1,col-1)].piece !== Piece.Empty &&
            board[GetIdxByRowCol(row+1,col-1)].color !== Color.Dark){
                moves.push(GetIdxByRowCol(row+1,col-1))
            }
        if(col < 7 &&
            board[GetIdxByRowCol(row+1,col+1)].piece !== Piece.Empty &&
            board[GetIdxByRowCol(row+1,col+1)].color !== Color.Dark){
                moves.push(GetIdxByRowCol(row+1,col+1))
            } 
    }



    //en passant

    return moves
}