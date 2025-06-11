import { useTranslation } from "react-i18next";
import { Form } from "react-bootstrap";
import styles from "./SurveyForm.module.css";

function SurveyBox(props) {
  const { t } = useTranslation();

  return (
    <Form.Group className={styles.formSubcontainer}>
      <Form.Label htmlFor="">{props.label}</Form.Label>

      {props.options.map((option, index) => {
        return (
          <Form.Check
            key={index}
            className={styles.checkboxInput}
            type="checkbox"
            label={option}
            name={props.name}
            value={option}
            onChange={props.onCheck}
          />
        );
      })}
    </Form.Group>
  );
}

export default SurveyBox;
