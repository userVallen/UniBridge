import { createContext, useState } from "react";
import profile from "../assets/profile.png";

export const UserGroupsContext = createContext();

export const UserGroupsProvider = ({ children }) => {
  const [myBuddies, setMyBuddy] = useState([
    {
      profile: profile,
      info: ["Buddy 1", "BCE", "'21"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["Buddy 2", "Korean Studies", "'24"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
  ]);

  const [recommendedUsers, setRecommendedUser] = useState([
    {
      profile: profile,
      info: ["User 1", "MSE", "'24"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["User 2", "GBA", "'21"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["User 3", "BCE", "'22"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["User 4", "Performing Arts", "'23"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
  ]);

  const [requestedUsers, setRequestedUser] = useState([
    {
      profile: profile,
      info: ["User 5", "GBE", "'24"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["User 6", "Korean Studies", "'21"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
  ]);

  const [pendingUsers, setPendingUser] = useState([
    {
      profile: profile,
      info: ["User 7", "GBA", "'21"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["User 8", "GBA", "'23"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["User 9", "BCE", "'24"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["User 10", "Performing Arts", "'22"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["User 11", "Korean Studies", "'24"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["User 12", "MSE", "'23"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["User 13", "GBA", "'22"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["User 14", "GBA", "'24"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
    {
      profile: profile,
      info: ["User 15", "BCE", "'22"],
      interest: ["Anime", "Game", "Music"],
      language: ["Korean", "English", "Spanish"],
      purpose: ["...", "...", "..."],
      method: ["...", "...", "..."],
    },
  ]);
  return (
    <UserGroupsContext.Provider
      value={{
        myBuddies,
        setMyBuddy,
        recommendedUsers,
        setRecommendedUser,
        requestedUsers,
        setRequestedUser,
        pendingUsers,
        setPendingUser,
      }}
    >
      {children}
    </UserGroupsContext.Provider>
  );
};
