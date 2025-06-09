import { useState } from "react";
import { useTranslation } from "react-i18next";
import { sendEmailCode, verifyEmailCode } from "../../api/signupApi";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import VerificationModal from "./VerificationModal";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./SignUpForm.module.css";

function SignUpBox(props) {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState("false");

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function conditionalRender() {
    if (props.answerType === "text") {
      if (props.requireVerification) {
        return (
          <div className={styles.inputWithButtonWrapper}>
            <InputGroup
              className={`${sharedStyles.inputWrapper} ${styles.inputWrapper}`}
              style={{ border: "none" }}
            >
              <FormControl
                className={`${sharedStyles.inputWrapper} ${styles.inputWrapper}`}
                type="text"
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                autoComplete={props.noAutoFill ? "off" : undefined}
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
                  onSend={sendEmailCode}
                  onVerify={verifyEmailCode}
                  onVerified={props.onVerified}
                  onClose={handleCloseModal}
                  enteredEmail={props.value}
                />
              )}
            </InputGroup>
          </div>
        );
      } else if (props.hideOption) {
        return (
          <Form.Group>
            <Form.Control
              className={`${sharedStyles.inputWrapper} ${styles.inputWrapper}`}
              type={passwordVisibility ? "password" : "text"}
              placeholder={props.placeholder}
              name={props.name}
              value={props.value}
              onChange={props.onChange}
              autoComplete={props.noAutoFill ? "off" : undefined}
              required
            />
            <Form.Check
              className={`${sharedStyles.showPasswordToggle} form-check`}
              type="checkbox"
              label={t("login.show")}
              onChange={() => setPasswordVisibility((prev) => !prev)}
            />
          </Form.Group>
        );
      } else {
        return (
          <Form.Control
            className={`${sharedStyles.inputWrapper} ${styles.inputWrapper}`}
            type="text"
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            autoComplete={props.noAutoFill ? "off" : undefined}
            required
          />
        );
      }
    }

    if (props.answerType === "select") {
      return (
        <Form.Select
          className={`${sharedStyles.selectWrapper} ${styles.selectWrapper}`}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          required
        >
          <option value="" disabled></option>
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </Form.Select>
      );
    }

    return null;
  }

  return (
    <Form.Group>
      <Form.Label htmlFor="" className={sharedStyles.formLabel}>
        {props.label}
      </Form.Label>
      {conditionalRender()}
    </Form.Group>
  );
}

export default SignUpBox;
