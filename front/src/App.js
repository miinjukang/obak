import React from "react";
import { Routes, Route, Link } from "react-router-dom";

/* import logo from './logo.svg'; */
import './App.css';

import Main from "./main/Main";
import Login from "./common/Login";

function App() {
  return (
    <div className="App">
      <header id="header">
        <div id="headerInner">
          <div className="header-logo area">
            <h1 className="logo"><Link to="/">로고</Link></h1>
          </div>
        </div>
        <nav id="gnb">
          <div className="gnb-wrap">
            <ul className="clearfix area">
              <li className="left"><Link to="/">검색하기</Link></li>
              <li className="right">
                <ul className="clearfix">
                  <li className="left login"><Link to="/login">로그인</Link></li>
                  <li className="left logout"><Link to="/login">로그아웃</Link></li>
                  <li className="left"><Link to="/">공지사항</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <footer id="footer">
        <div id="footerInner" className="area">
          여기는 Footer 영역 입니다.
        </div>
      </footer>
    </div>
  );
}

export default App;
// 라우팅 처리 모듈 설치 필요 : 터미널 창에 npm install react-router-dom@6
// 메뉴 클릭 시 페이지 변경 : Link 에 입력되어 있는 똑같은 경로의 route를 찾아서 element들을 보여준다.
