import React, { useState } from 'react';
import KeywordMood from '../components/KeywordMood';
import '../assets/scss/components/_start.scss';
import backBtn from '../assets/img/backBtn.svg';
import closeBtn from '../assets/img/closeBtn.svg';

const Setting = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [selectedMbti, setSelectedMbti] = useState('');
  const [selectedMoods, setSelectedMoods] = useState([]);

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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
              className='nextBtn'
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
            <h2>성신님의 MBTI를 선택해주세요.</h2>
            <div className="mbti-buttons">
              {['ESTJ', 'ISFP', 'INTP', 'ENTJ', 'ENFP', 'INTJ', 'ISTJ', 'ESFP', 'ESTP', 'ISFJ', 'INFP', 'ENFJ', 'ENTP', 'INFJ', 'ESFJ', 'ISTP'].map((mbti) => (
                <button
                  key={mbti}
                  className={`mbti-item ${selectedMbti === mbti ? 'selected' : ''}`}
                  onClick={() => setSelectedMbti(mbti)}
                >
                  {mbti}
                </button>
              ))}
            </div>
            <button className='nextBtn'
              style={{ backgroundColor: selectedMbti ? '#3AD2C2' : '#696969' }}
              onClick={handleNextStep}
              disabled={!selectedMbti}
            >
              다음
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="step3">
            <h2>선호하는 분위기를 선택해주세요.</h2>
            <p className='p3'>키워드는 1개 이상, 최대 3개로 골라주세요!</p>
            <KeywordMood 
              className='mood-buttons'
              selectedMoods={selectedMoods}
              onMoodSelect={handleMoodSelect}
            />
            <button
              className='nextBtn'
              style={{ backgroundColor: selectedMoods.length > 0 ? '#3AD2C2' : '#696969' }}
              onClick={handleNextStep}
              disabled={selectedMoods.length === 0}
            >
              완료
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;
