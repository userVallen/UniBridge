import React from "react";
import CardEntry from "./CardEntry";
import styles from "./CardWidget.module.css";

function CardWidget(props) {
  return (
    <div className={styles.card}>
      <a href={props.link}>
        <div className={styles.cardTop}>
          <img className={styles.cardIcon} src={props.img} alt={props.alt} />
          <p className={styles.cardTitle}>{props.title}</p>
        </div>
        <div className={styles.cardBottom}>
          {props.entries.map((currentEntry) => {
            return (
              <>
                <CardEntry
                  title={currentEntry.title}
                  date={currentEntry.date}
                  place={currentEntry.place}
                  subject={currentEntry.subject}
                />
              </>
            );
          })}
          {/* <CardEntry title="Event Title" date="1 May 2025" place="Room 102" /> */}
        </div>
      </a>
    </div>
  );
}

export default CardWidget;
