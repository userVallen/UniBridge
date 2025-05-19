import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
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
      <Card className={styles.navigationContainer}>
        <Button
          variant="link"
          className={styles.navigateButton}
          onClick={onClickPrev}
          aria-label="Previous month"
        >
          <NavigateBefore />
        </Button>
        <p
          className={`m-0 ${styles.timeLabel}`}
        >{`${currentMonth} ${currentYear}`}</p>
        <Button
          variant="link"
          className={styles.navigateButton}
          onClick={onClickNext}
          aria-label="Next month"
        >
          <NavigateNext />
        </Button>
      </Card>
      <hr className={styles.hrWrapper} />
    </>
  );
}

export default Navigation;
