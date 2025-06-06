import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import InfoCard from "./InfoCard";
import Slider from "./Slider";
import styles from "./UserCard.module.css";

function UserCard(props) {
  const { t } = useTranslation();
  return (
    <div
      className={props.large ? `${styles.card} ${styles.large}` : styles.card}
    >
      <img
        src={props.profile}
        alt="profile picture"
        className={
          props.large ? `${styles.profile} ${styles.large}` : styles.profile
        }
      />

      <Slider
        slidesToShow={1}
        cards={[
          <InfoCard contents={props.info} title="Info" />,
          <InfoCard contents={props.interest} title="Interest" />,
          <InfoCard contents={props.language} title="Language" />,
          <InfoCard contents={props.purpose} title="Purpose" />,
          <InfoCard contents={props.method} title="Method" />,
        ]}
      ></Slider>

      <div className={styles.buttonContainer}>
        {props.buttonLabel.map((label, index) => (
          <Button
            size="sm"
            style={
              index === 1
                ? { backgroundColor: "#757575", borderColor: "#757575" }
                : {}
            }
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default UserCard;
