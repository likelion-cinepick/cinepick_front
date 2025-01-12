import React, { useEffect, useState } from 'react';
import axios from 'axios';
import backBtn from '../assets/img/backBtn.svg';
import closeBtn from '../assets/img/closeBtn.svg';
import logo from '../assets/img/logo.svg';
import smallHeart from '../assets/img/smallHeart.svg';
import Like from '../assets/img/like.svg';

const Heart = () => {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    axios
      .get('http://3.105.163.214:8080/my/like', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const { data } = response;

        const transformedData = data.map((item) => ({
          id: item.id,
          user: item.user,
          title: item.movieDTO.title,
          overview: item.movieDTO.overview,
          posterUrl: item.movieDTO.poster_path,
        }));

        setPosters(transformedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API 요청 실패:', err);
        setError('좋아요 목록을 불러오는 데 실패했습니다.');
        setLoading(false);
      });
  }, []);

  const goBack = () => {
    window.history.back();
  };

  if (loading) {
    return <div className="loading">로딩 중...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

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

        {posters.length === 0 ? (
          <div className="no-likes">
            <div className="heartIcon">
              <img src={Like} alt="No Likes" />
            </div>
            <p className="message">아직 좋아요 내역이 없어요!</p>
          </div>
        ) : (
          <div className="posters">
            {posters.map((poster) => (
              <div key={poster.id} className="poster">
                <img className="posterImage" src={poster.posterUrl}  />
                <img className="posterLike" src={smallHeart} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Heart;
