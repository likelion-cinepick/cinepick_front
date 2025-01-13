import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import "../assets/scss/components/_start.scss";
import logo from "../assets/img/logo.svg";

const Login = () => {
  const LS_KEY_ID = "LS_KEY_ID";
  const LS_KEY_SAVE_ID_FLAG = "LS_KEY_SAVE_ID_FLAG";
  const navigate = useNavigate(); 

  const [saveIDFlag, setSaveIDFlag] = useState(false);
  const [loginID, setLoginID] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");

  const handleSaveIDFlag = () => {
    localStorage.setItem(LS_KEY_SAVE_ID_FLAG, JSON.stringify(!saveIDFlag));
    setSaveIDFlag(!saveIDFlag);
  };

  useEffect(() => {
    const idFlag = JSON.parse(localStorage.getItem(LS_KEY_SAVE_ID_FLAG));
    if (idFlag !== null) setSaveIDFlag(idFlag);

    if (idFlag) {
      const savedID = localStorage.getItem(LS_KEY_ID);
      if (savedID) setLoginID(savedID);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("handle log");

    if (loginID === "") {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (loginPassword === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post("http://3.105.163.214:8080/login", {
        userId: loginID,
        password: loginPassword,
      });
      console.log("response");
      if (response.data.token) {
        if (saveIDFlag) {
          console.log("saveIDFlag is set");
          localStorage.setItem(LS_KEY_ID, loginID);
          localStorage.setItem("authToken", response.data.token);
        } else {
          localStorage.removeItem(LS_KEY_ID);
        }
        alert("로그인 성공!");
        navigate("/Home"); 
      } else {
        alert("아이디나 비밀번호가 틀렸습니다.");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };
  
  return (
    <div className="login-container">
      <h1 className="login-logo">
        <img className="login-logo-img" src={logo} alt="Logo" />
      </h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="ID"
          className="login-input"
          value={loginID}
          onChange={(e) => setLoginID(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <div className="login-options">
          <label className="login-checkbox">
            <input
              type="checkbox"
              className="checkbox"
              checked={saveIDFlag}
              onChange={handleSaveIDFlag}
            />
            <p>아이디 저장</p>
          </label>
        </div>
        <button type="submit" className="login-button">
          로그인
        </button>
      </form>

      {error && <div className="login-error">{error}</div>}

      <div className="login-links">
        <a href="#" className="login-link">아이디 찾기</a>
        <a href="#" className="login-link">비밀번호 재설정</a>
        <Link to="/join" className="login-link">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
