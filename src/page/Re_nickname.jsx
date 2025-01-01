import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../assets/scss/components/_start.scss';
import backBtn from '../assets/img/backBtn.svg';
import closeBtn from '../assets/img/closeBtn.svg';
import logo from '../assets/img/logo.svg';

const Re_nickname = () => {
    const [inputValue, setInputValue] = useState('');

    const goBack=() => {
        window.history.back();
    }

    return (
        <div className='Re_nickname'>
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
            <main className='re-nick-main'>
                <h2>닉네임 설정</h2>
                <p>변경을 원하시면 변경 후 완료를 클릭해주세요.</p>
                <input
                    type="text"
                    maxLength={5}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="5글자 이내로 입력해주세요"
                />

                <Link
                    to='/mypage'
                    disabled={!inputValue}
                    style={{ backgroundColor: inputValue ? '#3AD2C2' : '#696969' }}
                    className={`nextBtn ${inputValue}?"active": ""}`}>
                    완료
                </Link>
            </main>
        </div>
    )
}

export default Re_nickname