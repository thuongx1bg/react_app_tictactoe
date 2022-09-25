import React from 'react';
import Cell from './Cell';
import './GameBoardStyle.css';

const Board = (props) => {
    return (
        <div className={`game-board  ${'game-board-'+props.height }`}>
            {props.cells.map((itemRow, indexRow) =>
                itemRow.map((itemColumn, indexColumn) => (
                    <Cell
                        value={itemColumn}
                        key={[indexRow, indexColumn]}
                        onClick={() => props.onClick(indexRow, indexColumn)}
                    ></Cell>
                ))
            )}
        </div>
    );
};
/* props.cells
           .map((item,index)=>
           (<Cell value={item} key={index} onClick={()=>props.onClick(index)}></Cell>)) */
export default Board;
