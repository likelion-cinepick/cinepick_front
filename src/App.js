import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
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
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<TestHome/>} />
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
      </Routes>
    </BrowserRouter>
  )
}

export default App