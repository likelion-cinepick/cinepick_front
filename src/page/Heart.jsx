import '../assets/scss/components/_start.scss';
import React from 'react';
import backBtn from '../assets/img/backBtn.svg';
import closeBtn from '../assets/img/closeBtn.svg';
import logo from '../assets/img/logo.svg';
import heartImg from '../assets/img/path-to-heart-image.svg';

const Heart = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className='heart-container'>
      <header className='heart-header'>
        <button className='back-btn'onClick={goBack}>
          <img src={backBtn} />
        </button>
        <h1 className='heart-logo' >
          <img src={logo} />
        </h1>
        <button className='close-btn'onClick={goBack}>
          <img src={closeBtn} />
        </button>
      </header>
      <main className='heart-main'>
        <h2 className='sectionTitle'>좋아요 내역</h2>
        <div className='heartIcon'>
          <img src={heartImg} />
        </div>
        <p className='message'>아직 좋아요 내역이 없어요!</p>
      </main>
    </div>
  );
};

export default Heart;
