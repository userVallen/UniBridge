import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BulletinBoard from "../../components/BulletinBoard";
import NavigationBar from "../../components/NavigationBar";
import TitleCard from "../../components/TitleCard";

function Community() {
  const { t } = useTranslation();

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
      <TitleCard title={t("community.title")} />
      <BulletinBoard
        entries={communityEntries}
        setEntries={setCommunityEntries}
      />
    </>
  );
}

export default Community;
