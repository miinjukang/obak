import React from "react";

import './Login.css';

export const Login = () => {
    return (
      <section id="content">
        <div className="area">
            <div id="LoginBox" className="common-box">
                <p className="login-tit">Login </p><a href="/UserInfo">UserInfo</a>
                <h2 className="login-btn naver">
                    <a href="" class="clearfix">
                        <span>네이버 로그인</span>
                    </a>
                </h2>
                <h2 className="login-btn kakao">
                    <a href="" class="clearfix">
                        <span>카카오톡 로그인</span>
                    </a>
                </h2>
                <h2 className="login-btn google">
                    <a href="" class="clearfix">
                        <span>Google 로그인</span>
                    </a>
                </h2>
                <h2 className="login-btn facebook">
                    <a href="" class="clearfix">
                        <span>Facebook 로그인</span>
                    </a>
                </h2>
            </div>
        </div>
      </section>
    );
  };

export default Login;