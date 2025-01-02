import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/components/_start.scss';
import logo from '../assets/img/logo.svg';
import edit from '../assets/img/edit.svg';
import heart from '../assets/img/heart.svg';
import set from '../assets/img/set.svg';

const Mypage = () => {
    const [selectedMoods, setSelectedMoods] = useState([]);
    const [selectedMbti, setSelectedMbti] = useState(null);
    const [userName, setUserName] = useState('성신');

    useEffect(() => {
        const storedMoods = localStorage.getItem('selectedMoods');
        const storedMbti = localStorage.getItem('selectedMbti');
        const storedUserName = localStorage.getItem('userName');

        if (storedMoods) setSelectedMoods(JSON.parse(storedMoods));
        if (storedMbti) setSelectedMbti(JSON.parse(storedMbti));
        if (storedUserName) setUserName(storedUserName);

    }, []);

    return (
        <div className="mypage">
            <header className="mypage-header">
                <h1 className="logo">
                    <img src={logo} alt="Logo" />
                </h1>
                <h2 className="page-title">마이페이지</h2>
            </header>
            <section className="profile-section">
                <div className="profile-image"></div>
                <h3 className="username">{userName}</h3>
            </section>
            <section className="info-section">
                <div className="info-div">
                    <div className="info-item">
                        <div className="info-top">
                            <h4>나의 키워드</h4>
                            <Link to="/re_mood">
                                <button className="edit-button">변경하기</button>
                            </Link>
                        </div>
                        <div className="keywords">
                            {selectedMoods.length > 0 ? (
                                selectedMoods.map((mood, index) => (
                                    <div className="keyword" key={index}>
                                        <p>{mood}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="keyword">
                                    <p>선택된 키워드가 없습니다.</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="info-item">
                        <div className="info-top">
                            <h4>나의 MBTI</h4>
                            <Link to="/re_mbti">
                                <button className="edit-button">변경하기</button>
                            </Link>
                        </div>
                        <div className="keyword">
                            {selectedMbti ? (
                                <p>{selectedMbti}</p>
                            ) : (
                                <p>선택된 MBTI가 없습니다.</p>
                            )}
                        </div>
                    </div>

                </div>
            </section>
            <nav className="navigation">
                <div className="buttons">
                    <button>
                        <img src={edit} alt="Edit" />
                        <p>테스트 다시하기</p>
                    </button>
                    <Link to="/heart">
                        <button>
                            <img src={heart} alt="Heart" />
                            <p>좋아요 내역</p>
                        </button>
                    </Link>
                    <Link to="/re_nickname">
                        <button>
                            <img src={set} alt="Set" />
                            <p>닉네임 설정</p>
                        </button>
                    </Link>
                </div>
            </nav>
            <footer className="help-section">
                <ul>
                    <li className="li1">도움</li>
                    <li>공지사항</li>
                    <li>자주 묻는 질문</li>
                    <li>고객 센터</li>
                    <li>관리자</li>
                </ul>
            </footer>
        </div>
    );
};

export default Mypage;
