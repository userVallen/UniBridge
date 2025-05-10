import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import NavigationBar from "../../components/NavigationBar";
import NavigationLabel from "./NavigationLabel";
import "../../styles/calendar-page.css";
import styles from "./Calendar.module.css";

function Calendar() {
  const majorList = [
    "Mobile Systems Engineering",
    "Global Business Administration",
    "Biomaterial Convergence Engineering",
    "Korean Studies",
    "Performing Arts",
    "Global Basic Education",
    "...brown...",
    "...cream...",
  ];

  const colorList = [
    {
      id: "blue",
      background: "rgba(0, 133, 255, 0.1)",
      text: "rgba(0, 133, 255, 1)",
    },
    {
      id: "orange",
      background: "rgba(255, 150, 27, 0.1)",
      text: "rgba(255, 159, 45, 1)",
    },
    {
      id: "gray",
      background: "rgba(232, 232, 232, 1)",
      text: "rgba(88, 87, 87, 1)",
    },
    {
      id: "red",
      background: "rgba(255, 59, 59, 0.1)",
      text: "rgba(233, 44, 44, 1)",
    },
    {
      id: "green",
      background: "rgba(0, 186, 52, 0.1)",
      text: "rgba(0, 186, 52, 1)",
    },
    {
      id: "purple",
      background: "rgb(170, 96, 200, 0.1)",
      text: "rgb(214, 154, 222, 1)",
    },
    {
      id: "brown",
      background: "rgb(116, 81, 45, 0.1)",
      text: "rgb(175, 143, 111, 1)",
    },
    {
      id: "cream",
      background: "rgb(165, 157, 132, 0.1)",
      text: "rgb(193, 186, 161, 1)",
    },
  ];

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
      <div className={styles.container}>
        <div className="calendar-page-container">
          <NavigationLabel
            startDate={startDate}
            onClickRight={handleNext}
            onClickLeft={handlePrev}
          />
          <ReactCalendar
            showNavigation={false}
            activeStartDate={startDate}
            onActiveStartDateChange={setStartDate}
          />
        </div>
        <div className={styles.filterContainer}>
          <div className={styles.filterBox}>
            {majorList.map((major, index) => {
              const colorSet = colorList[index % colorList.length];
              return (
                <div className={styles.optionLabel}>
                  <input
                    className={styles.checkboxWrapper}
                    type="checkbox"
                    value={major}
                  />
                  <div
                    className={styles.labelContainer}
                    style={{
                      backgroundColor: colorSet.background,
                      color: colorSet.text,
                    }}
                  >
                    <label>{major}</label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
