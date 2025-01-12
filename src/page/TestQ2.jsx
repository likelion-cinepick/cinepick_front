import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/test/back_icon.svg'
import logo from '../assets/img/test/logo.svg'
import close from '../assets/img/test/close_icon.svg'


const TestQ2 = () => {
    const navigate = useNavigate();
    const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택된 답변 관리
    const goback = () => {
        navigate(-1)
    }
    const gonext = () => {
        navigate('/TestLoading')
    }
    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer); // 선택된 답변 저장
    };
    return (
        <div className='container' id='testQ_div'>
            <div className="top">
                <img src={back} className='back' onClick={goback} />
                <img src={logo} className='logo' />
                <img src={close} className='close' />
            </div>
            <div className="percent_bar_back">
                <div className="percent"></div>
            </div>
            <div className="question_div">
                <p className="number">1.</p>
                <p className='question'>🏠🎉<br />새로 이사온 옆집.<br />매일매일 파티를 여는데 초대장을 받은 나...</p>
            </div>
            <div className="answer_div">
                <div
                    className={selectedAnswer === 1 ? 'btn_choice' : 'btn_no'}
                    onClick={() => handleAnswerClick(1)}
                >
                    <div className="number">1</div>
                    초대해줘서 고맙다며 파티에 즐겁게 참석한다.
                </div>
                <div
                    className={selectedAnswer === 2 ? 'btn_choice' : 'btn_no'}
                    onClick={() => handleAnswerClick(2)}
                >
                    <div className="number">2</div>
                    마음은 고마우나 벌써 피곤하여 거절한다.
                </div>
            </div>
            <div id="bottom_btn" className={selectedAnswer ? 'choice' : 'no_choice'}>
                <div className="back_btn" onClick={goback}>이전</div>
                <div className="next_btn" onClick={gonext}>다음</div>
            </div>
        </div>
    )
}

export default TestQ2