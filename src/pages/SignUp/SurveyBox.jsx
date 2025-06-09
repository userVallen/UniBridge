import { Form } from "react-bootstrap";
import styles from "./SurveyForm.module.css";

function SurveyBox(props) {
  return (
    <Form.Group className={styles.formSubcontainer}>
      <Form.Label htmlFor="">{props.label}</Form.Label>

      {props.options.map((optionLabel) => {
        return (
          <>
            <Form.Check
              className={styles.checkboxInput}
              type="checkbox"
              label={optionLabel}
            />
          </>
        );
      })}
    </Form.Group>
  );
}

export default SurveyBox;
