import React, { useState } from "react";
import BulletinEntry from "./BulletinEntry";
import styles from "./BulletinBoard.module.css";
import { v4 as uuidv4 } from "uuid"; // Use if needed

function BulletinBoard({ entries, setEntries }) {
  var visibleEntries = [...entries];
  while (visibleEntries.length < 9) {
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
        <BulletinEntry
          className={styles.titleRow}
          number="No."
          department="Department"
          title="Title"
          admin="Admin"
          date="Date"
          isTitle={true}
        />
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
          />
        );
      })}
    </div>
  );
}

export default BulletinBoard;
