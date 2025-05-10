import React from "react";
import SurveyBox from "./SurveyBox";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./SurveyForm.module.css";

function SurveyForm() {
  return (
    <>
      <div className={styles.formContainer}>
        <SurveyBox
          label={"Interest"}
          options={["Option 1", "Option 2", "Option 3", "Option 4"]}
        />
        <SurveyBox
          label={"Language"}
          options={["Option 1", "Option 2", "Option 3", "Option 4"]}
        />
        <SurveyBox
          label={"Purpose"}
          options={["Option 1", "Option 2", "Option 3", "Option 4"]}
        />
        <SurveyBox
          label={"Preferred Matching Method"}
          options={["Option 1", "Option 2", "Option 3", "Option 4"]}
        />
      </div>
      <button className={sharedStyles.submitButton}>Sign Up</button>
    </>
  );
}

export default SurveyForm;
