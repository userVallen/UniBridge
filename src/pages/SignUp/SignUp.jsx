import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import sharedStyles from "../../styles/AuthPage.module.css";
import SignUpForm from "./SignUpForm";
import SurveyForm from "./SurveyForm";
import LanguageToggle from "../../components/LanguageToggle";

function SignUp() {
  const { t } = useTranslation();
  const [step, setStep] = useState("signup");
  const [formData, setFormData] = useState({
    email: "",
    isVerified: false,
    password: "",
    confirmPassword: "",
    name: "",
    studentId: "",
    major: "",
    studentType: "",
    interest: [],
    language: [],
    purpose: [],
    matchingType: [],
  });

  function handleClick() {
    setStep("survey");
  }

  return (
    <Container className={sharedStyles.app}>
      <span style={{ display: "flex", alignItems: "center" }}>
        <LanguageToggle />
      </span>

      <Container className={sharedStyles.window}>
        <h1 className={sharedStyles.title}>{t("signup.title")}</h1>
        <p>{t("signup.instruction")}</p>

        {step === "signup" && (
          <SignUpForm
            formData={formData}
            setFormData={setFormData}
            onClick={handleClick}
          />
        )}
        {step === "survey" && (
          <SurveyForm
            formData={formData}
            setFormData={setFormData}
            // onSubmit={handleSignUp}
          />
        )}

        <p className={sharedStyles.alternatePrompt}>
          {t("signup.alternatePrompt")}
          <span style={{ margin: "5px" }}>
            <a className={sharedStyles.anchorWrapper} href="/login">
              {t("signup.login")}
            </a>
          </span>
        </p>
      </Container>
    </Container>
  );
}

export default SignUp;
