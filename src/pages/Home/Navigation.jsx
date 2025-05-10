import React, { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "./Navigation.module.css";

function Navigation({ startDate, onClickNext, onClickPrev }) {
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
    <>
      <div className={styles.navigationContainer}>
        <button className={styles.navigateButton} onClick={onClickPrev}>
          <NavigateBeforeIcon />
        </button>
        <p className={styles.timeLabel}>{`${currentMonth} ${currentYear}`}</p>
        <button className={styles.navigateButton} onClick={onClickNext}>
          <NavigateNextIcon />
        </button>
      </div>
      <hr className={styles.hrWrapper} />
    </>
  );
}

export default Navigation;
