import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./VerificationModal.module.css";

function VerificationModal({ onChange, onClose, enteredEmail }) {
  const { t } = useTranslation();

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <p>{t("signup.modal.title")}</p>
        </div>
        <Form>
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
                <Button className={styles.buttonWrapper}>
                  {t("signup.modal.sendCode")}
                </Button>
              </div>
            </div>

            <div>
              <Form.Label htmlFor="">{t("signup.modal.inputCode")}</Form.Label>
              <div className={styles.inputRow}>
                <Form.Control type="email" className={styles.inputWrapper} />
                <Button className={styles.buttonWrapper}>
                  {t("signup.verify")}
                </Button>
              </div>
            </div>
          </Form.Group>
        </Form>

        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
}

export default VerificationModal;
