import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./VerificationModal.module.css";

function VerificationModal({
  onChange,
  onSend,
  onVerify,
  onVerified,
  onClose,
  enteredEmail,
}) {
  const { t } = useTranslation();
  const [code, setCode] = useState("");

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function handleSendClick() {
    onSend(enteredEmail);
  }

  async function handleVerifyClick() {
    const result = await onVerify(enteredEmail, code);
    console.log(result.success);
    if (result.success) {
      onVerified();
      onClose();
      alert("Verified!");
    } else {
      alert("Verification failed.");
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <p>{t("signup.modal.title")}</p>
        </div>{" "}
        <Form.Group className={styles.modalBody}>
          <div>
            <Form.Label htmlFor="">{t("signup.email")}</Form.Label>
            <div className={styles.inputRow}>
              <Form.Control
                type="email"
                className={styles.inputWrapper}
                name="email"
                value={enteredEmail}
                onChange={onChange}
              />
              <Button
                className={styles.buttonWrapper}
                onClick={handleSendClick}
              >
                {t("signup.modal.sendCode")}
              </Button>
            </div>
          </div>

          <div>
            <Form.Label htmlFor="">{t("signup.modal.inputCode")}</Form.Label>
            <div className={styles.inputRow}>
              <Form.Control
                type="email"
                className={styles.inputWrapper}
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <Button
                className={styles.buttonWrapper}
                onClick={handleVerifyClick}
              >
                {t("signup.verify")}
              </Button>
            </div>
          </div>
        </Form.Group>
      </div>
    </div>
  );
}

export default VerificationModal;
