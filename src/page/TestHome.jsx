import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import back from '../assets/img/test/back_icon.svg'
import logo from '../assets/img/test/logo.svg'
import mypage from '../assets/img/test/mypage_icon_top.svg'
import movie_img from '../assets/img/test/movie_img.svg'

const TestHome = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 전달된 state를 받음
  const [questions, setQuestions] = useState([]); // 질문 데이터 저장
  const userId = location.state?.userId || []; // 질문 데이터
  console.log(userId)

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    // API에서 질문 데이터 가져오기
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('/test', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setQuestions(response.data);
      } catch (error) {
        console.error('질문 데이터를 가져오는 데 실패했습니다.', error);
      }
    };
    fetchQuestions();
  }, []);

  const goback = ()=>{
    navigate('/Home',{replace:true})
  }
  const gonext = () => {
    if (questions.length > 0) {
      // 질문 데이터를 함께 전달
      navigate('/TestQ1', { state: { questions, userId } });
    } else {
      alert('질문 데이터를 불러오는 중입니다. 잠시만 기다려주세요.');
    }
  };
  const gomypage = () => {
    navigate('/mypage')
  }
  const gohome = () => {
    navigate('/Home',{replace:true})
  }

  return (
    <div className='container' id='testhome_div'>
        <div className="top">
            <img src={back} className='back' onClick={goback}/>
            <img src={logo} className='logo' onClick={gohome}/>
            <img src={mypage} className='mypage_icon_top' onClick={gomypage}/>
        </div>
        <div className="contents_center_div">
            <p className="text_top">당신의 영화 스타일을 알아보아요!</p>
            <p className="text_buttom">나와 닮은 영화 캐릭터로 보는</p>
            <p className="text_color">영화 이야기</p>
            <img src={movie_img} className='movie_img' />
            <div className="test_start_btn" onClick={gonext}>테스트 시작하기</div>
        </div>

    </div>
  )
}

export default TestHome