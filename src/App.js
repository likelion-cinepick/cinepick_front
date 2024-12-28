import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import './assets/scss/style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App