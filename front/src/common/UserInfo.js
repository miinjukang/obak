import React from "react";

import './Login.css';

export const UserInfo = () => {
    return (
        <section id="content">
            <div className="area">
                <div id="UserInfoBox" className="common-box">
                <p className="login-tit">UserInfo</p>
                    <table class="user-info-tbl table">
                        <tr class="user-info-row">
                        <th>아이디</th>
                        <td>
                            <input type="text" name="id" value="ID" disabled className="disabled" />
                        </td>
                        </tr>
                        <tr class="user-info-row">
                        <th>이메일</th>
                        <td>
                            <input type="text" name="email" value="이메일@naver.com" disabled className="disabled"  />
                        </td>
                        </tr>
                        <tr class="user-info-row">
                        <th>이름</th>
                        <td>
                            <input type="text" name="name" value="홍길동" disabled className="disabled"  />
                        </td>
                        </tr>
                        <tr class="user-info-row">
                        <th>닉네임</th>
                        <td>
                            <input type="text" name="nickname" value="" />
                        </td>
                        </tr>
                        <tr class="user-info-row">
                        <th>계정 유지 기간</th>
                        <td class="clearfix">
                            <input
                            type="radio"
                            name="chk_info"
                            id="3year"
                            value="0"
                            checked="checked"
                            />
                            <label for="3year">3년</label>
                            <input type="radio" name="chk_info" id="always" value="1" />
                            <label for="always">항상</label>
                        </td>
                        </tr>
                    </table>
                    <button class="btn-save">저장</button>
                </div>
            </div>
        </section>
    );
};

export default UserInfo;