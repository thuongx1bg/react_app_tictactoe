import React, { useReducer, useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../../helpers';
import './GameStyle.css';
import {  useNavigate } from "react-router-dom";

const Game = (props) => {
    const height = props.height;
    const numberToWin = props.numberToWin;
    const initialState = {
        board: new Array(height).fill(new Array(height).fill(null)),
        xIsNext: true,
        winner: ''
    };
    const gameReducer = (state, action) => {
        switch (action.type) {
            case "handleClick":
                {
                    const nextState = JSON.parse(JSON.stringify(state));
                    const { indexRow, indexColumn } = action.payload;
                    const { board, xIsNext, winner } = state;
                    if (!winner && !board[indexRow][indexColumn]) {
                        nextState.board[indexRow][indexColumn] = xIsNext ? 'X' : 'O';
                        var winners = calculateWinner(nextState.board, height, numberToWin, indexRow, indexColumn);
                        nextState.xIsNext = !xIsNext;
                        nextState.winner = winners;
                    };
                    return nextState;
                }
            case "reset":
                {
                    const nextState = JSON.parse(JSON.stringify(initialState));
                    return nextState;
                }

            default:
                break;
        }
        return state;
    }
    const [state, dispatch] = useReducer(gameReducer, initialState);
    var navigate = useNavigate();

    function handleClick(indexRow, indexColumn) {
        dispatch({
            type: "handleClick", payload: {
                indexRow, indexColumn
            }
        });
    }
    const handleReset = () => {
        dispatch({ type: "reset" })
    };
    const checkDraw = () => {
        for (let row = 0; row < state.board.length; row++) {
            for (let column = 0; column < state.board.length; column++) {
                if(state.board[row][column]=== null){
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
            <Board height={height} cells={state.board} onClick={handleClick}></Board>
            {state.winner ? (
                <div className="notification">
                    {state.winner ? `Người thắng là ${state.xIsNext ? 'O' : 'X'}` : 'Draw'}
                </div>
            ) : (
                ''
            )}
            {checkDraw() && !state.winner ? (
                <div className="notification">
                    Draw
                </div>
            ) : (
                ''
            )}
            {!checkDraw() && !state.winner && state.xIsNext ? (
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
