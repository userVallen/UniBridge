import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import CalendarWrapper from "./CalendarWrapper";
import CardWidget from "./CardWidget";
import NavigationBar from "../../components/NavigationBar";
import chatBubble from "../../assets/chat-bubble.png";
import megaphone from "../../assets/megaphone.png";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar-widget.css";
import styles from "./Home.module.css";
import { SharedEventsContext } from "../../contexts/SharedEventsContext";

function Home() {
  const { t } = useTranslation();

  // We need another page/small window to input events (set the title, date, etc.)
  const { noticeEntries, setNoticeEntries } = useContext(SharedEventsContext);
  const { communityEntries, setCommunityEntries } =
    useContext(SharedEventsContext);

  return (
    <div className={styles.app}>
      <NavigationBar />
      <Container fluid className={styles.content}>
        <Row className={styles.contentRow}>
          <Col lg={6} className="mb-3">
            <Card className="calendar-widget-container border-0">
              <Card className="calendar-container">
                <CalendarWrapper />
              </Card>
            </Card>
          </Col>
          <Col lg={6}>
            <CardWidget
              link="/notice"
              title={t("home.notice")}
              img={megaphone}
              alt="notice icon"
              entries={noticeEntries}
            />
            <CardWidget
              link="/community"
              title={t("home.community")}
              img={chatBubble}
              alt="community icon"
              entries={communityEntries}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
