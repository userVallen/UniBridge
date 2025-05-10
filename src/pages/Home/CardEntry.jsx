import React from "react";
import styles from "./CardEntry.module.css";

function CardEntry(props) {
  return (
    <div className={styles.container}>
      <div className={styles.entryTitle}>{props.title}</div>
      <div className={styles.entryBody}>{props.date}</div>
      <div className={styles.entryBody}>{props.place}</div>
      <div className={styles.entryBody}>{props.subject}</div>
    </div>
  );
}

export default CardEntry;
