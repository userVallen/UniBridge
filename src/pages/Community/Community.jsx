import { useContext } from "react";
import { useTranslation } from "react-i18next";
import BulletinBoard from "../../components/BulletinBoard";
import NavigationBar from "../../components/NavigationBar";
import TitleCard from "../../components/TitleCard";

import { SharedEventsContext } from "../../contexts/SharedEventsContext";

function Community() {
  const { t } = useTranslation();
  const { communityEntries, setCommunityEntries } =
    useContext(SharedEventsContext);

  return (
    <>
      <NavigationBar />
      <TitleCard title={t("community.title")} />
      <BulletinBoard
        community
        entries={communityEntries}
        setEntries={setCommunityEntries}
      />
    </>
  );
}

export default Community;
