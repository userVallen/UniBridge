import { useTranslation } from "react-i18next";
import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "./CardEntry.module.css";

function CardEntry({ title, date, place, subject }) {
  const { i18n } = useTranslation();

  const formattedDate = () => {
    const dateObject = new Date(date);
    const yearToFormat = dateObject.getFullYear();
    const monthToFormat = dateObject.getMonth();
    const dateToFormat = dateObject.getDate() + 1;
    const koreanDate = `${yearToFormat}년 ${monthToFormat}월 ${dateToFormat}일`;

    return i18n.language === "en"
      ? dateObject.toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : koreanDate;
  };

  return (
    <ListGroup.Item className={`border-0 ${styles.listWrapper}`}>
      <Row>
        <Col>
          <p className={styles.entryTitle}>{title}</p>
          <p className={styles.entryBody}>{formattedDate()}</p>
          <p className={styles.entryBody}>{place}</p>
          <p className={styles.entryBody}>{subject}</p>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default CardEntry;
