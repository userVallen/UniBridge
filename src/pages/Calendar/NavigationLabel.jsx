import { useTranslation } from "react-i18next";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "./NavigationLabel.module.css";

function NavigationLabel({
  startDate,
  onClickToday,
  onClickRight,
  onClickLeft,
}) {
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
    <div className={styles.labelContainer}>
      <p className={styles.timeLabel}>{formatMonthYear()}</p>

      <div className={styles.buttonContainer}>
        <button className={styles.todayButton} onClick={onClickToday}>
          {t("calendar.today")}
        </button>
        <button className={styles.navigateButton} onClick={onClickLeft}>
          <NavigateBeforeIcon sx={{ color: "#000000" }} />
        </button>
        <button className={styles.navigateButton} onClick={onClickRight}>
          <NavigateNextIcon sx={{ color: "#000000" }} />
        </button>
      </div>
    </div>
  );
}

export default NavigationLabel;
