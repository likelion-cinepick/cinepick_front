import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import logo from '../assets/img/test/logo.svg'
import close from '../assets/img/test/close_icon.svg'
import loading_img from '../assets/img/test/loading_img.svg'

const TestLoading = ({ answers }) => {
  const navigate = useNavigate();
  const location = useLocation(); // 전달된 state를 받음
  const userId = location.state?.userId || [];

  console.log(userId)

  const calculateMBTI = () => {
    const types = ['E', 'I', 'N', 'S', 'F', 'T', 'P', 'J'];
    const scores = [0, 0, 0, 0];

    answers.forEach((answer, index) => {
      if ([0, 4, 8].includes(index)) scores[0] += answer === 1 ? 1 : -1; // E/I
      if ([1, 5, 9].includes(index)) scores[1] += answer === 1 ? 1 : -1; // N/S
      if ([2, 6, 10].includes(index)) scores[2] += answer === 1 ? 1 : -1; // F/T
      if ([3, 7, 11].includes(index)) scores[3] += answer === 1 ? 1 : -1; // P/J
    });

     // 결과를 배열(List<String>) 형태로 반환
     return scores.map((score, i) => (score >= 0 ? types[i * 2] : types[i * 2 + 1]));
  };

  const mbtiResult = calculateMBTI();
  console.log(mbtiResult);
  
  useEffect(() => {
    const token = localStorage.getItem('authToken'); // 토큰 가져오기

    const submitMBTI = async () => {
      try {
        // /test/submit API로 POST 요청
        await axios.post(
          'http://3.105.163.214:8080/test/submit',
          {
            userId,
            mbti: mbtiResult,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // 토큰 포함
            },
          }
        );
        console.log('MBTI 제출 성공!');
      } catch (error) {
        console.error('MBTI 제출 실패:', error);
      }
    };

    submitMBTI(); // MBTI 전송

    // 3초 뒤 TestResult 페이지로 이동
    const timer = setTimeout(() => {
      navigate('/TestResult', { state: { userId, mbti: mbtiResult } }); // mbtiResult 전달
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate, userId, mbtiResult]);
  
  return (
    <div className='container' id='testloading_div'>
      <div className="top">
        <img src={logo} className='logo' />
        <img src={close} className='close' />
      </div>
      <div className="contents_center">
        <p className="top_text">결과가 나오는 중이에요!</p>
        <div className="text">
          <p className="white">과연 </p>
          <p className="color">나와 닮은 영화 캐릭터</p>
          <p className="white">는?</p>
        </div>
        <img src={loading_img} className='loading_img' />
      </div>
    </div>
  )
}

export default TestLoading