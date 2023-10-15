import { Link } from "react-router-dom";

import headerStyles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5" style={{ width: "100%" }}>
              <div className={headerStyles.header__top__right}>
                <div className={headerStyles.header__top__auth}>
                  <ul>
                    <li>
                      <Link to="/">홈</Link>
                    </li>
                    <li>
                      <Link to="/login">로그인</Link>
                    </li>
                    <li>
                      <Link to="/notice">공지사항</Link>
                    </li>
                    <li>
                      <Link to="/detail">deatil (민진 테스트)</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
