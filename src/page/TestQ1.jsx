import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import back from '../assets/img/test/back_icon.svg'
import logo from '../assets/img/test/logo.svg'
import close from '../assets/img/test/close_icon.svg'

const TestQ1 = ({ pageType, answers, setAnswers, currentQuestion, setCurrentQuestion }) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]); // 질문 데이터 상태

  useEffect(() => {
    // API에서 질문 데이터 가져오기
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('/api/questions'); // 질문 API 엔드포인트
        setQuestions(response.data);
      } catch (error) {
        console.error('질문 데이터를 가져오는 데 실패했습니다.', error);
      }
    };
    fetchQuestions();
  }, []);

  const goback = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      navigate(`/TestQ${(currentQuestion - 1) % 2 === 0 ? 2 : 1}`);
    }
    else if(currentQuestion = 1){
      navigate('/TestHome')
    }
  };
  const gonext = () => {
    if (currentQuestion < 12) {
      setCurrentQuestion(currentQuestion + 1);
      navigate(`/TestQ${(currentQuestion + 1) % 2 === 0 ? 2 : 1}`);
    } else {
      navigate('/TestLoading'); // 결과 페이지로 이동
    }
  };

  const handleAnswerClick = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion - 1] = answer; // 현재 질문 번호에 따라 답변 저장
    setAnswers(updatedAnswers);
  };
  if (questions.length === 0) {
    return <div>질문을 불러오는 중...</div>;
  }

  return (
    <div className='container' id='testQ_div'>
      <div className="top">
        <img src={back} className='back' onClick={goback}/>
        <img src={logo} className='logo' />
        <img src={close} className='close' />
      </div>
      <div className="percent_bar_back">
        <div className="percent" style={{ width: `${(currentQuestion / 12) * 100}%` }}></div>
      </div>
      <div className="question_div">
        <p className="number">{currentQuestion}.</p>
        <p className='question'>{questions[currentQuestion - 1]?.questionText}</p>
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