import { Form } from "react-bootstrap";
import styles from "./SurveyForm.module.css";

function SurveyBox(props) {
  return (
    <Form.Group className={styles.formSubcontainer}>
      <Form.Label htmlFor="">{props.label}</Form.Label>

      {props.options.map((option) => {
        return (
          <>
            <Form.Check
              className={styles.checkboxInput}
              type="checkbox"
              label={option}
              name={props.label}
              value={option}
              onChange={props.onCheck}
            />
          </>
        );
      })}
    </Form.Group>
  );
}

export default SurveyBox;
