import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import './assets/scss/style.scss';
import MovieDetail from './page/MovieDetail';
import MoreRecommend from './page/MoreRecommend';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie/detail' element={<MovieDetail/>} />
        <Route path='/movie/detail/more' element={<MoreRecommend/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App