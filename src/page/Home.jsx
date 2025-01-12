import React, { useState } from "react";
import logo from "../assets/img/test/logo.svg";
import myPage from "../assets/img/test/mypage_icon.svg";
import top_scroll from '../assets/img/test/top_scroll.svg';

const Home = () => {
  const [userName, setUserName] = useState("성신");
  const [selectedMoods, setSelectedMoods] = useState([]);

  return (
    <div className="container" id="home_div">
      <div className="top_test_div">
        <p className="test_info_txt">나를 닮은 영화 캐릭터를 알고 싶다면?</p>
        <div className="test_btn">테스트 하러가기</div>
      </div>
      <div className="top_header_div">
        <img src={logo} className="logo" />
        <img src={myPage} className="mypage" />
      </div>
      <div className="contents_div">
        <p className="for_you_text">{userName}님을 위한 추천!</p>
        <div className="choice_mood_div">
          <div className="mood_components">
            <div className="item">
              <p>🔥</p>
              <p>따뜻한</p>
            </div>
            <div className="item">
              <p>💌</p>
              <p>달달한</p>
            </div>
          </div>
        </div>
        <div className="mood_movie_div">
          <img src="https://s3-alpha-sig.figma.com/img/14e3/9a20/abc940ffb55abcb99b9dd80a74d0cde1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPvH9e-T5DuNQ9m5N7CGldv6~A-ett0siVeFQJYaq4UKtDXVxUAqQZqW~uMkqCtnPuJ~FTiUtL6w~0L4L7rDZCkRprz~Eyg4Qmv7gGejGvvAck89U2VNUz9HsqC4~H3IspXh4UR0G3kzL87WJciMHcBFZIZG3IGEaAeAPAbMm5Jq5QVDT3iS3Y22tAm6MlTxruEAeQrth9-uT55PuLsRKg0NZYRMIwg8EVq7BHffJYj~EJeZmpFnQ~EAKCeXl92oaEE-hNfPVZEx9-rT~UrzmTG5SPqUjyejtS-nIxZe1WhirDk7BzViYjE02iiCc9G5I4knzBSXD8G-EnnHyRqFeQ__" className="main_movie" />
          <div className="movie_list_div">
            <img src="https://s3-alpha-sig.figma.com/img/79b0/1c12/ba1cad6881557075a5fa955b013a6187?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nCLHW82qBlDdXkHjMqwrtQaNYxd92q1t16X2t0GOOaUegmqxrAODNAkexeu5tUS~Tz9EOIoC7li3uotCHkj9P0HEolUaODWcL4S5bZIlue-CjE2Ku1RK0hUHrRiXMkX7lpPRKj-bgo2vLR5RFDoZuUMSWnCmX66bbkiAgUr0OYNvvFC7UJwmO78pddcYXj2e625wgqEub6VktniGOV4DA-3q~TF0WnKtkrRYn1CVcXvar1XfXp6gNVEKAcjxrx5ppNuadNQ76KeaAT4mejWNK~dON2J70m7tslz8W6t8vZPCZVWdZlzHRI3bAlRspetiUGpmG4iN0SimP6l844Kvgg__" className="sub_movie" />
          </div>
        </div>
        <div className="contents_movie_div">
          <p className="contents_title">인기 키워드 작품</p>
          <div className="movie_list_div">
            <img src="https://s3-alpha-sig.figma.com/img/79b0/1c12/ba1cad6881557075a5fa955b013a6187?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nCLHW82qBlDdXkHjMqwrtQaNYxd92q1t16X2t0GOOaUegmqxrAODNAkexeu5tUS~Tz9EOIoC7li3uotCHkj9P0HEolUaODWcL4S5bZIlue-CjE2Ku1RK0hUHrRiXMkX7lpPRKj-bgo2vLR5RFDoZuUMSWnCmX66bbkiAgUr0OYNvvFC7UJwmO78pddcYXj2e625wgqEub6VktniGOV4DA-3q~TF0WnKtkrRYn1CVcXvar1XfXp6gNVEKAcjxrx5ppNuadNQ76KeaAT4mejWNK~dON2J70m7tslz8W6t8vZPCZVWdZlzHRI3bAlRspetiUGpmG4iN0SimP6l844Kvgg__" className="sub_movie" />
          </div>
        </div>
        <div className="contents_movie_div">
          <p className="contents_title">최근 개봉한 작품</p>
          <div className="movie_list_div">
            <img src="https://s3-alpha-sig.figma.com/img/79b0/1c12/ba1cad6881557075a5fa955b013a6187?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nCLHW82qBlDdXkHjMqwrtQaNYxd92q1t16X2t0GOOaUegmqxrAODNAkexeu5tUS~Tz9EOIoC7li3uotCHkj9P0HEolUaODWcL4S5bZIlue-CjE2Ku1RK0hUHrRiXMkX7lpPRKj-bgo2vLR5RFDoZuUMSWnCmX66bbkiAgUr0OYNvvFC7UJwmO78pddcYXj2e625wgqEub6VktniGOV4DA-3q~TF0WnKtkrRYn1CVcXvar1XfXp6gNVEKAcjxrx5ppNuadNQ76KeaAT4mejWNK~dON2J70m7tslz8W6t8vZPCZVWdZlzHRI3bAlRspetiUGpmG4iN0SimP6l844Kvgg__" className="sub_movie" />
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
      <div className="top_scroll_btn">
        <img src={top_scroll} className="top_scroll_img" />
      </div>
    </div>
  );
};

export default Home;