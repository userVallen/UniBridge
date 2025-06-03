import { useTranslation } from "react-i18next";
import { monthList, dayList } from "../../constants/stylesMap";
import { majorColorClassMap, majorList } from "../../constants/stylesMap";
import styles from "./DayDetails.module.css";

function DayDetails({ date, events }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = t(`calendar.${monthList[formattedDate.getMonth()]}`);
  const d = formattedDate.getDate();
  const day = t(`calendar.${dayList[formattedDate.getDay()]}`);

  const formatMonthYear = () => {
    if (currentLang === "en") {
      return `${day}, ${month} ${d}, ${year}`;
    } else if (currentLang === "ko") {
      return `${year}년 ${month} ${d}일 (${day})`;
    } else return "lang undetected";
  };

  return (
    <div className={styles.dayEventContainer}>
      <p className={styles.date}>{formatMonthYear()}</p>

      {events.map((event) => {
        var eventTime = "All-day";
        if (event.start !== undefined) {
          const eventStart = event.start.slice(11, 16);
          eventTime = eventStart;
        }
        if (event.end !== undefined) {
          const eventEnd = event.end.slice(11, 16);
          eventTime = `${eventTime} ~ ${eventEnd}`;
        }
        return (
          <div
            className={styles.eventCard}
            style={{
              backgroundColor: `${majorColorClassMap[`${event.major}`].background}`,
            }}
          >
            <div className={styles.timeContainer}>{eventTime}</div>
            <div className={styles.eventContainer}>
              <div className={styles.placeContainer}>{event.place}</div>
              <div className={styles.titleContainer}>{event.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DayDetails;
