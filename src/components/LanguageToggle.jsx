import { useTranslation } from "react-i18next";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import globe from "../assets/globe.png";
import styles from "./LanguageToggle.module.css";

function LanguageToggle() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <>
      <img src={globe} alt="globe icon" className={styles.languageIcon} />
      <ToggleButtonGroup
        type="radio"
        name="language"
        className="px-1 py-1 rounded-pill bg-secondary-subtle"
      >
        <ToggleButton
          id="lang-eng"
          value="ENG"
          variant={
            localStorage.getItem("i18nextLng") === "en" ? "secondary" : "light"
          }
          size="sm"
          className="rounded-pill"
          onClick={() => handleLanguageChange("en")}
        >
          ENG
        </ToggleButton>
        <ToggleButton
          id="lang-kor"
          value="KOR"
          variant={
            localStorage.getItem("i18nextLng") === "ko" ? "secondary" : "light"
          }
          size="sm"
          className="rounded-pill"
          onClick={() => handleLanguageChange("ko")}
        >
          KOR
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default LanguageToggle;
