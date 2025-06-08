import { useTranslation } from "react-i18next";
import styles from "./BulletinEntry.module.css";

function BulletinEntry(props) {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.desktopView}>
        <div className={styles.entryContainer}>
          <div
            className={`${styles.entryNumber} ${props.isTitle && styles.emphasize}`}
          >
            {props.number}
          </div>
          <div
            className={`${styles.entryDepartment} ${props.isTitle && styles.emphasize}`}
          >
            {t(`filter.${props.department}`)}
          </div>
          <div
            className={`${styles.entryTitle} ${props.isTitle && styles.emphasize}`}
          >
            {props.title}
          </div>
          <div
            className={`${styles.entryAdmin} ${props.isTitle && styles.emphasize}`}
          >
            {props.community ? props.admin : t(`council.${props.admin}`)}
          </div>
          <div
            className={`${styles.entryDate} ${props.isTitle && styles.emphasize}`}
          >
            {props.date}
          </div>
        </div>
      </div>

      <div className={styles.mobileView}>
        <div className={styles.entryContainer}>
          <div className={styles.entryTitle}>{props.title}</div>
          <div>
            <div className={styles.entryDepartment}>
              {props.department && props.admin
                ? `${props.department} • ${props.admin}`
                : props.department || props.admin}
            </div>
          </div>
          <div className={styles.entryDate}>{props.date}</div>
        </div>
      </div>

      <hr
        className={styles.separator}
        style={
          props.isTitle && {
            height: "2px",
            backgroundColor: "black",
          }
        }
      />
    </>
  );
}

export default BulletinEntry;
