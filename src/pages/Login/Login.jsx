import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { loginUser } from "../../api/loginApi";
import { useNavigate } from "react-router-dom";
// import { tokenManager } from "../../utils/tokenManager";
import LanguageToggle from "../../components/LanguageToggle";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./Login.module.css";

function Login() {
  const { t } = useTranslation();
  // const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState("false");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      console.log("Login successful:", data);

      // // Store tokens and fetch profile via AuthContext
      // await login({
      //   accessToken: data.access,
      //   refreshToken: data.refresh,
      // });

      console.log("this is from handleLogin, data is:", data);

      // // Save access and refresh tokens
      // tokenManager.setTokens({
      //   accessToken: data.access,
      //   refreshToken: data.refresh,
      // });

      // Redirect to home page
      navigate("/home");
    } catch (err) {
      console.error("Login failed:", err);
      // Optionally show error message to user
    }

    // e.preventDefault();
    // const result = await login(email, password);

    // if (result.success) {
    //   console.log("Login successful");
    //   navigate("/home");
    // } else {
    //   console.error("Login failed:", result.error);
    //   // Optionally show error to user
    // }
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
              className={sharedStyles.showPasswordToggle}
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
