import { useTranslation } from "react-i18next";
import { Container, Form } from "react-bootstrap";
import SignUpBox from "./SignUpBox";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./SignUpForm.module.css";

function SignUpForm({ formData, setFormData, onClick }) {
  const { t } = useTranslation();

  function handleChange(e, section = "userInfo") {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  }

  function handleVerified() {
    console.log("handleVerified called");
    setFormData((prev) => ({
      ...prev,
      ["userInfo"]: { ...prev["userInfo"], isVerified: true },
    }));
  }

  function handleNextStep(e) {
    e.preventDefault();

    console.log(formData);

    if (
      !formData.userInfo.email ||
      !formData.userInfo.password ||
      !formData.userInfo.confirmPassword ||
      !formData.userInfo.name ||
      !formData.userInfo.studentId ||
      !formData.userInfo.major ||
      !formData.userInfo.studentType
    ) {
      alert("Please fill out all of the required fields");
      return;
    }

    if (formData.userInfo.password !== formData.userInfo.confirmPassword) {
      alert("Please check your password confirmation");
      return;
    }

    if (!formData.userInfo.isVerified) {
      alert("Please verify your email");
      return;
    }

    // Pass data to next page
    onClick(formData);
  }

  return (
    <>
      <Form className={styles.formWrapper} onSubmit={handleNextStep}>
        <Container className={styles.formContainer}>
          <div className={styles.contentRow}>
            <div className={styles.formSubcontainer}>
              <SignUpBox
                label={`*${t("signup.email")}`}
                answerType="text"
                placeholder="abc@dankook.ac.kr"
                name="email"
                value={formData.userInfo.email}
                onChange={(e) => {
                  handleChange(e, "userInfo");
                  handleChange(e, "buddyInfo");
                }}
                onVerified={handleVerified}
                requireVerification
              />
              <SignUpBox
                label={`*${t("signup.password")}`}
                answerType="text"
                placeholder={`*${t("signup.placeholder")}`}
                name="password"
                value={formData.userInfo.password}
                onChange={(e) => handleChange(e, "userInfo")}
                noAutoFill
                hideOption
              />
              <SignUpBox
                label={`*${t("signup.confirmPassword")}`}
                answerType="text"
                name="confirmPassword"
                value={formData.userInfo.confirmPassword}
                onChange={(e) => handleChange(e, "userInfo")}
                noAutoFill
                hideOption
              />
            </div>

            <div className={styles.formSubcontainer}>
              <SignUpBox
                label={`*${t("signup.name")}`}
                answerType="text"
                name="name"
                value={formData.userInfo.name}
                onChange={(e) => handleChange(e, "userInfo")}
              />
              <SignUpBox
                label={`*${t("signup.studentId")}`}
                answerType="text"
                name="studentId"
                value={formData.userInfo.studentId}
                onChange={(e) => handleChange(e, "userInfo")}
              />
              <SignUpBox
                label={`*${t("signup.major")}`}
                answerType="select"
                name="major"
                id="major"
                options={[
                  {
                    title: t("filter.Mobile Systems Engineering"),
                    value: "MSE",
                  },
                  {
                    title: t("filter.International Business Administration"),
                    value: "IBA",
                  },
                  {
                    title: t("filter.Bio and Material Engineering"),
                    value: "BME",
                  },
                  { title: t("filter.Korea Studies"), value: "KST" },
                  {
                    title: t("filter.Acting & Filmmaking"),
                    value: "AFM",
                  },
                  {
                    title: t("filter.Global Core Education"),
                    value: "GCE",
                  },
                ]}
                value={formData.userInfo.major}
                onChange={(e) => handleChange(e, "userInfo")}
              />
            </div>
          </div>
        </Container>

        <Form.Group className={styles.studentTypeContainer}>
          <Form.Check
            type="radio"
            id="student-type-1"
            name="studentType"
            label={t("signup.studentType.option1")}
            value="Korean"
            checked={formData.userInfo.studentType === "Korean"}
            onChange={(e) => handleChange(e, "userInfo")}
          ></Form.Check>
          <Form.Check
            type="radio"
            id="student-type-2"
            name="studentType"
            label={t("signup.studentType.option2")}
            value="International"
            checked={formData.userInfo.studentType === "International"}
            onChange={(e) => handleChange(e, "userInfo")}
          ></Form.Check>
        </Form.Group>

        <Container>
          <button
            type="submit"
            className={sharedStyles.submitButton}
            style={{ width: "22em" }}
          >
            {t("signup.nextPage")}
          </button>
        </Container>
      </Form>
    </>
  );
}

export default SignUpForm;
