import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "./NavigationLabel.module.css";

function NavigationLabel({ startDate, onClickRight, onClickLeft }) {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthList[startDate.getMonth()];
  const currentYear = startDate.getFullYear();

  return (
    <div className={styles.labelContainer}>
      <p className={styles.timeLabel}>{`${currentMonth} ${currentYear}`}</p>

      <div className={styles.buttonContainer}>
        <button className={styles.navigateButton} onClick={onClickLeft}>
          <NavigateBeforeIcon />
        </button>
        <button className={styles.navigateButton} onClick={onClickRight}>
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
}

export default NavigationLabel;
