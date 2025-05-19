import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "./CardEntry.module.css";

function CardEntry({ title, date, place, subject }) {
  return (
    <ListGroup.Item className={`border-0 ${styles.listWrapper}`}>
      <Row>
        <Col>
          <p className={styles.entryTitle}>{title}</p>
          <p className={styles.entryBody}>{date}</p>
          <p className={styles.entryBody}>{place}</p>
          <p className={styles.entryBody}>{subject}</p>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default CardEntry;
