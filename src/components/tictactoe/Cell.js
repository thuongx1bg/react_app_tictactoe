import React from 'react';

const Cell = (props) => {
    const {value,onClick}=props;
    return (
        <div className={`game-cell ${value === "X" ? "is-x" : "is-o" }`} onClick={onClick}>
        {value}
        </div>
    );
};

export default Cell;