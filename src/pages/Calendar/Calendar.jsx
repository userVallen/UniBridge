import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCalendar from "react-calendar";
import { Row, Col, Container } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import NavigationLabel from "./NavigationLabel";
import FilterBox from "./FilterBox";
import "../../styles/calendar-page.css";
import styles from "./Calendar.module.css";

function Calendar() {
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
      <NavigationBar />
      <Container className={styles.container}>
        <Row>
          <Col lg={9} md={9} sm={12} className="mb-3">
            <div className="calendar-page-container">
              <NavigationLabel
                startDate={startDate}
                onClickRight={handleNext}
                onClickLeft={handlePrev}
              />
              <ReactCalendar
                locale={locale}
                formatDay={(locale, date) => date.getDate()}
                className={`lang-${i18n.language}`}
                calendarType="gregory"
                showNavigation={false}
                activeStartDate={startDate}
                onActiveStartDateChange={setStartDate}
              />
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <FilterBox />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Calendar;
