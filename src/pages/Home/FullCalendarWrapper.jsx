import React, { useRef } from "react";
import Navigation from "./Navigation";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { useTranslation } from "react-i18next";

function FullCalendarWrapper() {
  const startDate = new Date();
  const calendarRef = useRef(null);
  const { i18n } = useTranslation();

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

  const eventList = [
    { title: "event 1", date: "2025-05-21" },
    { title: "event 2", start: "2025-05-29", end: "2025-05-31" }, // The event ends **before** this date (exclusive)
  ];

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
          events={eventList}
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
