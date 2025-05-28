import { useState } from "react";
import { useTranslation } from "react-i18next";
import BulletinBoard from "../../components/BulletinBoard";
import NavigationBar from "../../components/NavigationBar";
import TitleCard from "../../components/TitleCard";

function Notice() {
  const { t } = useTranslation();

  const [noticeEntries, setNoticeEntries] = useState([
    {
      key: "",
      number: "1",
      department: "Mobile Systems Engineering",
      title: "Hackathon 2025",
      admin: "우아우",
      date: "24 April 2025",
    },
  ]);
  return (
    <>
      <NavigationBar />
      <TitleCard title={t("notice.title")} />
      <BulletinBoard entries={noticeEntries} setEntries={setNoticeEntries} />
    </>
  );
}

export default Notice;
