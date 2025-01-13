import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import back from '../assets/img/test/back_icon.svg'
import logo from '../assets/img/test/logo.svg'
import close from '../assets/img/test/close_icon.svg'

const TestQ1 = ({ pageType, answers, setAnswers, currentQuestion, setCurrentQuestion }) => {
  const navigate = useNavigate();
  const location = useLocation(); // 전달된 state를 받음
  const questions = location.state?.questions || []; // 질문 데이터
  const userId = location.state?.userId || []; // 질문 데이터

  const goback = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      navigate(`/TestQ${(currentQuestion - 1) % 2 === 0 ? 2 : 1}`, { state: { questions,userId } });
    }
    else if(currentQuestion === 1){
      navigate('/TestHome')
    }
  };
  const gohome = () => {
    navigate('/Home',{replace:true})
  }
  const gonext = () => {
    if (!answers[currentQuestion - 1]) {
      alert('답변을 선택해주세요!');
      return;
    }

    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      navigate(`/TestQ${(currentQuestion + 1) % 2 === 0 ? 2 : 1}`, { state: { questions,userId } });
    } else {
      navigate('/TestLoading', { state: { userId } }); // 결과 페이지로 이동
    }
  };
  const goOut = () => {
    navigate('/TestHome',{replace:true})
  }

  const handleAnswerClick = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion - 1] = answer; // 현재 질문 번호에 따라 답변 저장
    setAnswers(updatedAnswers);
  };

  return (
    <div className='container' id='testQ_div'>
      <div className="top">
        <img src={back} className='back' onClick={goback}/>
        <img src={logo} className='logo' onClick={gohome}/>
        <img src={close} className='close' onClick={goOut}/>
      </div>
      <div className="percent_bar_back">
        <div className="percent" style={{ width: `${(currentQuestion / 12) * 100}%` }}></div>
      </div>
      <div className="question_div">
        <p className="number">{currentQuestion}.</p>
        <p className='question'>{questions[currentQuestion - 1]?.question}</p>
      </div>
      <div className="answer_div">
      {questions[currentQuestion - 1]?.options.map((option, index) => (
          <div
            key={index}
            className={answers[currentQuestion - 1] === index + 1 ? 'btn_choice' : 'btn_no'}
            onClick={() => handleAnswerClick(index + 1)}
          >
            <div className="number">{index + 1}</div>
            {option}
          </div>
        ))}
      </div>
      <div id="bottom_btn" className={answers[currentQuestion - 1] ? 'choice' : 'no_choice'}>
        <div className="back_btn" onClick={goback}>이전</div>
        <div className="next_btn" onClick={gonext}>다음</div>
      </div>
    </div>
  )
}

export default TestQ1