import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import ReactCalendar from "react-calendar";
import Navigation from "./Navigation";

function CalendarWrapper() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const locale = currentLang === "ko" ? "ko-KR" : "en-US";
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
      <Container>
        <ReactCalendar
          locale={locale}
          formatDay={(locale, date) => date.getDate()}
          className={`lang-${i18n.language}`}
          calendarType="gregory"
          showNavigation={false}
          activeStartDate={startDate}
          onActiveStartDateChange={setStartDate}
        />
      </Container>
    </>
  );
}

export default CalendarWrapper;
