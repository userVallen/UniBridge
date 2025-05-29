import { useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import NavigationBar from "../../components/NavigationBar";
import NavigationLabel from "./NavigationLabel";
import FilterBox from "./FilterBox";
import "../../styles/calendar-page.css";
import styles from "./Calendar.module.css";
import { SharedEventsContext } from "../../contexts/SharedEventsContext";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const calendarRef = useRef(null);
  const { i18n } = useTranslation();
  const { sharedEvents, setSharedEvent } = useContext(SharedEventsContext);
  const [selectedMajors, setSelectedMajors] = useState([]);

  const handlePrev = () => {
    const prevMonth = new Date(
      startDate.getFullYear(),
      startDate.getMonth() - 1,
      1
    );
    setStartDate(prevMonth);

    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
  };

  const handleNext = () => {
    const nextMonth = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + 1,
      1
    );
    setStartDate(nextMonth);

    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
  };

  const handleToday = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
  };

  // Remove the '일' from each date in KO locale
  function renderDayCellContent(arg) {
    return { html: `<div>${arg.date.getDate()}</div>` };
  }

  return (
    <>
      <NavigationBar />
      <Container className={styles.container}>
        <Row>
          <Col lg={9} md={9} sm={12} className="mb-3">
            <div className="calendar-page-container">
              <NavigationLabel
                startDate={startDate}
                onClickToday={handleToday}
                onClickRight={handleNext}
                onClickLeft={handlePrev}
              />
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={sharedEvents}
                headerToolbar={false}
                ref={calendarRef}
                height="auto"
                locales={allLocales}
                locale={i18n.language}
                dayCellContent={renderDayCellContent}
                selectable={true}
                editable={true} // Should be editable ***strictly for admins*** (editable for all for now)
                eventDidMount={(info) => {
                  const eventMajor = info.event.extendedProps.major;

                  // If no filters are applied, display all majors
                  if (selectedMajors.length === 0) {
                    info.el.style.display = "";
                    return;
                  }

                  // If there is at least one major applied, display filtered majors only
                  if (selectedMajors.includes(eventMajor)) {
                    info.el.style.display = "";
                  } else {
                    info.el.style.display = "none";
                  }
                }}
                key={selectedMajors.join(",")}
              />
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <FilterBox
              selectedMajors={selectedMajors}
              setSelectedMajors={setSelectedMajors}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Calendar;
