import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchCommunityPosts } from "../../api/communityApi";
import BulletinBoard from "../../components/BulletinBoard";
import NavigationBar from "../../components/NavigationBar";
import TitleCard from "../../components/TitleCard";

function Community() {
  const { t } = useTranslation();

  const [communityEntries, setCommunityEntries] = useState([]);

  useEffect(() => {
    fetchCommunityPosts()
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
        setCommunityEntries(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching community posts:", error);
      });
  }, []);

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
