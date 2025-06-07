import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchNoticePosts } from "../../api/noticeApi";
import BulletinBoard from "../../components/BulletinBoard";
import NavigationBar from "../../components/NavigationBar";
import TitleCard from "../../components/TitleCard";

function Notice() {
  const { t } = useTranslation();

  const [noticeEntries, setNoticeEntries] = useState([]);

  useEffect(() => {
    fetchNoticePosts()
      .then((posts) => {
        const formattedData = posts.map((post, index) => ({
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
        setNoticeEntries(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching community posts:", error);
      });
  }, []);

  return (
    <>
      <NavigationBar />
      <TitleCard title={t("notice.title")} />
      <BulletinBoard entries={noticeEntries} setEntries={setNoticeEntries} />
    </>
  );
}

export default Notice;
