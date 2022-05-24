import React from 'react';
import { format } from 'date-fns/esm';
import styles from '../../style.module.scss'
const AddDayWeek = (props) => {
  const {arrWeek}=props;

  const dayWeek = arrWeek.map((i) => <td key={i} className={styles.week}>{format(i, "ccccc")}</td>);
  return (
    <thead>
    <tr>{dayWeek}</tr>
  </thead>
  );
}

export default AddDayWeek;
