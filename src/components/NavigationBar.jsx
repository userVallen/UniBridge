import React from "react";
import Button from "react-bootstrap/Button";
import globe from "../assets/globe.png";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <div className={styles.navBar}>
      <img
        className={styles.logo}
        src={logo}
        alt="UniBridge logo"
        width="235"
        height="72"
      />

      <a className={styles.navLink} href="https://gqlm85.csb.app/">
        Home
      </a>
      <a className={styles.navLink} href="https://gqlm85.csb.app/community">
        Community
      </a>
      <a className={styles.navLink} href="https://gqlm85.csb.app/notice">
        Notice
      </a>
      <a className={styles.navLink} href="#">
        Buddy Matching
      </a>
      <a className={styles.navLink} href="https://gqlm85.csb.app/calendar">
        Calendar
      </a>

      <div className={styles.langSection}>
        <img src={globe} width="20" height="20" alt="globe icon" />
        <div className={styles.langToggle}>
          <Button
            className={`${styles.langLabel} ${styles.selected}`}
            variant="secondary"
          >
            ENG
          </Button>
          <Button className={styles.langLabel} variant="secondary">
            KOR
          </Button>
        </div>
        <a className={styles.navLink} href="#">
          <img
            src={profile}
            width="50"
            height="50"
            className={styles.profileIcon}
            alt="user profile picture"
          />
        </a>
      </div>
    </div>
  );
}

export default NavigationBar;
