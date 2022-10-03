import React from 'react';
import { Link } from 'react-router-dom';
import './HomeStyle.css';
const Home = () => {
    return (
        <div className='home-container'>
            <div className="topnav">
                <Link className="active" to="/">Trang chủ</Link>
                <Link to="/tictactoe_3">Chế độ 3x3</Link>
                <Link to="/tictactoe_5">Chế độ 5x5</Link>
                <Link to="/tictactoe_7">Chế độ 7x7</Link>
            </div>
        </div>
    );
};

export default Home;