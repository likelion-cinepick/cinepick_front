import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/test/logo.svg'
import close from '../assets/img/test/close_icon.svg'
import loading_img from '../assets/img/test/loading_img.svg'
const TestLoading = ({ answers }) => {
  const navigate = useNavigate();

  const calculateMBTI = () => {
    const types = ['E', 'I', 'N', 'S', 'F', 'T', 'P', 'J'];
    const scores = [0, 0, 0, 0];

    answers.forEach((answer, index) => {
      if ([0, 4, 8].includes(index)) scores[0] += answer === 1 ? 1 : -1; // E/I
      if ([1, 5, 9].includes(index)) scores[1] += answer === 1 ? 1 : -1; // N/S
      if ([2, 6, 10].includes(index)) scores[2] += answer === 1 ? 1 : -1; // F/T
      if ([3, 7, 11].includes(index)) scores[3] += answer === 1 ? 1 : -1; // P/J
    });

    return scores.map((score, i) => (score >= 0 ? types[i * 2] : types[i * 2 + 1])).join('');
  };

  const mbtiResult = calculateMBTI();
  
  useEffect(() => {
    // 3초 뒤에 TestResult 페이지로 이동하며 mbtiResult 전달
    const timer = setTimeout(() => {
      navigate('/TestResult', { state: { mbtiResult } });
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate, mbtiResult]);
  
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