import React, { useState } from "react";
import "./style.css";
// import AddDate from "./addDate";
import {
  format,
  endOfWeek,
  startOfWeek,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isSameDay
} from "date-fns";
 import cx from "classnames";

const Calendar = () => {
  const [data, setData] = useState(new Date());
  const [clickData, setClickData] = useState(new Date());
  let startWeek = startOfWeek(data);
  let endWeek = endOfWeek(data);
  let arrWeek = eachDayOfInterval({
    start: startWeek,
    end: endWeek,
  });

  let firstDayMonth = startOfMonth(data);
  let firstDayWeek = startOfWeek(firstDayMonth);
  let endMonth = endOfMonth(data);
  let arrMonth = eachDayOfInterval({
    start: firstDayWeek,
    end: endMonth,
  });

  const week1 = arrMonth.slice(0, 7);
  const week2 = arrMonth.slice(7, 14);
  const week3 = arrMonth.slice(14, 21);
  const week4 = arrMonth.slice(21, 28);
  const week5 = arrMonth.slice(28, 35);
  const week6 = arrMonth.slice(35, 40);

  const weekInterval1 = week1.map((i) => (<td key={i} className={cx("data",{"isMonthFalse":!isSameMonth(data,i),"clickStyle":isSameDay(i,clickData)})} onClick={() => {setClickData(i)}}>{format(i, "d")}</td>));
  const weekInterval2 = week2.map((i) => (<td key={i} className={cx("data",{"isMonthFalse":!isSameMonth(data,i),"clickStyle":isSameDay(i,clickData)})} onClick={() => {setClickData(i)}}>{format(i, "d")}</td>));
  const weekInterval3 = week3.map((i) => (<td key={i} className={cx("data",{"isMonthFalse":!isSameMonth(data,i),"clickStyle":isSameDay(i,clickData)})} onClick={() => {setClickData(i)}}>{format(i, "d")}</td>));
  const weekInterval4 = week4.map((i) => (<td key={i} className={cx("data",{"isMonthFalse":!isSameMonth(data,i),"clickStyle":isSameDay(i,clickData)})} onClick={() => {setClickData(i)}}>{format(i, "d")}</td>));
  const weekInterval5 = week5.map((i) => (<td key={i} className={cx("data",{"isMonthFalse":!isSameMonth(data,i),"clickStyle":isSameDay(i,clickData)})} onClick={() => {setClickData(i)}}>{format(i, "d")}</td>));
  const weekInterval6 = week6.map((i) => (<td key={i} className={cx("data",{"isMonthFalse":!isSameMonth(data,i),"clickStyle":isSameDay(i,clickData)})} onClick={() => {setClickData(i)}}>{format(i, "d")}</td>));

  const dayWeek = arrWeek.map((i) => <td key={i} className="week">{format(i, "ccccc")}</td>);
  return (
    <div className="containerRoot">
      <div className="container">
        <div className="containerData">
          <p className="dayOfWeekStyle">{format(clickData, "EEEE")}</p>
          <p className="dataStyle">{format(clickData, "d")}</p>
        </div>
        <div className="containerTable">
          <p className="monthStyle">{format(data, "MMMM y")}</p>
          <table>
            <thead>
              <tr>{dayWeek}</tr>
            </thead>
            <tbody>
              <tr>{weekInterval1}</tr>
              <tr>{weekInterval2}</tr>
              <tr>{weekInterval3}</tr>
              <tr>{weekInterval4}</tr>
              <tr>{weekInterval5}</tr>
              <tr>{weekInterval6}</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
