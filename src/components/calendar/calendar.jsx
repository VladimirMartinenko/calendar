import React, { useState } from "react";
import styles from '../../style.module.scss'
import AddDate from "../addDate/addDate";
import AddDayWeek from "../addDateWeek/addDayWeek";
import DayIsClick from "../dayIsClick/dayIsClick";
import {
  format,
  endOfWeek,
  startOfWeek,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
} from "date-fns";

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

  return (
    <div className={styles.containerRoot}>
      <div className={styles.container}>
        <DayIsClick clickData={clickData} />
        <div className={styles.containerTable}>
          <h3 className={styles.monthStyle}>{format(data, "MMMM y")}</h3>
          <table>
            <AddDayWeek arrWeek={arrWeek} />
            <AddDate
              arrMonth={arrMonth}
              data={data}
              clickData={clickData}
              setClickData={setClickData}
            />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
