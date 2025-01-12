import React from 'react'
import {useNavigate } from 'react-router-dom';
import back from '../assets/img/test/back_icon.svg'
import logo from '../assets/img/test/logo.svg'
import mypage from '../assets/img/test/mypage_icon.svg'
import movie_img from '../assets/img/test/movie_img.svg'

const TestHome = () => {
  const navigate = useNavigate();
  const goback = ()=>{
    navigate(-1)
  }
  const gonext = ()=>{
    navigate('/TestQ1')
  }
  return (
    <div className='container' id='testhome_div'>
        <div className="top">
            <img src={back} className='back' onClick={goback}/>
            <img src={logo} className='logo' />
            <img src={mypage} className='mypage' />
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