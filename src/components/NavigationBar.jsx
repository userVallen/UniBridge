import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LanguageToggle from "./LanguageToggle";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import styles from "./NavigationBar.module.css";

function NewNavigationBar() {
  return (
    <Navbar
      expand="lg"
      className={`bg-transparent justify-content-between ${styles.navBar}`}
    >
      <Container
        fluid
        className={`d-flex justify-content-between align-items-center ${styles.navBarContainer}`}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
          <Nav className="me-auto">
            <Navbar.Brand className="align-items-center">
              <img
                src={logo}
                alt="UniBridge logo"
                style={{ height: "72px", width: "auto" }}
              />
            </Navbar.Brand>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/community">Community</Nav.Link>
            <Nav.Link href="/notice">Notice</Nav.Link>
            <Nav.Link href="#">Buddy Matching</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>

            <span style={{ display: "flex", alignItems: "center" }}>
              <LanguageToggle />
              <Nav.Link style={{ marginLeft: "10px" }}>
                <img
                  src={profile}
                  height="50"
                  width="auto"
                  alt="user profile picture"
                />
              </Nav.Link>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewNavigationBar;
