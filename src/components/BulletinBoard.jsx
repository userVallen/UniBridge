import { useTranslation } from "react-i18next";
import BulletinEntry from "./BulletinEntry";
import styles from "./BulletinBoard.module.css";
import { v4 as uuidv4 } from "uuid"; // Use if needed

function BulletinBoard({ community, notice, entries, setEntries }) {
  const { t } = useTranslation();

  var visibleEntries = [...entries];
  while (visibleEntries.length < 10) {
    visibleEntries.push({
      key: "",
      number: "",
      department: "",
      title: "",
      admin: "",
      date: "",
    });
  }

  return (
    <div className={styles.boardContainer}>
      <div className={styles.titleRow}>
        {community ? (
          <BulletinEntry
            className={styles.titleRow}
            number={t("bulletin.number")}
            department={t("bulletin.department")}
            title={t("bulletin.title")}
            admin={t("bulletin.name")}
            date={t("bulletin.date")}
            isTitle={true}
            community
          />
        ) : (
          <BulletinEntry
            className={styles.titleRow}
            number={t("bulletin.number")}
            department={t("bulletin.department")}
            title={t("bulletin.title")}
            admin={t("bulletin.council")}
            date={t("bulletin.date")}
            isTitle={true}
          />
        )}
      </div>

      {visibleEntries.map((entry, index) => {
        return (
          <BulletinEntry
            key={index}
            number={entry.number}
            department={entry.department}
            title={entry.title}
            admin={entry.admin}
            date={entry.date}
            community={entry.isCommunity && true}
          />
        );
      })}
    </div>
  );
}

export default BulletinBoard;
