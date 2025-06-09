import { useTranslation } from "react-i18next";
import { Form } from "react-bootstrap";
import SurveyBox from "./SurveyBox";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./SurveyForm.module.css";

function SurveyForm() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <Form className={styles.formWrapper} action="">
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
          />
          <SurveyBox
            label={t("signup.purpose.title")}
            options={[
              t("signup.purpose.option1"),
              t("signup.purpose.option2"),
              t("signup.purpose.option3"),
            ]}
          />
          <SurveyBox label={t("signup.method.title")} options={["1:1"]} />
        </Form>
      </div>
      <button className={sharedStyles.submitButton}>
        {t("signup.submit")}
      </button>
    </>
  );
}

export default SurveyForm;
