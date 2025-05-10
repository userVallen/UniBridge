import React, { useState } from "react";
import BulletinBoard from "../../components/BulletinBoard";
import NavigationBar from "../../components/NavigationBar";
import TitleCard from "../../components/TitleCard";

function Community() {
  const [communityEntries, setCommunityEntries] = useState([
    {
      key: "",
      number: "1",
      department: "Mobile Systems Engineering",
      title: "Exam Tips!",
      admin: "우아우",
      date: "24 April 2025",
    },
  ]);
  return (
    <>
      <NavigationBar />
      <TitleCard title="Community" />
      <BulletinBoard
        entries={communityEntries}
        setEntries={setCommunityEntries}
      />
    </>
  );
}

export default Community;
