import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Form } from "react-bootstrap";
import { loginUser } from "../../api/loginApi";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "../../components/LanguageToggle";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./Login.module.css";

function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState("false");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      console.log("Login successful:", data);
      // TODO: save token or navigate to another page
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      // Optionally show error message to user
    }
  }

  return (
    <div className={sharedStyles.app}>
      <span style={{ display: "flex", alignItems: "center" }}>
        <LanguageToggle />
      </span>

      <Container className={sharedStyles.window}>
        <h1 className={sharedStyles.title}>{t("login.title")}</h1>
        <p className={sharedStyles.paragraphWrapper}>
          {t("login.instruction")}
        </p>

        <Form className={sharedStyles.formWrapper} onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label htmlFor="" className={sharedStyles.formLabel}>
              {t("login.email")}
            </Form.Label>
            <Form.Control
              className={sharedStyles.inputWrapper}
              type="text"
              placeholder="abc@dankook.ac.kr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <div className={sharedStyles.passwordLabel}>
              <Form.Label htmlFor="" className={sharedStyles.formLabel}>
                {t("login.password")}
              </Form.Label>
              <a
                href="#"
                className={`${styles.forgotPasswordPrompt} ${sharedStyles.anchorWrapper}`}
              >
                {t("login.forgot")}
              </a>
            </div>
            <Form.Control
              className={sharedStyles.inputWrapper}
              type={passwordVisibility ? "password" : "text"}
              id="userPassword"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
            />

            <Form.Check
              className={styles.showPasswordToggle}
              type="checkbox"
              label={t("login.show")}
              onChange={() => setPasswordVisibility((prev) => !prev)}
            />
          </Form.Group>

          <button className={sharedStyles.submitButton}>
            {t("login.submit")}
          </button>
        </Form>

        <p
          className={`${sharedStyles.alternatePrompt} ${sharedStyles.paragraphWrapper}`}
          style={{ color: "black" }}
        >
          {t("login.alternatePrompt")}
          <span style={{ margin: "5px" }}>
            <a href="/signup" className={sharedStyles.anchorWrapper}>
              {t("login.signup")}
            </a>
          </span>
        </p>
      </Container>
    </div>
  );
}

export default Login;
