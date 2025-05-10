import React, { useState } from "react";
import CalendarWrapper from "./CalendarWrapper";
import CardWidget from "./CardWidget";
import NavigationBar from "../../components/NavigationBar";
import chatBubble from "../../assets/chat-bubble.png";
import megaphone from "../../assets/megaphone.png";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar-widget.css";
import styles from "./Home.module.css";

function Home() {
  // We need another page/small window to input events (set the title, date, etc.)
  const [statefulNoticeEvents, setNoticeEvent] = useState([]);
  const [statefulCommunityEvents, setCommunityEvent] = useState([]);

  // Temporary placeholder events. In real practice, events should be stateful.
  var noticeEvents = [
    { title: "Event Title 1", date: "1 May 2025", place: "Room 102" },
    { title: "Event Title 2", date: "2 May 2025", place: "Room 103" },
  ];

  var communityEvents = [
    { title: "Post Title 1", date: "1 June 2025", subject: "Person A" },
    { title: "Post Title 2", date: "2 June 2025", subject: "Person B" },
  ];

  return (
    <div className={styles.app}>
      <NavigationBar />
      <div className={styles.content}>
        <div className="calendar-widget-container">
          <div class="calendar-container">
            <CalendarWrapper />
          </div>
        </div>

        <div class={styles.sidebar}>
          <CardWidget
            link="#"
            title="Notice"
            img={megaphone}
            alt="notice icon"
            entries={noticeEvents}
          />
          <CardWidget
            link="#"
            title="Community"
            img={chatBubble}
            alt="community icon"
            entries={communityEvents}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
