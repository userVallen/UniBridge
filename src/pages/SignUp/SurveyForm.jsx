import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { submitUserInfo, submitBuddyInfo } from "../../api/signupApi";
import { Form, Container, Row, Col } from "react-bootstrap";
import SurveyBox from "./SurveyBox";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./SurveyForm.module.css";

function SurveyForm({ formData, setFormData }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // function toCamelCase(str) {
  //   return str
  //     .toLowerCase()
  //     .replace(/[\s_]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ""));
  // }

  function handleChange(e, section) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  }

  function handleCheckboxChange(e, section = "buddyInfo") {
    // const name = toCamelCase(e.target.name);
    const name = e.target.name;
    const value = e.target.value.toLowerCase();
    const checked = e.target.checked;
    console.log(`name: ${name}, value: ${value}, checked: ${checked}`);

    setFormData((prev) => {
      const prevArray = prev[section][name] || [];

      const newArray = checked
        ? [...prevArray, value]
        : prevArray.filter((item) => item !== value);

      return {
        ...prev,
        [section]: {
          ...prev[section],
          [name]: newArray,
        },
      };
    });
  }

  async function handleSignUp(e) {
    e.preventDefault();
    console.log("Submitted data");
    console.log(formData);

    try {
      const data = await submitUserInfo(formData.userInfo);
      console.log("userInfo submitted:", data);
      // TODO: save token or navigate to another page
    } catch (err) {
      console.error("Sign up failed:", err);
      // Optionally show error message to user
    }

    try {
      const data = await submitBuddyInfo(formData.buddyInfo);
      console.log("buddyInfo submitted:", data);
      // TODO: save token or navigate to another page
      console.log(
        "User and buddy information has been saved. Sign in successful"
      );
      navigate("/login");
    } catch (err) {
      console.error("Sign up failed:", err);
      // Optionally show error message to user
    }
  }

  return (
    <>
      <Container>
        <Form className={styles.formWrapper} onSubmit={handleSignUp}>
          <Row className={styles.formRow}>
            <Col className={styles.formColumn}>
              <Row className={styles.formRow}>
                <Col className={styles.formColumn}>
                  <SurveyBox
                    label={t("signup.interest.title")}
                    options={[
                      t("signup.interest.option1"),
                      t("signup.interest.option2"),
                      t("signup.interest.option3"),
                      t("signup.interest.option4"),
                      t("signup.interest.option5"),
                      t("signup.interest.option6"),
                      t("signup.interest.option7"),
                      t("signup.interest.option8"),
                    ]}
                    name="interest"
                    value={formData.buddyInfo.interest}
                    onChange={handleChange}
                    onCheck={(e) => {
                      handleCheckboxChange(e, "buddyInfo");
                    }}
                    setFormData={setFormData}
                  />
                </Col>
                <Col className={styles.formColumn}>
                  <SurveyBox
                    label={t("signup.language.title")}
                    options={[
                      t("signup.language.option1"),
                      t("signup.language.option2"),
                      t("signup.language.option3"),
                      t("signup.language.option4"),
                      t("signup.language.option5"),
                      t("signup.language.option6"),
                    ]}
                    name="language"
                    value={formData.buddyInfo.language}
                    onChange={handleChange}
                    onCheck={(e) => {
                      handleCheckboxChange(e, "buddyInfo");
                    }}
                    setFormData={setFormData}
                  />
                </Col>
              </Row>
            </Col>

            <Col className={styles.formColumn}>
              <Row className={styles.formRow}>
                <Col className={styles.formColumn}>
                  <SurveyBox
                    label={t("signup.purpose.title")}
                    options={[
                      t("signup.purpose.option1"),
                      t("signup.purpose.option2"),
                      t("signup.purpose.option3"),
                    ]}
                    name="purpose"
                    value={formData.buddyInfo.purpose}
                    onChange={handleChange}
                    onCheck={(e) => {
                      handleCheckboxChange(e, "buddyInfo");
                    }}
                    setFormData={setFormData}
                  />
                </Col>
                <Col className={styles.formColumn}>
                  <SurveyBox
                    label={t("signup.matchingType.title")}
                    options={["1:1"]}
                    name="matchingType"
                    value={formData.buddyInfo.matchingType}
                    onChange={handleChange}
                    onCheck={(e) => {
                      handleCheckboxChange(e, "buddyInfo");
                    }}
                    setFormData={setFormData}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
      <button className={sharedStyles.submitButton} onClick={handleSignUp}>
        {t("signup.submit")}
      </button>
    </>
  );
}

export default SurveyForm;
