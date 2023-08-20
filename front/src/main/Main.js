import React from "react";

import './Main.css';

function Main() {
    return <section id="content">
                <div className="area">
                    <div id="contentInner" className="clearfix">
                        <h2 className="sub-title">전시회 일정</h2>
                        <p className="today-exhibition">오늘의 전시 : <span>3</span>개</p>
                    </div>
                    <div id="calendar">

                    </div>
                </div>
            </section>
    ;
}

export default Main;