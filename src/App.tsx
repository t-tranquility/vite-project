import './App.css';
import { Routes, Route } from 'react-router-dom';

import Game from './pages/Game';
import Greeting from './pages/Greeting';
import Map from './pages/Map';
import Result from './pages/Result';
import Theory from './pages/Theory';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Map />} />
        <Route path='/greeting' element={<Greeting />} />
        <Route path='/theory' element={<Theory />} />
        <Route path='/game' element={<Game />} />
        <Route path='/result' element={<Result />}></Route>
      </Routes>
    </>
  );
}

export default App;
