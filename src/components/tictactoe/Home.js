import React from 'react';
import './HomeStyle.css';
const Home = () => {
    return (
        <div className='home-container'>
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/tictactoe_3">Chế độ 3x3</a>
                <a href="/tictactoe_5">Chế độ 5x5</a>
                <a href="/tictactoe_7">Chế độ 7x7</a>
            </div>
        </div>
    );
};

export default Home;