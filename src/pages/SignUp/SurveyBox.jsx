import React from "react";
import styles from "./SurveyForm.module.css";

function SurveyBox(props) {
  return (
    <div className={styles.formSubcontainer}>
      <form className={styles.formWrapper} action="">
        <label htmlFor="">{props.label}</label>
        <br />
        <br />

        {props.options.map((optionLabel) => {
          return (
            <>
              {" "}
              <input className={styles.checkboxInput} type="checkbox" />
              <label htmlFor="">{optionLabel}</label>
              <br />{" "}
            </>
          );
        })}
      </form>
    </div>
  );
}

export default SurveyBox;
