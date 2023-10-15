import { useEffect, useState } from "react";
import HeartButton from "./Heart";
import Comments from "./Comments";

import detailStyles from "./Detail.module.css";

const Detail = () => {
  return (
    <div>
      <div className="offcanvas-menu-overlay"></div>

      <div
        className={`${detailStyles.breadcrumb_option} ${detailStyles.set_bg}`}
        style={{ backgroundImage: "url(img/breadcrumb-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className={detailStyles.breadcrumb__text}>
                <h3>오늘의 박람회</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={detailStyles.spad}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-0 order-lg-3 order-md-3 col-md-6">
              <div className={detailStyles.like_btn}>
                <HeartButton />
              </div>
              <div className={detailStyles.room__pic__slider}>
                <div
                  className={`${detailStyles.room__pic__item} ${detailStyles.set_bg}`}
                ></div>
              </div>
            </div>
            <div className="col-lg-6 p-0 order-lg-4 order-md-4 col-md-6">
              <div
                className={`${detailStyles.room__text} ${detailStyles.right__text}`}
              >
                <h3>바람장미</h3>
                <ul>
                  <li>
                    <span style={{ width: "20%" }}>기간 : </span>
                    <span style={{ width: "80%" }}>
                      화 ~ 토 10:00~18:00 / 일,월 휴관
                    </span>
                  </li>
                  <li>
                    <span style={{ width: "20%" }}>위치 : </span>
                    <span style={{ width: "80%" }}>
                      두산갤러리 뉴욕, 533 W 25th Street, New York, NY 10001
                    </span>
                  </li>
                  <li>
                    <span style={{ width: "20%" }}>가격 : </span>
                    <span style={{ width: "80%" }}>무료관람</span>
                  </li>
                  <li>
                    <span style={{ width: "20%" }}>URL : </span>
                    <span style={{ width: "80%" }}>
                      <a
                        href="https://www.doosanartcenter.com/ko/exhibit/1470"
                        target="_blank"
                      >
                        doosanartcenter.com/ko/exhibit/1470
                      </a>
                    </span>
                  </li>
                </ul>
                {/* <div className={detailStyles.like_btn}>
                  <HeartButton />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ width: "100%" }}>
            <div className={detailStyles.room__text}>
              <hr />
              <h2 style={{ height: "500px" }}>상세 설명 부분</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ width: "100%" }}>
            <div className={detailStyles.room__text}>
              <hr />
              <Comments />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
