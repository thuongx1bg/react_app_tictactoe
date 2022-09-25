import React from 'react';
import { Link } from 'react-router-dom';
import './HomeStyle.css';
const Home = () => {
    return (
        <div className='home-container'>
            <div className="topnav">
                <Link className="active" to="/">Home</Link>
                <a href="https://thuongx1bg.github.io/react_app_tictactoe/#/tictactoe_3">Chế độ 3x3</a>
                <a href="/tictactoe_5">Chế độ 5x5</a>
                <a href="/tictactoe_7">Chế độ 7x7</a>
            </div>
        </div>
    );
};

export default Home;