import { Container, Form } from "react-bootstrap";
import sharedStyles from "../../styles/AuthPage.module.css";
import styles from "./Login.module.css";

function Login() {
  function showPassword() {
    var x = document.getElementById("userPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div className={sharedStyles.app}>
      <Container className={sharedStyles.window}>
        <h1 className={sharedStyles.title}>Login</h1>
        <p className={sharedStyles.paragraphWrapper}>
          Enter your email below to login to your account
        </p>

        <Form className={sharedStyles.formWrapper} action="">
          <Form.Group>
            <Form.Label htmlFor="" className={sharedStyles.formLabel}>
              Email
            </Form.Label>
            <Form.Control
              className={sharedStyles.inputWrapper}
              type="text"
              placeholder="abc@dankook.ac.kr"
              required
            />
          </Form.Group>
        </Form>

        <Form className={sharedStyles.formWrapper} action="">
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
              required
            />
            <div className={styles.showPasswordToggle}>
              <input type="checkbox" onClick={showPassword} />
              <label>Show password</label>
            </div>
          </Form.Group>
        </Form>

        <button className={sharedStyles.submitButton}>Login</button>
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
