import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/test/logo.svg'
import close from '../assets/img/test/close_icon.svg'
import test_result_img from '../assets/img/test/test_result_img.svg'
const TestResult = () => {
  return (
    <div className='container' id='testresult_div'>
      <div className="top">
        <img src={logo} className='logo' />
        <img src={close} className='close' />
      </div>
      <div className="contents">
        <p className="title">나와 닮은 영화 속 캐릭터는?</p>
        <img src={test_result_img} className='test_result_img' />
        <div className="name_div">
          <p className="name_info">해리포터</p>
          <p className="name">‘헤르미온느’</p>
        </div>
        <p className="main_info">“나? 책 많이 읽고 똑똑하다고?”</p>
        <p className="sub_info">책임감 있고 효율적인 당신!<br />
          위법 행위는 절대 하지 않으며 충성스러운 지도자입니다.<br />사랑하는 사람을 위해 많은 노력을 기울입니다.<br />
          친해지고 본 모습을 본 많은 사람들이 놀라곤 합니다!</p>
        <p className="character_title">🩷️ 찰떡궁합 캐릭터는 누구? 🩷️</p>
        <p className="character_info">하울의 움직이는 성 ‘하울’</p>
        <p className="character_title">🩶 거리가 필요한 캐릭터는 누구? 🩶</p>
        <p className="character_info">블랙스완 ‘니나 세이어스’</p>
        <div className="chemistry_div">
          <p className="chemistry_title">우리의 케미 스토리 📖</p>
          <p className="chemistry">헤르미온느는 어느 날 하울의 성이 내려앉은 황야에 발을 들였다. 그녀는 하울의 마법이 엉망으로 얽힌 주문서를 발견하고, 성의 부서진 구조를 정리하기 시작했다. "이러니 성이 멈추지," 그녀는 단호히 말했다. 하울은 손가락을 휘저으며 말했다. "혼돈은 예술이지." 하지만 그녀가 금단의 마법을 깔끔히 풀어내자, 성이 숨을 내쉬듯 재정비되었다. 하울은 놀란 눈으로 헤르미온느를 보며 미소 지었다. "그래, 질서도 나쁘진 않네." 그들은 한쪽은 규칙, 한쪽은 자유로움을 지닌 완벽한 균형으로 새로운 마법을 함께 만들어냈다.</p>
        </div>
        <p className="movie_recommend_title">&lt; 당신을 위한 영화 추천 &gt;</p>
        <div className="movie_poster"></div>
      </div>
    </div>
  )
}

export default TestResult