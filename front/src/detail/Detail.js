import { useEffect, useState } from "react";
import HeartButton from "./Heart";

const Detail = () => {

    const [like, setLike] = useState(false);


    return (
        <div>
            {/* <div id="preloder">
                <div className="loader"></div>
            </div> */}

            <div className="offcanvas-menu-overlay"></div>

            <div className="breadcrumb-option set-bg" style={{backgroundImage:'url(img/breadcrumb-bg.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text" style={{color: 'white'}}>
                                <h3>오늘의 박람회</h3>
                                {/* 하진테스트 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="rooms spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 p-0 order-lg-3 order-md-3 col-md-6">
                            <div className="room__pic__slider owl-carousel">
                                <div className="room__pic__item set-bg" style={{backgroundImage:"url(img/전시회썸네일.jpeg)", position: 'relative'}}></div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0 order-lg-4 order-md-4 col-md-6">
                            <div className="room__text right__text">
                                <h3>바람장미</h3>
                                <ul style={{textAlign: 'left'}}>
                                    <li><span style={{width: '20%'}}>기간 : </span><span style={{width: '80%'}}>화 ~ 토 10:00~18:00 / 일,월 휴관</span></li>
                                    <li><span style={{width: '20%'}}>위치 : </span><span style={{width: '80%'}}>두산갤러리 뉴욕, 533 W 25th Street, New York, NY 10001</span></li>
                                    <li><span style={{width: '20%'}}>가격 : </span><span style={{width: '80%'}}>무료관람</span></li>
                                    <li><span style={{width: '20%'}}>URL : </span><span style={{width: '80%'}}><a href="https://www.doosanartcenter.com/ko/exhibit/1470" target="_blank">doosanartcenter.com/ko/exhibit/1470</a></span></li>
                                </ul>
                            </div>
                            {/* <HeartButton like={like} onClick={toggleLike}/> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="rooms">
                <div className="container">
                    <div style={{width: '100%'}}>
                        <div className="room__text">
                            <h3>전시 정보 상세</h3>
                        </div>
                        {/* <HeartButton like={like} onClick={toggleLike}/> */}
                    </div>
                </div>
            </section>
            
            <section className="rooms">
                <div className="container">
                    <div style={{width: '100%'}}>
                        <div className="room__text">
                            <h3></h3>
                        </div>
                        {/* <HeartButton like={like} onClick={toggleLike}/> */}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Detail;