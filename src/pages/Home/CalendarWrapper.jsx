import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import Navigation from "./Navigation";

function CalendarWrapper() {
  const [startDate, setStartDate] = useState(new Date());

  function handleNext() {
    const nextMonth = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + 1,
      1
    );
    setStartDate(nextMonth);
  }

  function handlePrev() {
    const prevMonth = new Date(
      startDate.getFullYear(),
      startDate.getMonth() - 1,
      1
    );
    setStartDate(prevMonth);
  }

  return (
    <>
      <Navigation
        startDate={startDate}
        onClickNext={handleNext}
        onClickPrev={handlePrev}
      />
      <ReactCalendar
        showNavigation={false}
        activeStartDate={startDate}
        onActiveStartDateChange={setStartDate}
      />
    </>
  );
}

export default CalendarWrapper;
