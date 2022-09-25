export function calculateWinner(
    board,
    height,
    numberToWin,
    indexRow,
    indexColumn
) {
    // duyệt  ngang
    var d = 1;
    for (let column = indexColumn + 1; column < height; column++) {
        if (
            board[indexRow][column] &&
            board[indexRow][indexColumn] === board[indexRow][column] &&
            d < numberToWin
        ) {
            d++;
        } else {
            break;
        }
    }
    if (d === numberToWin) return board[indexRow][indexColumn];

    for (let column = indexColumn - 1; column >= 0; column--) {
        if (
            board[indexRow][column] &&
            board[indexRow][indexColumn] === board[indexRow][column] &&
            d < numberToWin
        ) {
            d++;
        } else {
            break;
        }
    }
    if (d === numberToWin) 
    return board[indexRow][indexColumn];
    // duyệt  dọc
    d=1;
    for (let row = indexRow + 1; row < height; row++) {
        if (
            board[row][indexColumn] &&
            board[indexRow][indexColumn] === board[row][indexColumn] &&
            d < numberToWin
        ) {
            d++;
        } else {
            break;
        }
    }
    if (d === numberToWin) return board[indexRow][indexColumn];
    for (let row = indexRow - 1; row >= 0; row--) {
        if (
            board[row][indexColumn] &&
            board[indexRow][indexColumn] === board[row][indexColumn] &&
            d < numberToWin
        ) {
            d++;
        } else {
            break;
        }
    }
    if (d === numberToWin) return board[indexRow][indexColumn];
    // duyệt  chéo phải
    d=1;
    for (let index = 1; index <= numberToWin; index++) {
        if((board?.[indexRow+index]?.[indexColumn+index] ) && board[indexRow][indexColumn] === board[indexRow+index][indexColumn+index]){
            d++
        }else{break;}      
    }
    if (d === numberToWin) return board[indexRow][indexColumn];
    
    for (let index = 1; index <= numberToWin; index++) {
        if(board?.[indexRow-index]?.[indexColumn-index] && board[indexRow][indexColumn] === board[indexRow-index][indexColumn-index]){
            d++
        }else{break}      
    }
    if (d === numberToWin) return board[indexRow][indexColumn];

    // duyệt  chéo trái
    d=1;
    for (let index = 1; index <= numberToWin; index++) {
        if((board?.[indexRow-index]?.[indexColumn+index] ) && board[indexRow][indexColumn] === board[indexRow-index][indexColumn+index]){
            d++
        }else{break;}      
    }
    if (d === numberToWin) return board[indexRow][indexColumn];
    
    for (let index = 1; index <= numberToWin; index++) {
        if(board?.[indexRow+index]?.[indexColumn-index] && board[indexRow][indexColumn] === board[indexRow+index][indexColumn-index]){
            d++
        }else{break}      
    }
    if (d === numberToWin) return board[indexRow][indexColumn];
    return null;

}
