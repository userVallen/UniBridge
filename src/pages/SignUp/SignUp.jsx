import React, { useState } from "react";
import sharedStyles from "../../styles/AuthPage.module.css";
import SignUpForm from "./SignUpForm";
import SurveyForm from "./SurveyForm";

function SignUp() {
  const [step, setStep] = useState("signup");

  function handleClick() {
    setStep("survey");
  }

  return (
    <div className={sharedStyles.app}>
      <div className={sharedStyles.window}>
        <div className={sharedStyles.contentContainer}>
          <h1>Sign Up</h1>
          <p>Enter your details below to create your account</p>

          {step === "signup" && <SignUpForm onClick={handleClick} />}
          {step === "survey" && <SurveyForm />}

          <p className={sharedStyles.alternatePrompt}>
            Already have an account?
            <span style={{ margin: "5px" }}>
              <a className={sharedStyles.anchorWrapper} href="#">
                Login
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
