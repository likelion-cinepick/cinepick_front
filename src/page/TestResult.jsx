import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/img/test/logo.svg'
import close from '../assets/img/test/close_icon.svg'
import test_result_img from '../assets/img/test/test_result_img.svg'

const TestResult = () => {
  const [result, setResult] = useState(null); // 결과 데이터를 저장할 상태
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // 토큰 가져오기

    // 결과 데이터를 가져오는 API 호출
    const fetchResult = async () => {
      try {
        const response = await axios.get('/test/result', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setResult(response.data); // API 응답 데이터 저장
      } catch (error) {
        console.error('결과 데이터를 가져오는 데 실패했습니다.', error);
        alert('결과를 불러오는 데 실패했습니다. 다시 시도해주세요.');
        navigate('/TestHome'); // 실패 시 홈으로 이동
      }
    };

    fetchResult();
  }, [navigate]);

  if (!result) {
    return <div>결과를 불러오는 중...</div>;
  }

  // "person" 값을 분리하는 함수
  const extractPersonData = (person) => {
    const match = person.match(/^(.*?) '(.*?)'$/); // 정규식으로 분리
    if (match) {
      return { nameInfo: match[1], name: match[2] };
    }
    return { nameInfo: person, name: '' }; // 기본값 처리
  };

  const goOut = () => {
    navigate('/TestHome',{replace:true})
  }
  const gohome = () => {
    navigate('/Home',{replace:true})
  }

  const { nameInfo, name } = extractPersonData(result.person); // 분리된 값 추출
  const defaultBackgroundUrl =
    "https://s3-alpha-sig.figma.com/img/cf90/e0b9/5ee1d7f19c6b704742edf5a8bf95bc7e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Flhr2F7Q6zRrn5lmsScCvMGOKOO5C8eT4DZXuofNF1q~KrRY~V3sSgF5rfQeSYtvon~FD1DQ~pn9BuNeal8Aj0ZkJ~wntPTAdvhTBVV5jG9ZfB~5yrFfhlbm0v4dvKSEnwR6jVd8VsKceAZ79pu2PaM-czQ2qlxP425I~jHMuHBi5cx4k~Da7O5fSw0CMf~fzyCKYHSelUCdcpHJzjmAa0Q9Glwpznpw34S-Fqh7-pvlDyEctiP4MfHMhZlUprMgQqQNTRK1UGLD6HAZWVHD~YGspm813MDbKSKo3xYrxR~SfYQYcmePxBxTnM4vxydnUAEu0PlrWSCkta5D3-0K9A__";

  // 동적으로 URL만 변경
  const moviePosterStyle = {
    background: `url(${result.recommend?.[0]?.poster_path || defaultBackgroundUrl}) lightgray 50% / cover no-repeat`,
  };

  return (
    <div className='container' id='testresult_div'>
      <div className="top">
        <img src={logo} className='logo' onClick={gohome}/>
        <img src={close} className='close' onClick={goOut}/>
      </div>
      <div className="contents">
        <p className="title">나와 닮은 영화 속 캐릭터는?</p>
        <img src={result.profileUrl} className='test_result_img' />
        <div className="name_div">
          <p className="name_info">{nameInfo}</p>
          <p className="name">{`‘${name}’`}</p>
        </div>
        <p className="main_info">{result.quote}</p>
        <p className="sub_info">{result.description}</p>
        <p className="character_title">🩷️ 찰떡궁합 캐릭터는 누구? 🩷️</p>
        <p className="character_info">{result.goodChemistry}</p>
        <p className="character_title">🩶 거리가 필요한 캐릭터는 누구? 🩶</p>
        <p className="character_info">{result.badChemistry}</p>
        <div className="chemistry_div">
          <p className="chemistry_title">우리의 케미 스토리 📖</p>
          <p className="chemistry">{result.story}</p>
        </div>
        <p className="movie_recommend_title">&lt; 당신을 위한 영화 추천 &gt;</p>
        <div className="movie_poster" style={moviePosterStyle}></div>
      </div>
    </div>
  )
}

export default TestResult