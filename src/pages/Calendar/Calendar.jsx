import { useContext, useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import NavigationBar from "../../components/NavigationBar";
import NavigationLabel from "./NavigationLabel";
import FilterBox from "./FilterBox";
import DayDetails from "./DayDetails";
import "../../styles/calendar-page.css";
import styles from "./Calendar.module.css";
import { SharedEventsContext } from "../../contexts/SharedEventsContext";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const calendarRef = useRef(null);
  const { i18n } = useTranslation();
  const { sharedEvents, setSharedEvent } = useContext(SharedEventsContext);
  const [selectedMajors, setSelectedMajors] = useState([]);
  const [selectedDayEvents, setSelectedDayEvents] = useState();

  useEffect(() => {
    if (!selectedDayEvents) return; // Do nothing if no day has been clicked

    const filteredEvents = sharedEvents.filter((event) => {
      const eventDate = new Date(event.start || event.date); // Parse date from event
      const selectedDate = new Date(selectedDayEvents.date); // Clicked date

      // Check if this event falls on the selected day
      const isSameDay =
        eventDate.getFullYear() === selectedDate.getFullYear() &&
        eventDate.getMonth() === selectedDate.getMonth() &&
        eventDate.getDate() === selectedDate.getDate();

      // Check if this event matches one of the selected majors
      const isMajorMatch =
        selectedMajors.length === 0 || selectedMajors.includes(event.major);

      return isSameDay && isMajorMatch;
    });

    // Update state: keep the same date, but update the event list
    setSelectedDayEvents(
      (prev) =>
        filteredEvents.length > 0 ? { ...prev, events: filteredEvents } : null // If no matching events remain, clear the day details
    );
  }, [selectedMajors]); // Run this effect when selectedMajors changes

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
                dateClick={(info) => {
                  const selectedDate = new Date(info.dateStr); //YYYY-MM-DD

                  // Parse the event’s start and end dates (if end doesn’t exist, it’s treated as a one-day event).
                  const dayEvents = sharedEvents.filter((event) => {
                    const start = event.start
                      ? new Date(event.start)
                      : new Date(event.date);
                    const end = event.end ? new Date(event.end) : start;

                    // Normalize times to ignore hours/minutes
                    const normalizedSelectedDate = new Date(
                      selectedDate.getFullYear(),
                      selectedDate.getMonth(),
                      selectedDate.getDate()
                    );
                    const normalizedStartDate = new Date(
                      start.getFullYear(),
                      start.getMonth(),
                      start.getDate()
                    );
                    const normalizedEndDate = new Date(
                      end.getFullYear(),
                      end.getMonth(),
                      end.getDate()
                    );

                    const isInRange =
                      normalizedSelectedDate >= normalizedStartDate &&
                      normalizedSelectedDate <= normalizedEndDate;

                    const isMajorMatch =
                      selectedMajors.length === 0 ||
                      selectedMajors.includes(event.major);

                    return isInRange && isMajorMatch;
                  });

                  if (dayEvents.length > 0) {
                    setSelectedDayEvents({
                      date: selectedDate,
                      events: dayEvents,
                    });
                  } else {
                    setSelectedDayEvents(null);
                  }
                }}
              />
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <FilterBox
              selectedMajors={selectedMajors}
              setSelectedMajors={setSelectedMajors}
            />

            {selectedDayEvents && selectedMajors && (
              <DayDetails
                date={selectedDayEvents.date}
                events={selectedDayEvents.events}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Calendar;
