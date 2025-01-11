import React from 'react';
import { Link } from 'react-router-dom'; 
import chevronleft from '../assets/img/mainpage/chevron-left.png';
import close from '../assets/img/mainpage/x-close.png';

const MoreRecommend = () => {
  const activity = [
    { nickname: "수정", time: "1시간 전", title: "탭 댄스" },
    { nickname: "사자", time: "30분 전", title: "하우스 파티" },
    { nickname: "사자", time: "30분 전", title: "연기 배우기" },
    { nickname: "멋쟁이 사자처럼", time: "10분 전", title: "연극반 가입" },
    { nickname: "닉네임", time: "1분 전", title: "재즈바 가기" },
    { nickname: "닉네임", time: "1분 전", title: "그리피스 방문하기" },
  ];

  return (
    <div className="detail-container">
      <div className="content-nav">
        <Link to="/movie/detail">
          <img src={chevronleft} className="detail-back" />
        </Link>
        <div className="detail-suggestion_activity">🎯 추천 활동 Pick!</div>
        <Link to="/movie/detail">
          <img src={close} className="detail-back" />
        </Link>
      </div>

      <div className="detail-Chit-Chat-new">
        <div className="upper_nav">
          <div className="set_array">
            <span className="selected">등록순</span>
            <span className="non_selected">최신순</span>
          </div>
        </div>
      </div>

      <div className="recommendation">
        {activity.map((activityItem, index) => (
          <div className="activity-card-more" key={index}>
            <div className="activity-header">
              <span className="nickname">{activityItem.nickname}</span>
              <span className="time">{activityItem.time}</span>
            </div>
            <div className="activity-title">{activityItem.title}</div>
          </div>
        ))}
      </div>

      <Link to="/movie/detail" className="back-to-list">돌아가서 나도 써보기</Link>
    </div>
  );
};

export default MoreRecommend;
