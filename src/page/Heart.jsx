import React from 'react';
import backBtn from '../assets/img/backBtn.svg';
import closeBtn from '../assets/img/closeBtn.svg';
import logo from '../assets/img/logo.svg';
import smallHeart from '../assets/img/smallHeart.svg';
import poster1 from '../assets/img/poster1.svg';
import poster2 from '../assets/img/poster2.svg';

const Heart = () => {
  const posters = [
    { id: 1, src: poster1 },
    { id: 2, src: poster2 },
  ];

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="heart-container">
      <header className="heart-header">
        <button className="back-btn" onClick={goBack}>
          <img src={backBtn} alt="Back" />
        </button>
        <h1 className="heart-logo">
          <img src={logo} alt="Logo" />
        </h1>
        <button className="close-btn" onClick={goBack}>
          <img src={closeBtn} alt="Close" />
        </button>
      </header>
      <main className="heart-main">
        <h2 className="sectionTitle">좋아요 내역</h2>

        {/* 좋아요 내역이 없을 때 */}
        {/* <div className='heartIcon'>
          <img src={heartImg} />
        </div>
        <p className='message'>아직 좋아요 내역이 없어요!</p> */}

        <div className="posters">
          {posters.map((poster) => (
            <div key={poster.id} className="poster">
              <img className="posterImage" src={poster.src} alt={`Poster ${poster.id}`} />
              <img className="posterLike" src={smallHeart} alt="Like Icon" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Heart;
