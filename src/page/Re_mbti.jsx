import React, { useState } from 'react';
import KeywordMbti from '../components/KeywordMbti';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../assets/scss/components/_start.scss';
import backBtn from '../assets/img/backBtn.svg';
import closeBtn from '../assets/img/closeBtn.svg';
import logo from '../assets/img/logo.svg';

const Re_mbti = () => {
    const [selectedMbti, setSelectedMbti] = useState(null);

    const handleMbtiSelect = (mbti) => {
        setSelectedMbti(mbti);
    };

    const handleComplete = async () => {
        if (selectedMbti) {
            const token = localStorage.getItem('authToken');
            try {
                const response = await axios.post('http://3.105.163.214:8080/mbti', {
                    userId: localStorage.getItem('LS_KEY_ID'),
                    mbti: selectedMbti,
                }, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                localStorage.setItem('selectedMbti', response.data);
                console.log('MBTI successfully updated:', response.data);
            } catch (error) {
                console.error('Error updating MBTI:', error);
            }
        }
    };

    const goBack = () => {
        window.history.back();
    };

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
                <h2>MBTI 변경하기</h2>
                <p className='p3'>현재 설정된 MBTI입니다!<br />변경을 원하시면 변경 후 완료를 클릭해주세요.</p>
                <KeywordMbti
                    selectedMbtis={selectedMbti ? [selectedMbti] : []} // 배열로 통일
                    onMbtiSelect={handleMbtiSelect}
                />
                <Link
                    to="/mypage"
                    className={`nextBtn ${selectedMbti ? 'active' : ''}`}
                    style={{ backgroundColor: selectedMbti ? '#3AD2C2' : '#696969' }}
                    onClick={handleComplete}
                >
                    완료
                </Link>
            </main>
        </div>
    );
};

export default Re_mbti;
