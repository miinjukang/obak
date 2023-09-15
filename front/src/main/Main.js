import React, { useState } from 'react';
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';

import './Main.css';

//달력 헤더(오늘 날짜, 달력 이동 버튼) 만들기
const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
    return (
        <div id="calHeader" className="clearfix">
            <div className="cal-title">
                <p className="text">
                    <span className="text month">{format(currentMonth, "M")}월</span>
                    {format(currentMonth, "yyyy")}
                </p>
            </div>
            <div className="cal-arrow">
                <HiArrowLeftCircle onClick={prevMonth} />
                <HiArrowRightCircle onClick={nextMonth} />
            </div>
        </div>
    );
};

//달력 Days 만들기
const RenderDays = () => {
    const days = [];
    const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];
  
    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="cal-col" key={i}>
            {date[i]}
            </div>
        );
    }
  
    return <div className="cal-days clearfix">{days}</div>;
};

//달력 Body(cells) 만들기
const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
  
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
  
    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, "d");
            const cloneDay = day;
            days.push(
            <div
                className={`col cell ${
                !isSameMonth(day, monthStart)
                    ? "disabled"
                    : isSameDay(day, selectedDate)
                    ? "selected"
                    : format(currentMonth, "M") !== format(day, "M")
                    ? "not-valid"
                    : "valid"
                }`}
                key={day}
                //onClick={() => onDateClick(parse(cloneDay))}
            >
                <span
                className={
                    format(currentMonth, "M") !== format(day, "M")
                    ? "text not-valid"
                    : ""
                }
                >
                {formattedDate}
                </span>
            </div>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="cal-row clearfix" key={day}>
            {days}
            </div>
        );
        days = [];
    }
    return <div className="calendarBody">{rows}</div>;
};

const Main = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const onDateClick = (day) => {
        setSelectedDate(day);
    };

    return (
        <section id="content">
            <div className="area">
                <div id="contentInner" className="clearfix">
                    <h2 className="sub-title">전시회 일정</h2>
                    <p className="today-exhibition">오늘의 전시 : <span>3</span>개</p>
                </div>
                <div id="calendarBox">
                    <RenderHeader
                        currentMonth={currentMonth}
                        prevMonth={prevMonth}
                        nextMonth={nextMonth}
                    />
                    <RenderDays />
                    <RenderCells
                        currentMonth={currentMonth}
                        selectedDate={selectedDate}
                        onDateClick={onDateClick}
                    />
                </div>
                <div id="calenderList">
                    <table class="calender-tbl table">
                        <thead>
                            <th>No</th>
                            <th>전시명</th>
                            <th>위치</th>
                            <th>시작/종료일</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='no'>1</td>
                                <td className='tit'><a href=''>첫번째 전시회</a></td>
                                <td className='location'>예술의 전당</td>
                                <td className='period'>2023/08/01 ~ 2023/09/01</td>
                            </tr>
                            <tr>
                                <td className='no'>2</td>
                                <td className='tit'><a href=''>두번째 전시회</a></td>
                                <td className='location'>DDP</td>
                                <td className='period'>2023/08/01 ~ 2023/09/01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Main;