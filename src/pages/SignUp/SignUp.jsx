import React, { useState } from "react";
import { Container } from "react-bootstrap";
import sharedStyles from "../../styles/AuthPage.module.css";
import SignUpForm from "./SignUpForm";
import SurveyForm from "./SurveyForm";

function SignUp() {
  const [step, setStep] = useState("signup");

  function handleClick() {
    setStep("survey");
  }

  return (
    <Container className={sharedStyles.app}>
      <Container className={sharedStyles.window}>
        <h1 className={sharedStyles.title}>Sign Up</h1>
        <p>Enter your details below to create your account</p>

        {step === "signup" && <SignUpForm onClick={handleClick} />}
        {step === "survey" && <SurveyForm />}

        <p className={sharedStyles.alternatePrompt}>
          Already have an account?
          <span style={{ margin: "5px" }}>
            <a className={sharedStyles.anchorWrapper} href="/login">
              Login
            </a>
          </span>
        </p>
      </Container>
    </Container>
  );
}

export default SignUp;
