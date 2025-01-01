import React, { useState } from 'react';
import KeywordMood from '../components/KeywordMood';
import { Link } from "react-router-dom";
import '../assets/scss/components/_start.scss';
import backBtn from '../assets/img/backBtn.svg';
import closeBtn from '../assets/img/closeBtn.svg';
import logo from '../assets/img/logo.svg';


const Re_mood = () => {
    const [selectedMoods, setSelectedMoods] = useState([]);

    const handleMoodSelect = (mood) => {
        if (selectedMoods.includes(mood)) {
            setSelectedMoods(selectedMoods.filter((m) => m !== mood));
        } else if (selectedMoods.length < 3) {
            setSelectedMoods([...selectedMoods, mood]);
        }
    };

    const goBack=() => {
        window.history.back();
    }

    return (
        <div className='Re_mood'>
            <header className="reset-header">
                <button className="back-btn" onClick={goBack}>
                    <img src={backBtn} alt="Back" />
                </button>
                <h1 className='re-logo'>
                    <img src={logo} />
                </h1>
                <button className="close-btn" onClick={goBack}>
                    <img src={closeBtn} alt="Close" />
                </button>
            </header>
            <main className='re-mood-main'>
                <h2>키워드 변경하기</h2>
                <p className='p3'>현재 선택한 분위기 키워드입니다!<br /> 변경을 원하시면 변경 후 완료를 클릭해주세요.</p>
                <KeywordMood
                    className='mood-buttons'
                    selectedMoods={selectedMoods}
                    onMoodSelect={handleMoodSelect}
                />
                <Link
                    to='/mypage'
                    disabled={selectedMoods.length === 0} style={{ backgroundColor: selectedMoods.length > 0 ? '#3AD2C2' : '#696969' }}
                    className={`nextBtn ${handleMoodSelect}?"active": ""}`}>
                    완료
                </Link>
            </main>
        </div>
    )
}

export default Re_mood