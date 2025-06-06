import styles from "./InfoCard.module.css";

function InfoCard({ contents, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.title}>{title}</p>
        <ul>
          {contents.map((content) => (
            <li>{content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InfoCard;
