import { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import Navigation from "./Navigation";
import { SharedEventsContext } from "../../contexts/SharedEventsContext";

function FullCalendarWrapper() {
  const startDate = new Date();
  const calendarRef = useRef(null);
  const { i18n } = useTranslation();
  const { sharedEvents, setSharedEvent } = useContext(SharedEventsContext);

  const handlePrev = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
  };

  const handleNext = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
  };

  // Remove the '일' from each date in KO locale
  function renderDayCellContent(arg) {
    return { html: `<div>${arg.date.getDate()}</div>` };
  }

  return (
    <>
      <Navigation
        startDate={startDate}
        onClickNext={handleNext}
        onClickPrev={handlePrev}
      />
      <div className={`lang-${i18n.language}`}>
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
        />
      </div>
    </>
  );
}

export default FullCalendarWrapper;
