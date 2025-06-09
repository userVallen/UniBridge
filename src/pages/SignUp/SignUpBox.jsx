import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import VerificationModal from "./VerificationModal";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./SignUpForm.module.css";

function SignUpBox(props) {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Form.Group>
      <Form.Label htmlFor="" className={sharedStyles.formLabel}>
        {props.label}
      </Form.Label>

      {props.answerType === "text" && (
        <div className={styles.inputWithButtonWrapper}>
          {props.requireVerification ? (
            <InputGroup
              className={`${sharedStyles.inputWrapper} ${styles.inputWrapper}`}
            >
              <FormControl
                type="text"
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required
              />
              <button
                className={styles.verifyButton}
                type="button"
                onClick={() => setIsModalOpen(true)}
                style={{ whiteSpace: "nowrap" }}
              >
                {t("signup.verify")}
              </button>

              {isModalOpen && (
                <VerificationModal
                  onChange={props.onChange}
                  onClose={() => setIsModalOpen(false)}
                  enteredEmail={props.value}
                />
              )}
            </InputGroup>
          ) : (
            <Form.Control
              className={`${sharedStyles.inputWrapper} ${styles.inputWrapper}`}
              type="text"
              placeholder={props.placeholder}
              name={props.name}
              value={props.value}
              onChange={props.onChange}
              required
            />
          )}
        </div>
      )}

      {props.answerType === "select" && (
        <Form.Select
          className={`${sharedStyles.selectWrapper} ${styles.selectWrapper}`}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          required
        >
          <option value="" disabled selected></option>
          {props.options.map((currentOption) => {
            return (
              <option value={currentOption.value}>{currentOption.title}</option>
            );
          })}
        </Form.Select>
      )}
    </Form.Group>
  );
}

export default SignUpBox;
