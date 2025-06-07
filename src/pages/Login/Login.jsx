import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { loginUser } from "../../api/loginApi";
import { useNavigate } from "react-router-dom";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function showPassword() {
    var x = document.getElementById("userPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

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
      <Container className={sharedStyles.window}>
        <h1 className={sharedStyles.title}>Login</h1>
        <p className={sharedStyles.paragraphWrapper}>
          Enter your email below to login to your account
        </p>

        <Form className={sharedStyles.formWrapper} onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label htmlFor="" className={sharedStyles.formLabel}>
              Email
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
                Password
              </Form.Label>
              <a
                href="#"
                className={`${styles.forgotPasswordPrompt} ${sharedStyles.anchorWrapper}`}
              >
                Forgot your password?
              </a>
            </div>
            <Form.Control
              className={sharedStyles.inputWrapper}
              type="password"
              id="userPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className={styles.showPasswordToggle}>
              <input type="checkbox" onClick={showPassword} />
              <label>Show password</label>
            </div>
          </Form.Group>

          <button className={sharedStyles.submitButton}>Login</button>
        </Form>

        <p
          className={`${sharedStyles.alternatePrompt} ${sharedStyles.paragraphWrapper}`}
          style={{ color: "black" }}
        >
          Don't have an account?
          <span style={{ margin: "5px" }}>
            <a href="/signup" className={sharedStyles.anchorWrapper}>
              Sign up
            </a>
          </span>
        </p>
      </Container>
    </div>
  );
}

export default Login;
