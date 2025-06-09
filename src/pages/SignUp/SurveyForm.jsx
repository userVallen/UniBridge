import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../api/signupApi";
import { Form } from "react-bootstrap";
import SurveyBox from "./SurveyBox";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./SurveyForm.module.css";
import { format } from "prettier";

function SurveyForm({ formData, setFormData }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function toCamelCase(str) {
    return str
      .toLowerCase()
      .replace(/[\s_]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ""));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckboxChange(e) {
    const name = toCamelCase(e.target.name);
    const value = e.target.value;
    const checked = e.target.checked;

    setFormData((prev) => {
      const prevArray = prev[name] || [];
      const newArray = checked
        ? [...prevArray, value]
        : prevArray.filter((item) => item !== value);

      return {
        ...prev,
        [name]: newArray,
      };
    });
  }

  async function handleSignUp(e) {
    e.preventDefault();
    console.log("Submitted data");
    console.log(formData);
    try {
      const data = await signUpUser(formData);
      console.log("Sign up successful:", data);
      // TODO: save token or navigate to another page
      navigate("/home");
    } catch (err) {
      console.error("Sign up failed:", err);
      // Optionally show error message to user
    }
  }

  return (
    <>
      <div>
        <Form className={styles.formWrapper} onSubmit={handleSignUp}>
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
            value={formData.interest}
            onChange={handleChange}
            onCheck={handleCheckboxChange}
            setFormData={setFormData}
          />
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
            value={formData.language}
            onChange={handleChange}
            onCheck={handleCheckboxChange}
            setFormData={setFormData}
          />
          <SurveyBox
            label={t("signup.purpose.title")}
            options={[
              t("signup.purpose.option1"),
              t("signup.purpose.option2"),
              t("signup.purpose.option3"),
            ]}
            name="email"
            value={formData.purpose}
            onChange={handleChange}
            onCheck={handleCheckboxChange}
            setFormData={setFormData}
          />
          <SurveyBox
            label={t("signup.matchingType.title")}
            options={["1:1"]}
            name="matchingType"
            value={formData.matchingType}
            onChange={handleChange}
            onCheck={handleCheckboxChange}
            setFormData={setFormData}
          />
        </Form>
      </div>
      <button className={sharedStyles.submitButton} onClick={handleSignUp}>
        {t("signup.submit")}
      </button>
    </>
  );
}

export default SurveyForm;
