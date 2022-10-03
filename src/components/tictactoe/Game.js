import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../../helpers';
import './GameStyle.css';
import { useNavigate } from "react-router-dom";
const Game = (props) => {
    const height = props.height;
    const numberToWin = props.numberToWin;
    const [board, setBoard] = useState(new Array(height).fill(new Array(height).fill(null)));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState('');
    var navigate = useNavigate();

    function handleClick(indexRow, indexColumn) {
        if (!winner && !board[indexRow][indexColumn]) {
            const boardCopy = board.map(row => [...row]);
            boardCopy[indexRow][indexColumn] = xIsNext ? 'X' : 'O';
            var winners = calculateWinner(boardCopy, height, numberToWin, indexRow, indexColumn);
            setWinner(winners);
            setBoard(boardCopy);
            setXIsNext((xIsNext) => !xIsNext);

        }
    }

    const handleReset = () => {
        setBoard(Array(height).fill(Array(height).fill(null)));
        setXIsNext(true);
        setWinner('');
    };
    const checkDraw = () => {
        for (let row = 0; row < board.length; row++) {
            for (let column = 0; column < board.length; column++) {
                if(board[row][column]=== null){
                    return false;
                }   
            }   
        }
        return true;
    }


    return (
        <div className="game">
            <div className='game-text'>
                {` Hàng ${numberToWin} ô để chiến thắng!`}
            </div>
            <Board height={height} cells={board} onClick={handleClick}></Board>
            {winner ? (
                <div className="notification">
                    {winner ? `Người thắng là ${xIsNext ? 'O' : 'X'}` : 'Draw'}
                </div>
            ) : (
                ''
            )}
            {checkDraw()  && !winner ? (
                <div className="notification">
                    Draw
                </div>
            ) : (
                ''
            )}
            {!checkDraw()  && !winner && xIsNext ? (
                <div className="notification">
                    Lượt của X
                </div>
            ) : (
                <div className="notification">
                    Lượt của O
                </div>
            )}
            <div>

                <button onClick={() => navigate(-1)} className="button-reset" >
                    Back
                </button>
                <button className="button-reset" onClick={handleReset}>
                    Reset Game
                </button>
            </div>
        </div>
    );
};

export default Game;
