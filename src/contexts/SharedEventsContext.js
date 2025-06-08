import { createContext, useState, useEffect } from "react";
import { majorColorClassMap } from "../constants/stylesMap";

import { fetchCommunityPosts } from "../api/communityApi";
import { fetchNoticePosts } from "../api/noticeApi";

export const SharedEventsContext = createContext();

export const SharedEventProvider = ({ children }) => {
  const [communityEntries, setCommunityEntries] = useState([]);
  const [noticeEntries, setNoticeEntries] = useState([]);
  const [sharedEvents, setSharedEvent] = useState([]);

  // Fetch data
  useEffect(() => {
    console.log("useEffect called");
    Promise.all([fetchCommunityPosts(), fetchNoticePosts()])
      .then(([communityPosts, noticePosts]) => {
        console.log(communityPosts);
        console.log(noticePosts);

        // Fetch Community data
        const formattedCommunityData = communityPosts.map((post, index) => ({
          key: post.id,
          number: index + 1,
          department: post.author_major,
          title: post.title,
          admin: post.author_name || "Unknown",
          date: new Date(post.created_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
        }));
        setCommunityEntries(formattedCommunityData);

        // Fetch Notice data
        const formattedNoticeData = noticePosts.map((post, index) => ({
          key: post.id,
          number: index + 1,
          department: post.author_major,
          title: post.title,
          admin: post.author_name || "Unknown",
          date: new Date(post.created_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
        }));
        setNoticeEntries(formattedNoticeData);
      })
      .catch((error) => console.error("Error fetching events: ", error));
  }, []);

  // Combine into sharedEvents when either list changes
  useEffect(() => {
    const allEvents = [...communityEntries, ...noticeEntries];

    const formatted = allEvents.map((event) => ({
      ...event,
      backgroundColor: majorColorClassMap[event.major]?.background,
      borderColor: majorColorClassMap[event.major]?.border,
      textColor: majorColorClassMap[event.major]?.color,
    }));

    setSharedEvent(formatted);
  }, [communityEntries, noticeEntries]);

  return (
    <SharedEventsContext.Provider
      value={{
        sharedEvents,
        setSharedEvent,
        noticeEntries,
        setNoticeEntries,
        communityEntries,
        setCommunityEntries,
      }}
    >
      {children}
    </SharedEventsContext.Provider>
  );
};
