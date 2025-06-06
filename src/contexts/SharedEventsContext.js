import { createContext, useState } from "react";
import { majorColorClassMap } from "../constants/stylesMap";

export const SharedEventsContext = createContext();

export const SharedEventProvider = ({ children }) => {
  const rawEvents = [
    {
      title: "event 1-1",
      date: "2025-06-21",
      place: "place 1",
      major: "mse",
    },
    {
      title: "event 1-2",
      start: "2025-06-21T18:00:00",
      end: "2025-06-21T20:00:00",
      place: "place 1",
      major: "edu",
      allDay: "false", // has to be added to timed single-day events
    },
    {
      title: "event 2",
      start: "2025-06-29T10:00:00",
      end: "2025-07-01T23:00:00",
      place: "place 2",
      major: "iba",
      allDay: "true", // has to be added to timed multiple-day events
    },
  ];

  const [sharedEvents, setSharedEvent] = useState(
    rawEvents.map((event) => ({
      ...event,
      backgroundColor: majorColorClassMap[event.major].background,
      borderColor: majorColorClassMap[event.major].border,
      textColor: majorColorClassMap[event.major].color,
    }))
  );

  return (
    <SharedEventsContext.Provider value={{ sharedEvents, setSharedEvent }}>
      {children}
    </SharedEventsContext.Provider>
  );
};
