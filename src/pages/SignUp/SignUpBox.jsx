import React from "react";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./SignUpForm.module.css";

function SignUpBox(props) {
  return (
    <form className={sharedStyles.formWrapper} action="">
      <label htmlFor="">{props.label}</label>

      {props.answerType === "text" && (
        <input
          className={`${sharedStyles.inputWrapper} ${styles.inputWrapper}`}
          type="text"
          placeholder={props.placeholder}
          required
        />
      )}

      {props.answerType === "select" && (
        <select
          className={sharedStyles.selectWrapper}
          name={props.name}
          id={props.id}
          required
        >
          <option value="" disabled selected></option>
          {props.options.map((currentOption) => {
            return (
              <option value={currentOption.value}>{currentOption.title}</option>
            );
          })}
        </select>
      )}
    </form>
  );
}

export default SignUpBox;
