import './App.css';
import   './components/tictactoe/GameStyle.css';

import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from './components/tictactoe/Home';
import Game from './components/tictactoe/Game';

function App() {
  return (
    <div >
      <div className='container'>
      <Routes>
        <Route path='/tictactoe_3' element={<Game height={3} numberToWin={3}></Game>}></Route>
        <Route path='/tictactoe_5' element={<Game height={5} numberToWin={4}></Game>}></Route>
        <Route path='/tictactoe_7' element={<Game height={7} numberToWin={5}></Game>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      </div>  
    </div>
  );
}

export default App;
