import React from "react";
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
      <div className={sharedStyles.window}>
        <div className={sharedStyles.contentContainer}>
          <h1>Login</h1>
          <p className={sharedStyles.paragraphWrapper}>
            Enter your email below to login to your account
          </p>

          <form className={sharedStyles.formWrapper} action="">
            <label htmlFor="">Email</label>
            <input
              className={sharedStyles.inputWrapper}
              type="text"
              placeholder="abc@dankook.ac.kr"
              required
            />
          </form>

          <form className={sharedStyles.formWrapper} action="">
            <div className={sharedStyles.passwordLabel}>
              <label htmlFor="">Password</label>
              <a
                href="#"
                className={`${styles.forgotPasswordPrompt} ${sharedStyles.anchorWrapper}`}
              >
                Forgot your password?
              </a>
            </div>
            <input
              className={sharedStyles.inputWrapper}
              type="password"
              id="userPassword"
              required
            />
            <div className={styles.showPasswordToggle}>
              <input type="checkbox" onClick={showPassword} />
              <label>Show password</label>
            </div>
          </form>

          <button className={sharedStyles.submitButton}>Login</button>
          <p
            className={`${sharedStyles.alternatePrompt} ${sharedStyles.paragraphWrapper}`}
            style={{ color: "black" }}
          >
            Don't have an account?
            <span style={{ margin: "5px" }}>
              <a href="#" className={sharedStyles.anchorWrapper}>
                Sign up
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
