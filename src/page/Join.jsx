import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/scss/components/_start.scss";
import backBtn from "../assets/img/backBtn.svg";
import closeBtn from "../assets/img/closeBtn.svg";

const Join = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const validatePassword = () => {
    setIsPasswordValid(password === confirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("in handle submit");

    if (isPasswordValid) {
      try {
        const response = await axios.post(
          "http://3.105.163.214:8080/register",
          {
            userId: id,
            password: password,
            confirmPassword: confirmPassword
          }
        );

        console.log("Response received:", response);

        if (response) {
          localStorage.setItem("LS_KEY_ID", id);
          alert("회원가입 성공!");
          navigate("/login");
        } else {
          console.log(`No Data during register`)
        }
        
      } catch (error) {
        console.error(error);
        alert("회원가입 실패! 다시 시도해 주세요.");
      }
    } else {
      alert("비밀번호를 확인해주세요.");
    }
  };

  const goBack = () => {
    window.history.back();
  };

  const handleClose = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="join">
      <header className="join-header">
        <button className="back-btn" onClick={goBack}>
          <img src={backBtn} />
        </button>
        <button className="close-btn" onClick={handleClose}>
          <img src={closeBtn} />
        </button>
      </header>
      <h1 className="join-title">회원가입</h1>
      <form className="join-form" onSubmit={handleSubmit}>
        <label htmlFor="id">아이디</label>
        <input
          id="id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
          required
        />
        <label htmlFor="password">비밀번호</label>
        <input
          className="passwordForMargin"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          required
        />
        <p className="password-guide">
          영문 대/소문자, 숫자, 특수문자 중 2가지 이상 조합, 8자~32자
        </p>
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
          className="passwordForMargin"
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
          required
          onBlur={validatePassword}
        />
        {isPasswordValid === false && (
          <p className="password-error">비밀번호가 일치하지 않습니다.</p>
        )}
        {isPasswordValid === true && (
          <p className="password-success">비밀번호가 일치합니다.</p>
        )}
          <button
            type="submit"
            className={`submit-btn ${isPasswordValid ? "active" : ""}`}
          >
            완료
          </button>
      </form>

      {isModalOpen && (
        <div className="modal-background">
          <div className="modal">
            <h4>회원가입을 취소하시겠어요?</h4>
            <p>작성하신 내용은 저장되지 않아요.</p>
            <div className="modal-buttons">
              <button onClick={goBack}>네</button>
              <button onClick={handleCancel}>아니요</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Join;
