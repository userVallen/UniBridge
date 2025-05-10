import React from "react";
import styles from "./BulletinEntry.module.css";

function BulletinEntry(props) {
  return (
    <>
      <div className={styles.entryContainer}>
        <div className={styles.entryNumber}>{props.number}</div>
        <div className={styles.entryDepartment}>{props.department}</div>
        <div className={styles.entryTitle}>{props.title}</div>
        <div className={styles.entryAdmin}>{props.admin}</div>
        <div
          className={styles.entryDate}
          style={!props.isTitle ? { textTransform: "uppercase" } : null}
        >
          {props.date}
        </div>
      </div>
      <hr
        style={
          props.isTitle
            ? {
                border: "none",
                height: "2px",
                width: "100%",
                backgroundColor: "black",
              }
            : {
                border: "none",
                height: "1px",
                width: "100%",
                backgroundColor: "rgba(217, 217, 217, 1)",
              }
        }
      />
    </>
  );
}

export default BulletinEntry;
