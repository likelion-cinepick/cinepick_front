import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Join from './page/Join';
import Login from './page/Login';
import Setting from './page/Setting';
import Mypage from './page/Mypage';
import Heart from './page/Heart';
import Re_nickname from './page/Re_nickname';
import Re_mood from './page/Re_mood';
import Re_mbti from './page/Re_mbti';
import './assets/scss/style.scss';
import TestHome from './page/TestHome';
import TestQ1 from './page/TestQ1';
import TestLoading from './page/TestLoading';
import TestResult from './page/TestResult';
import TestQ2 from './page/TestQ2';

const App = () => {
  const [answers, setAnswers] = useState(Array(12).fill(null)); // 12개의 답변 저장
  const [currentQuestion, setCurrentQuestion] = useState(1); // 현재 질문 번호
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/TestHome' element={<TestHome/>} />
        <Route
          path="/TestQ1"
          element={
            <TestQ1
              pageType="TestQ1"
              answers={answers}
              setAnswers={setAnswers}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
            />
          }
        />
        <Route
          path="/TestQ2"
          element={
            <TestQ2
              pageType="TestQ2"
              answers={answers}
              setAnswers={setAnswers}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
            />
          }
        />
        <Route path="/TestLoading" element={<TestLoading answers={answers} />} />
        <Route path='/TestResult' element={<TestResult/>} />
        <Route path='/join' element={<Join/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/heart' element={<Heart />} />
        <Route path='/re_nickname' element={<Re_nickname />} />
        <Route path='/re_mood' element={<Re_mood />} />
        <Route path='/re_mbti' element={<Re_mbti />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App