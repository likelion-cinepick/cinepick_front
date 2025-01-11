import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper 컴포넌트
import "swiper/css"; // Swiper CSS
import "swiper/css/navigation";
import "swiper/css/pagination";

const ContentsRecommend = ({ activities }) => {
  // 랜덤 색상 배열
  const colors = ["#DEFFFC", "#B6FFF7", "#ECECEC"];

  return (
    <div className="recommendation-swiper" style={{width: "100%", padding:"0,"}}>
      <Swiper
        spaceBetween={210}
        slidesPerView={2.5}
        grid={{ rows: 2 }} // 2줄로 나열
        loop={true}
        breakpoints={{
          640: { slidesPerView: 3.5, grid: { rows: 2 } },
          768: { slidesPerView: 4.5, grid: { rows: 2 } },
        }}
      >
        {activities.map((activity, index) => {
          // 랜덤 색상 선택
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <SwiperSlide key={index}>
              <div
                className="activity-card"
                style={{
                  backgroundColor: randomColor,
                }}
              >
                <div className="activity-header">
                  <span className="nickname">{activity.nickname}</span>
                  <span className="time">{activity.time}</span>
                </div>
                <div className="activity-title">{activity.title}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ContentsRecommend;
