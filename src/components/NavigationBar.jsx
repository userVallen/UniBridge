import { useTranslation } from "react-i18next";
import { Container, Nav, Navbar } from "react-bootstrap";
import LanguageToggle from "./LanguageToggle";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
  const { t } = useTranslation();

  return (
    <Navbar expand="md" className={`bg-transparent ${styles.navBar}`}>
      <Container fluid className="d-flex align-items-center gap-4">
        <Navbar.Brand className="align-items-center mb-0">
          <img src={logo} alt="UniBridge logo" className={styles.logo} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <div className="w-100 d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center mt-3 mt-lg-0">
            <Nav className="d-flex align-items-center gap-4">
              <Nav.Link href="/">{t("home.home")}</Nav.Link>
              <Nav.Link href="/community">{t("home.community")}</Nav.Link>
              <Nav.Link href="/notice">{t("home.notice")}</Nav.Link>
              <Nav.Link href="/calendar">{t("home.calendar")}</Nav.Link>
              <Nav.Link href="/buddyMatching">
                {t("home.buddyMatching")}
              </Nav.Link>
              <Nav.Link href="/chat">{t("home.chat")}</Nav.Link>

              <span style={{ display: "flex", alignItems: "center" }}>
                <LanguageToggle />
                <Nav.Link style={{ marginLeft: "10px" }}>
                  <img
                    src={profile}
                    alt="user profile picture"
                    className={styles.profile}
                  />
                </Nav.Link>
              </span>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
