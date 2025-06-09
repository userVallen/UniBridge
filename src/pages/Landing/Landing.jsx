import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <div className={styles.app}>
      <div className={styles.window}>
        <img className={styles.logoWrapper} src={logo} alt="UniBridge logo" />
        <div className={styles.buttonGroup}>
          <Link to="/login">
            <button className={styles.buttonWrapper} href="/login">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className={styles.buttonWrapper} href="/signup">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
