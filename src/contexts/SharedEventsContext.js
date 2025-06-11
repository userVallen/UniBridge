import { createContext, useState, useEffect } from "react";
import { majorColorClassMap } from "../constants/stylesMap";

import { fetchCommunityPosts } from "../api/communityApi";
import { fetchNoticePosts } from "../api/noticeApi";

export const SharedEventsContext = createContext();

export const SharedEventProvider = ({ children }) => {
  const [communityEntries, setCommunityEntries] = useState([]);
  const [noticeEntries, setNoticeEntries] = useState([]);
  const [sharedEvents, setSharedEvent] = useState([]);
  const [eventsToDisplay, setEventsToDisplay] = useState([]);

  function isAllDay(event) {
    const start = new Date(event.start);
    const end = new Date(event.end);

    return start.toDateString() === end.toDateString() ? true : false;
  }

  // Fetch data
  useEffect(() => {
    Promise.all([fetchCommunityPosts(), fetchNoticePosts()])
      .then(([communityPosts, noticePosts]) => {
        // Fetch Community data
        const formattedCommunityData = communityPosts.map((post, index) => ({
          key: post.id,
          number: index + 1,
          department: post.author_major,
          title: post.title,
          content: post.content,
          admin: post.author_name || "Unknown",
          student_id: post.author_student_id,
          date: new Date(post.created_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          start: post.event_start,
          end: post.event_end,
          place: post.event_location,
          allDay: isAllDay(post),
          isCommunity: post.isCommunity,
        }));
        setCommunityEntries(formattedCommunityData);

        // Fetch Notice data
        const formattedNoticeData = noticePosts.map((post, index) => ({
          key: post.id,
          number: index + 1,
          department: post.author_major,
          title: post.title,
          content: post.content,
          admin: post.author_name || "Unknown",
          student_id: post.author_student_id,
          date: new Date(post.created_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          start: post.event_start,
          end: post.event_end,
          place: post.event_location,
          allDay: isAllDay(post),
        }));
        setNoticeEntries(formattedNoticeData);
      })
      .catch((error) => console.error("Error fetching events: ", error));
  }, []);

  // Combine into sharedEvents when either list changes
  useEffect(() => {
    // const allEvents = [...communityEntries, ...noticeEntries];
    const eventsToDisplay = [...noticeEntries];

    const formatted = eventsToDisplay.map((event) => ({
      ...event,
      backgroundColor: majorColorClassMap[event.department]?.background,
      borderColor: majorColorClassMap[event.department]?.border,
      textColor: majorColorClassMap[event.department]?.color,
    }));

    setEventsToDisplay(formatted);
  }, [noticeEntries]);

  return (
    <SharedEventsContext.Provider
      value={{
        sharedEvents,
        setSharedEvent,
        noticeEntries,
        setNoticeEntries,
        communityEntries,
        setCommunityEntries,
        eventsToDisplay,
        setEventsToDisplay,
      }}
    >
      {children}
    </SharedEventsContext.Provider>
  );
};
