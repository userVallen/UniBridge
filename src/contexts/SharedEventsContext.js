import { createContext, useState } from "react";
import { majorColorClassMap } from "../constants/stylesMap";

export const SharedEventsContext = createContext();

export const SharedEventProvider = ({ children }) => {
  const rawEvents = [
    {
      title: "event 1",
      date: "2025-05-21",
      major: "mse",
    },
    {
      title: "event 2",
      start: "2025-05-29",
      end: "2025-05-31", // The event ends **before** this date (exclusive)
      major: "iba",
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
