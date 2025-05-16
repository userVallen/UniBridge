import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from "react";
import globe from "../assets/globe.png";
import styles from "./LanguageToggle.module.css";

function LanguageToggle() {
  const [language, setLanguage] = useState("ENG");

  return (
    <>
      <img src={globe} alt="globe icon" className={styles.languageIcon} />
      <ToggleButtonGroup
        type="radio"
        name="language"
        value={language}
        onChange={(val) => setLanguage(val)}
        className="px-1 py-1 rounded-pill bg-secondary-subtle"
      >
        <ToggleButton
          id="lang-eng"
          value="ENG"
          variant={language === "ENG" ? "secondary" : "light"}
          size="sm"
          className="rounded-pill"
        >
          ENG
        </ToggleButton>
        <ToggleButton
          id="lang-kor"
          value="KOR"
          variant={language === "KOR" ? "secondary" : "light"}
          size="sm"
          className="rounded-pill"
        >
          KOR
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default LanguageToggle;
