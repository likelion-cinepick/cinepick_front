import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/img/test/logo.svg";
import myPage from "../assets/img/test/mypage_icon_top.svg";
import top_scroll from '../assets/img/test/top_scroll.svg';

const genres = [
  "판타지",
  "코미디",
  "액션",
  "애니메이션",
  "스릴러",
  "미스터리",
  "뮤지컬",
  "멜로",
  "로맨스",
  "드라마",
  "다큐멘터리",
  "공포",
  "SF",
];
const moods = [
  { icon: "🔥", text: "따뜻한" },
  { icon: "💭", text: "생각이 필요한" },
  { icon: "🎶", text: "경쾌한" },
  { icon: "🌟", text: "재밌는" },
  { icon: "💌", text: "달달한" },
  { icon: "🎬", text: "실제의" },
  { icon: "🩸", text: "무서운" },
  { icon: "🎀", text: "보기 좋은" },
  { icon: "💥", text: "짧고 강렬한" },
  { icon: "🍀", text: "희망찬" },
  { icon: "💡", text: "교훈 있는" },
  { icon: "⚒️", text: "잔혹한" },
  { icon: "🧩", text: "모호한" },
  { icon: "🔗", text: "심오한" },
  { icon: "💎", text: "용감한" },
];

const Home = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [moodKeywords, setMoodKeywords] = useState([]); // 키워드 데이터 저장
  const [movies, setMovies] = useState([]); // 영화 데이터 저장
  const [popular_movies, setPopularMovies] = useState([]); // 영화 데이터 저장
  const [like_movies, setLikeMovies] = useState([]); // 영화 데이터 저장

  // 랜덤 장르 선택 함수
  const getRandomGenres = (count) => {
    const shuffledGenres = genres.sort(() => 0.5 - Math.random()); // 장르 섞기
    return shuffledGenres.slice(0, count); // 앞에서 3개 선택
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken"); // 토큰 가져오기
        const response = await axios.get("/my", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { nickname, userId, mood } = response.data; // API 응답 데이터
        setUserName(nickname); // 사용자 이름 설정
        setUserId(userId); // 사용자 ID 설정
        setMoodKeywords(mood); // 키워드 설정

        const randomGenres = getRandomGenres(3);

        // 영화 데이터 가져오기
        const moviesResponse = await axios.get("/movies/recommend", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMovies(moviesResponse.data); // 영화 데이터 저장
        // 영화 데이터 가져오기
        const moviesLikeResponse = await axios.get("/movies/liked", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLikeMovies(moviesLikeResponse.data);

        // 영화 데이터 가져오기
        const moviesPopularResponse = await axios.get(`/movies/popular?genre=${randomGenres.join(
          "&genre="
        )}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPopularMovies(moviesPopularResponse.data);

      } catch (error) {
        console.error("사용자 데이터를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchUserData();
  }, []);

  const gotest = () => {
    navigate('/TestHome', {
      state: { userId }, // 상태로 데이터 전달
    })
  }
  const gomypage = () => {
    navigate('/mypage')
  }
  const gohome = () => {
    navigate('/home')
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };

  return (
    <div className="container" id="home_div">
      <div className="top_test_div">
        <p className="test_info_txt">나를 닮은 영화 캐릭터를 알고 싶다면?</p>
        <div className="test_btn" onClick={gotest}>테스트 하러가기</div>
      </div>
      <div className="top_header_div">
        <img src={logo} className="logo" onClick={gohome}/>
        <img src={myPage} className="mypage_icon_top" onClick={gomypage} />
      </div>
      <div className="contents_div">
        <p className="for_you_text">{userName}님을 위한 추천!</p>
        <div className="choice_mood_div">
          <div className="mood_components">
          {moodKeywords.map((keyword, index) => {
              const matchedMood = moods.find((mood) => mood.text === keyword);
              return (
                <div className="item" key={index}>
                  <p>{matchedMood?.icon || "✨"}</p>
                  <p>{keyword}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mood_movie_div">
          {movies.length > 0 && (
            <img
              src={movies[0].poster_path}
              className="main_movie"
              alt={movies[0].title}
            />
          )}
          <div className="movie_list_div">
            {movies.slice(1).map((movie, index) => (
              <img
                key={index}
                src={movie.poster_path}
                className="sub_movie"
                alt={movie.title}
              />
            ))}
          </div>
        </div>
        <div className="contents_movie_div">
          <p className="contents_title">인기 키워드 작품</p>
          <div className="movie_list_div">
            {popular_movies.map((movie, index) => (
              <img
                key={index}
                src={movie.poster_path}
                className="sub_movie"
                alt={movie.title}
              />
            ))}
          </div>
        </div>
        <div className="contents_movie_div">
          <p className="contents_title">좋아요 누른 작품</p>
          <div className="movie_list_div">
            {like_movies.map((movie, index) => (
              <img
                key={index}
                src={movie.poster_path}
                className="sub_movie"
                alt={movie.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="footer_div">
        <p className="info_title">CinePick 사업자 정보</p>
        <hr />
        <div className="info_div">
          <p className="info_name">대표자</p>
          <p className="info_text">데모데이</p>
        </div>
        <div className="info_div">
          <p className="info_name">주소</p>
          <p className="info_text">서울특별시 성북구 보문로34다길2</p>
        </div>
        <div className="info_div">
          <p className="info_name">입점문의</p>
          <p className="info_text">likelion@cinepick.co.or</p>
        </div>
        <div className="bottom_div">
          <p className="title">Copyright</p>
          <p className="text">CinePick. All rights reserved</p>
        </div>
      </div>
      <div className="top_scroll_btn" onClick={scrollToTop}>
        <img src={top_scroll} className="top_scroll_img" />
      </div>
    </div>
  );
};

export default Home;