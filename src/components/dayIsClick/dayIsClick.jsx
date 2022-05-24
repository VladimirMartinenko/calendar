import React from 'react';
import { format } from 'date-fns/esm';
import styles from '../../style.module.scss'

const DayIsClick = (props) => {
const {clickData}=props
  return (
        <div className={styles.containerData}>
          <h3 className={styles.dayOfWeekStyle}>{format(clickData, "EEEE")}</h3>
          <h3 className={styles.dataStyle}>{format(clickData, "d")}</h3>
        </div>
  );
}

export default DayIsClick;
