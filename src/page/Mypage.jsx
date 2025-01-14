import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/scss/components/_start.scss';
import logo from '../assets/img/logo.svg';
import edit from '../assets/img/edit.svg';
import heart from '../assets/img/heart.svg';
import set from '../assets/img/set.svg';
import ENTP from '../assets/img/ENTP.svg';
import INTP from '../assets/img/INTP.svg';
import ENTJ from '../assets/img/ENTJ.svg';
import INTJ from '../assets/img/INTJ.svg';
import ENFP from '../assets/img/ENFP.svg';
import INFP from '../assets/img/INFP.svg';
import ENFJ from '../assets/img/ENFJ.svg';
import INFJ from '../assets/img/INFJ.svg';
import ESTP from '../assets/img/ESTP.svg';
import ISTP from '../assets/img/ISTP.svg';
import ESTJ from '../assets/img/ESTJ.svg';
import ISTJ from '../assets/img/ISTJ.svg';
import ESFP from '../assets/img/ESFP.svg';
import ISFP from '../assets/img/ISFP.svg';
import ESFJ from '../assets/img/ESFJ.svg';
import ISFJ from '../assets/img/ISFJ.svg';

const Mypage = () => {
    const [selectedMoods, setSelectedMoods] = useState([]);
    const [selectedMbti, setSelectedMbti] = useState(null);
    const [userName, setUserName] = useState('성신');

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        axios.get('http://3.105.163.214:8080/my', {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                const { data } = response;
                console.log(data);
                if (data) {
                    setUserName(data.nickname || '성신');
                    setSelectedMoods(data.mood || []);
                    setSelectedMbti(data.mbti || null);
                    console.log(`Moods Setting : ${selectedMoods}, ${data.mood}`);
                }
            })
            .catch((error) => {
                console.error('API 요청 실패:', error);
            });

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
                <div className="profile-image">
                    {selectedMbti && (
                        <img
                            src={require(`../assets/img/${selectedMbti}.svg`)}
                            alt={`${selectedMbti} 이미지`}
                            className="mbti-image"
                        />
                    )}
                </div>
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
                            {console.log(`Moods: ${selectedMoods}`)}
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
                    <Link to="/TestHome">
                        <button>
                            <img src={edit} alt="Edit" />
                            <p>테스트 다시하기</p>
                        </button>
                    </Link>
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
