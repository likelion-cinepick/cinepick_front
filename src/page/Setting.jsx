import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import KeywordMbti from '../components/KeywordMbti';
import KeywordMood from '../components/KeywordMood';
import '../assets/scss/components/_start.scss';
import backBtn from '../assets/img/backBtn.svg';
import closeBtn from '../assets/img/closeBtn.svg';

const Setting = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [userName, setUserName] = useState('');
  const [selectedMbtis, setSelectedMbtis] = useState([]);
  const [selectedMoods, setSelectedMoods] = useState([]);

  const userId = localStorage.getItem('LS_KEY_ID');

  const handleNextStep = async () => {
    const token = localStorage.getItem('authToken'); 
    
    if (currentStep === 1) {
      if (!inputValue) return;

      try {
        const response = await axios.post('http://3.105.163.214:8080/nickname', {
          userId: `${localStorage.getItem("LS_KEY_ID")}`,
          nickname: inputValue,
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        });
        localStorage.setItem('userName', response.data);
        setUserName(response.data);
        console.log('Nickname successfully updated:', response.data);
      } catch (error) {
        console.error('Error updating nickname:', error);
      }
    }

    if (currentStep === 2) {
      if (selectedMbtis.length === 0) return;

      try {
        const response = await axios.post('http://3.105.163.214:8080/mbti', {
          userId: `${localStorage.getItem("LS_KEY_ID")}`,
          mbti: selectedMbtis[0],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        });
        localStorage.setItem('selectedMbti', response.data);
        console.log('MBTI successfully updated:', response.data);
      } catch (error) {
        console.error('Error updating MBTI:', error);
      }
    }

    if (currentStep === 3) {
      console.log(`selectedMoods : ${selectedMoods}`);
      
      if (selectedMoods.length === 0) return;

      try {
        const response = await axios.post('http://3.105.163.214:8080/mood', {
          userId: `${localStorage.getItem("LS_KEY_ID")}`,
          mood: selectedMoods,
          mbti: selectedMbtis[0],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        });
        localStorage.setItem('selectedMoods', response.data);
        console.log('Mood successfully updated:', response.data);
      } catch (error) {
        console.error('Error updating mood:', error);
      }
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleMbtiSelect = (mbti) => {
    if (selectedMbtis.includes(mbti)) {
      setSelectedMbtis(selectedMbtis.filter((x) => x !== mbti));
    } else if (selectedMbtis.length < 1) {
      setSelectedMbtis([...selectedMbtis, mbti]);
    }
  };

  const handleMoodSelect = (mood) => {
    if (selectedMoods.includes(mood)) {
      setSelectedMoods(selectedMoods.filter((m) => m !== mood));
    } else if (selectedMoods.length < 3) {
      setSelectedMoods([...selectedMoods, mood]);
    }
  };

  return (
    <div>
      <header className="join-header">
        <button className="back-btn">
          <img src={backBtn} alt="Back" onClick={handlePreviousStep} />
        </button>
        <button className="close-btn">
          <img src={closeBtn} alt="Close" onClick={() => window.history.back()} />
        </button>
      </header>
      <div className="setting-container">
        {currentStep === 1 && (
          <div className="step1">
            <h2>가입을 축하드려요!<br />어떻게 불러드리면 될까요?</h2>
            <input
              type="text"
              maxLength={5}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="5글자 이내로 입력해주세요"
            />
            <button
              className="nextBtn"
              style={{ backgroundColor: inputValue ? '#3AD2C2' : '#696969' }}
              onClick={handleNextStep}
              disabled={!inputValue}
            >
              다음
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="step2">
            <h2>{userName}님 MBTI를 선택해주세요.</h2>
            <p className="p2">
              처음 가입 시, MBTI에 따라 프로필이 설정되어요.<br />
              이후 테스트를 진행하여 변경 가능해요!
            </p>
            <KeywordMbti
              selectedMbtis={selectedMbtis}
              onMbtiSelect={handleMbtiSelect}
            />
            <button
              className="nextBtn"
              style={{ backgroundColor: selectedMbtis.length > 0 ? '#3AD2C2' : '#696969' }}
              onClick={handleNextStep}
              disabled={selectedMbtis.length === 0}
            >
              완료
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="step3">
            <h2>선호하는 분위기를 선택해주세요.</h2>
            <p className="p3">키워드는 1개 이상, 최대 3개로 골라주세요!</p>
            <KeywordMood
              className="mood-buttons"
              selectedMoods={selectedMoods}
              onMoodSelect={handleMoodSelect}
            />
            <Link to="/Home">
              <button
                className="nextBtn"
                style={{ backgroundColor: selectedMoods.length > 0 ? '#3AD2C2' : '#696969' }}
                onClick={handleNextStep}
                disabled={selectedMoods.length === 0}
              >
                완료
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;