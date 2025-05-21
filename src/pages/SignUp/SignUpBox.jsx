import React from "react";
import { Form } from "react-bootstrap";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./SignUpForm.module.css";

function SignUpBox(props) {
  return (
    <Form className={sharedStyles.formWrapper} action="">
      <Form.Group>
        <Form.Label htmlFor="" className={sharedStyles.formLabel}>
          {props.label}
        </Form.Label>

        {props.answerType === "text" && (
          <Form.Control
            className={`${sharedStyles.inputWrapper} ${styles.inputWrapper}`}
            type="text"
            placeholder={props.placeholder}
            required
          />
        )}

        {props.answerType === "select" && (
          <Form.Select
            className={`${sharedStyles.selectWrapper} ${styles.selectWrapper}`}
            name={props.name}
            id={props.id}
            required
          >
            <option value="" disabled selected></option>
            {props.options.map((currentOption) => {
              return (
                <option value={currentOption.value}>
                  {currentOption.title}
                </option>
              );
            })}
          </Form.Select>
        )}
      </Form.Group>
    </Form>
  );
}

export default SignUpBox;
