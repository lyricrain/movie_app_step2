import React from 'react';
import './App.css';
// import Home from './routes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About'
import Home from './routes/Home'
import Navigation from './components/Navigation';
import Detail from './routes/Detail'

function App() {
  return (
    <BrowserRouter>
    <Navigation></Navigation>
      <Routes>        
        <Route path='/movie_app_step2' element={<Home/>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/movie-detail' element={<Detail></Detail>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
