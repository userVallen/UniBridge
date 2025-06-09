import { useContext } from "react";
import { useTranslation } from "react-i18next";
import BulletinBoard from "../../components/BulletinBoard";
import NavigationBar from "../../components/NavigationBar";
import TitleCard from "../../components/TitleCard";

import { SharedEventsContext } from "../../contexts/SharedEventsContext";

function Notice() {
  const { t } = useTranslation();
  const { noticeEntries, setNoticeEntries } = useContext(SharedEventsContext);

  return (
    <>
      <NavigationBar />
      <TitleCard title={t("notice.title")} />
      <BulletinBoard
        notice
        entries={noticeEntries}
        setEntries={setNoticeEntries}
      />
    </>
  );
}

export default Notice;
