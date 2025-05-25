import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card } from "react-bootstrap";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import styles from "./Navigation.module.css";

function Navigation({ startDate, onClickNext, onClickPrev }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const monthList = [
    t("calendar.firstMonth"),
    t("calendar.secondMonth"),
    t("calendar.thirdMonth"),
    t("calendar.fourthMonth"),
    t("calendar.fifthMonth"),
    t("calendar.sixthMonth"),
    t("calendar.seventhMonth"),
    t("calendar.eighthMonth"),
    t("calendar.ninthMonth"),
    t("calendar.tenthMonth"),
    t("calendar.eleventhMonth"),
    t("calendar.twelfthMonth"),
  ];

  const currentMonth = monthList[startDate.getMonth()];
  const currentYear = startDate.getFullYear();

  const formatMonthYear = () => {
    if (currentLang === "en") {
      return `${currentMonth} ${currentYear}`;
    } else if (currentLang === "ko") {
      return `${currentYear}년 ${currentMonth}`;
    } else return "lang undetected";
  };

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
        <p className={`m-0 ${styles.timeLabel}`}>{formatMonthYear()}</p>
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
