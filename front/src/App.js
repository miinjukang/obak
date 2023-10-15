import React from "react";
import { Routes, Route } from "react-router-dom";
/* import logo from './logo.svg'; */
import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import Login from "./common/Login";
import Notice from "./notice/Notice";
import Detail from "./detail/Detail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/notice" exact element={<Notice />} />
        <Route path="/detail" exact element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// 라우팅 처리 모듈 설치 필요 : 터미널 창에 npm install react-router-dom@6
// 메뉴 클릭 시 페이지 변경 : Link 에 입력되어 있는 똑같은 경로의 route를 찾아서 element들을 보여준다.
