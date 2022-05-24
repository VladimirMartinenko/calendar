import React from 'react';
import cx from "classnames";
import { isSameMonth,isSameDay,format } from "date-fns";
import styles from '../../style.module.scss'

const AddDate = (props) => {
  const {arrMonth,clickData,data,setClickData}=props

  const week1 = arrMonth.slice(0, 7);
  const week2 = arrMonth.slice(7, 14);
  const week3 = arrMonth.slice(14, 21);
  const week4 = arrMonth.slice(21, 28);
  const week5 = arrMonth.slice(28, 35);
  const week6 = arrMonth.slice(35, 40);

  const weekInterval1 = week1.map((i) => (<td key={i} className={cx([styles.data],{[styles.isMonthFalse]:!isSameMonth(data,i),[styles.clickStyle]:isSameDay(i,clickData)})} onClick={() => {setClickData(i)}}>{format(i, "d")}</td>));
  const weekInterval2 = week2.map((i) => (<td key={i} className={cx([styles.data],{[styles.isMonthFalse]:!isSameMonth(data,i),[styles.clickStyle]:isSameDay(i,clickData)})} onClick={() => {setClickData(i)}}>{format(i, "d")}</td>));
  const weekInterval3 = week3.map((i) => (<td key={i} className={cx([styles.data],{[styles.isMonthFalse]:!isSameMonth(data,i),[styles.clickStyle]:isSameDay(i,clickData)})} onClick={() => {setClickData(i)}}>{format(i, "d")}</td>));
  const weekInterval4 = week4.map((i) => (<td key={i} className={cx([styles.data],{[styles.isMonthFalse]:!isSameMonth(data,i),[styles.clickStyle]:isSameDay(i,clickData)})} onClick={() => {setClickData(i)}}>{format(i, "d")}</td>));
  const weekInterval5 = week5.map((i) => (<td key={i} className={cx([styles.data],{[styles.isMonthFalse]:!isSameMonth(data,i),[styles.clickStyle]:isSameDay(i,clickData)})} onClick={() => {setClickData(i)}}>{format(i, "d")}</td>));
  const weekInterval6 = week6.map((i) => (<td key={i} className={cx([styles.data],{[styles.isMonthFalse]:!isSameMonth(data,i),[styles.clickStyle]:isSameDay(i,clickData)})} onClick={() => {setClickData(i)}}>{format(i, "d")}</td>));

  
  return (
    
     <tbody>
       <tr>{weekInterval1}</tr>
       <tr>{weekInterval2}</tr>
       <tr>{weekInterval3}</tr>
       <tr>{weekInterval4}</tr>
       <tr>{weekInterval5}</tr>
       <tr>{weekInterval6}</tr>
       </tbody>  
    
  );
}

export default AddDate;
