import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Join from './page/Join';
import Login from './page/Login';
import Setting from './page/Setting';
import Mypage from './page/Mypage';
import Heart from './page/Heart';
import Re_nickname from './page/Re_nickname';
import Re_mood from './page/Re_mood';
import './assets/scss/style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/join' element={<Join/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/heart' element={<Heart />} />
        <Route path='/re_nickname' element={<Re_nickname />} />
        <Route path='/re_mood' element={<Re_mood />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App