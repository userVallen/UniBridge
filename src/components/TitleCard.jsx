import styles from "./TitleCard.module.css";

function TitleCard(props) {
  return <div className={styles.titleCard}>{props.title}</div>;
}

export default TitleCard;
