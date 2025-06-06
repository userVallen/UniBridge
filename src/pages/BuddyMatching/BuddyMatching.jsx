import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Slider from "./Slider";
import NavigationBar from "../../components/NavigationBar";
import UserCard from "./UserCard";
import styles from "./BuddyMatching.module.css";
import { UserGroupsContext } from "../../contexts/UserGroupsContext";

function BuddyMatching() {
  const { t } = useTranslation();
  const {
    myBuddies,
    setMyBuddy,
    recommendedUsers,
    setRecommendedUser,
    requestedUsers,
    setRequestedUser,
    pendingUsers,
    setPendingUser,
  } = useContext(UserGroupsContext);

  return (
    <>
      <NavigationBar />
      <div>
        <div className={styles.app}>
          <div className={styles.leftCol}>
            <h2>{t("buddy.monthly")}</h2>
            <Slider
              large
              slidesToShow={1}
              cards={myBuddies.map((user, index) => (
                <UserCard
                  large
                  key={index}
                  {...user}
                  buttonLabel={[t("buddy.chat")]}
                />
              ))}
            ></Slider>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.topRow}>
              <div className={styles.section}>
                <h2>{t("buddy.recommended")}</h2>
                {window.innerWidth <= 576 ? (
                  <Slider
                    slidesToShow={2}
                    cards={recommendedUsers.map((user) => (
                      <UserCard {...user} buttonLabel={[t("buddy.request")]} />
                    ))}
                  ></Slider>
                ) : (
                  <div className={`${styles.cardRow} `}>
                    {recommendedUsers.map((user) => (
                      <UserCard {...user} buttonLabel={[t("buddy.request")]} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className={styles.midRow}>
              <div className={styles.section}>
                <h2>{t("buddy.sent")}</h2>
                <div className={styles.cardRow}>
                  {requestedUsers.map((user) => (
                    <UserCard {...user} buttonLabel={[t("buddy.cancel")]} />
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.bottomRow}>
              <div className={styles.section}>
                <h2>{t("buddy.received")}</h2>
                <Slider
                  slidesToShow={window.innerWidth <= 576 ? 2 : 4}
                  cards={pendingUsers.map((user, index) => (
                    <UserCard
                      key={index}
                      {...user}
                      buttonLabel={[t("buddy.accept"), t("buddy.decline")]}
                    />
                  ))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuddyMatching;
