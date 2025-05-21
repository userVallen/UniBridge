import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SignUpBox from "./SignUpBox";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./SignUpForm.module.css";

function SignUpForm({ onClick }) {
  return (
    <>
      <Container className={styles.formContainer}>
        <div className={styles.contentRow}>
          <div className={styles.formSubcontainer}>
            <SignUpBox
              label="*Email"
              answerType="text"
              placeholder="abc@dankook.ac.kr"
            />
            <SignUpBox
              label="*Password"
              answerType="text"
              placeholder="Use upper/lowercase letters, numbers, and symbols"
            />
            <SignUpBox label="*Confirm Password" answerType="text" />
          </div>

          <div className={styles.formSubcontainer}>
            <SignUpBox label="*Name" answerType="text" />
            <SignUpBox label="*Student ID" answerType="text" />
            <SignUpBox
              label="*Major"
              answerType="select"
              name="major"
              id="major"
              options={[
                { title: "Major 1", value: "Major1" },
                { title: "Major 2", value: "Major2" },
                { title: "Major 3", value: "Major3" },
              ]}
            />
          </div>
        </div>
      </Container>

      <Container>
        <button
          className={sharedStyles.submitButton}
          onClick={onClick}
          style={{ width: "22em" }}
        >
          Next Page
        </button>
      </Container>
    </>
  );
}

export default SignUpForm;
