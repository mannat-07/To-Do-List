import { Route, Routes } from 'react-router-dom';
import './App.css';

import Login from '../src/Pages/Login';
import Home from '../src/Pages/Home';
import Signup from '../src/Pages/Signup';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
