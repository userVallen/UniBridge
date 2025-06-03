import { useTranslation } from "react-i18next";
import { Button, Card } from "react-bootstrap";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { monthList } from "../../constants/stylesMap";
import styles from "./Navigation.module.css";

function Navigation({ startDate, onClickNext, onClickPrev }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const currentMonth = t(`calendar.${monthList[startDate.getMonth()]}`);
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
