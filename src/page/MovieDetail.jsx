import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import chevronleft from '../assets/img/mainpage/chevron-left.png'
import chevronright from '../assets/img/mainpage/chevron-right.png'
import logo from '../assets/img/mainpage/logo.svg'
import user from '../assets/img/mainpage/user-02.png'
import movieposter from '../assets/img/mainpage/image-4.png'
import RecommendationSwiper from '../components/moviedetail/ContentsRecommend.jsx'
import CommentForm from '../components/moviedetail/CommentForm.jsx'
import CommentList from '../components/moviedetail/CommentList.jsx'

const MovieDetail = () => {
    const activities = [
        { nickname: "수정", time: "1시간 전", title: "탭 댄스" },
        { nickname: "사자", time: "30분 전", title: "하우스 파티" },
        { nickname: "사자", time: "30분 전", title: "연기 배우기" },
        { nickname: "멋쟁이 사자처럼", time: "10분 전", title: "연극반 가입" },
        { nickname: "닉네임", time: "1분 전", title: "재즈바 가기" },
        { nickname: "닉네임", time: "1분 전", title: "그리피스 방문하기" },
      ];

      const [comments, setComments] = useState([
        {
          avatar: "https://via.placeholder.com/40", // 기본 아바타 이미지
          nickname: "누군가",
          date: "25.01.12",
          text: "라라랜드를 보고 탭댄스를 배우기 시작했다면 믿으시겠습니까?",
        },
        {
          avatar: "https://via.placeholder.com/40",
          nickname: "멋사",
          date: "25.01.12",
          text: "라라랜드는 역시 LA 여행 자극으로 최고의 영화죠! 영화 보고 바로 뱅기 예약해서 천문대 찍고 왔던 기억이... 야경이 최고니까 꼭 밤에 가서 보시길 바랍니다!",
        },
      ]);
    
      const handleAddComment = (text) => {
        const newComment = {
          avatar: "https://via.placeholder.com/40",
          nickname: "새로운 유저", // 임의 닉네임 (혹은 사용자 정보 활용 가능)
          date: new Date().toISOString().slice(2, 10), // 날짜 형식: yy.mm.dd
          text,
        };
        setComments([newComment, ...comments]);
      };
      
  return (
    <div className='detail-container'>
        <div className='content-nav'>
            <img src={chevronleft} className='detail-back' />
            <img src={logo} className='detail-logo' />
            <img src={user} className='detail-user' />
        </div>
        <div className='detail-movie_title'>라라랜드</div>
        
        <img src={movieposter} />

        <div className='detail-movie'>
            <div className='detail-movie_plot'>📖 줄거리</div>
            <div className='detail-movie_plot_box'>
                <div className='plot'>
                꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈 피아니스트 ‘세바스찬’(라이언 고슬링)과 배우 지망생 ‘미아’(엠마 스톤), 인생에서 가장 빛나는 순간 만난 두 사람은 미완성인 서로의 무대를 만들어가기 시작한다.
                </div>
            </div>
            <div className='detail-suggestion'>
                <div className='upper_nav'>
                    <div className='detail-suggestion_activity'>🎯 추천 활동 Pick!</div>
                    <Link to="/movie/detail/more">
                      <img src={chevronright} className="go-to-more" alt="Go to more activities" />
                    </Link>
                </div>
                <RecommendationSwiper activities={activities} />
            </div>
            <div className='detail-comment_activity'>
                <textarea placeholder='영화를 보고 추천하는 활동을 적어 주세요!'></textarea>
                <div className='comment_count'>0/10</div>
                <button className='submit-comment_activity'>등록</button>
            </div>

            <div className='detail-Chit-Chat'>
                <div className='upper_nav'>
                    <div className='detail-Chit-Chat_title'>CinePick’s Chit-Chat</div>
                    <div className='set_array'>
                        <span className='selected'>등록순</span>
                        <span className='non_selected'>최신순</span>
                    </div>
                </div>
                <div className='line' />
                <div className="comments-page">
                    <CommentList comments={comments} />
                    <CommentForm onAddComment={handleAddComment} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetail