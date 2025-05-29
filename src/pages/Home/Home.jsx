import { useState } from "react";
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

function Home() {
  const { t } = useTranslation();

  // We need another page/small window to input events (set the title, date, etc.)
  const [noticeEvents, setNoticeEvent] = useState([
    { title: "Event Title 1", date: "1 May 2025", place: "Room 102" },
    { title: "Event Title 2", date: "2 May 2025", place: "Room 103" },
  ]);
  const [communityEvents, setCommunityEvent] = useState([
    { title: "Post Title 1", date: "1 June 2025", subject: "Person A" },
    { title: "Post Title 2", date: "2 June 2025", subject: "Person B" },
  ]);

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
              entries={noticeEvents}
            />
            <CardWidget
              link="/community"
              title={t("home.community")}
              img={chatBubble}
              alt="community icon"
              entries={communityEvents}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
