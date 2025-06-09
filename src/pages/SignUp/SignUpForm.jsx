import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Form } from "react-bootstrap";
import SignUpBox from "./SignUpBox";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./SignUpForm.module.css";

function SignUpForm({ onClick }) {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    studentId: "",
    major: "",
    studentType: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleNextStep(e) {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.name ||
      !formData.studentId ||
      !formData.major ||
      !formData.studentType
    ) {
      alert("Please fill out all of the required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Please check your password confirmation");
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
                value={formData.email}
                onChange={handleChange}
                requireVerification
              />
              <SignUpBox
                label={`*${t("signup.password")}`}
                answerType="text"
                placeholder={`*${t("signup.placeholder")}`}
                name="password"
                value={formData.password}
                onChange={handleChange}
                noAutoFill
              />
              <SignUpBox
                label={`*${t("signup.confirmPassword")}`}
                answerType="text"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                noAutoFill
              />
            </div>

            <div className={styles.formSubcontainer}>
              <SignUpBox
                label={`*${t("signup.name")}`}
                answerType="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <SignUpBox
                label={`*${t("signup.studentId")}`}
                answerType="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
              />
              <SignUpBox
                label={`*${t("signup.major")}`}
                answerType="select"
                name="major"
                id="major"
                options={[
                  {
                    title: t("filter.Mobile Systems Engineering"),
                    value: "Major1",
                  },
                  {
                    title: t("filter.International Business Administration"),
                    value: "Major2",
                  },
                  {
                    title: t("filter.Bio and Material Engineering"),
                    value: "Major3",
                  },
                  { title: t("filter.Korea Studies"), value: "Major3" },
                  { title: t("filter.Acting & Filmmaking"), value: "Major3" },
                  { title: t("filter.Global Core Education"), value: "Major3" },
                ]}
                value={formData.major}
                onChange={handleChange}
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
            value="type1"
            checked={formData.studentType === "type1"}
            onChange={handleChange}
          ></Form.Check>
          <Form.Check
            type="radio"
            id="student-type-2"
            name="studentType"
            label={t("signup.studentType.option2")}
            value="type2"
            checked={formData.studentType === "type2"}
            onChange={handleChange}
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
