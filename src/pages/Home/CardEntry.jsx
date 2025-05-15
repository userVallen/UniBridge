import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "./CardEntry.module.css";

function CardEntry({ title, date, place, subject }) {
  return (
    <ListGroup.Item className={`border-0 ${styles.listWrapper}`}>
      <Row>
        <Col>
          <p className="fw-bold fs-5 mb-1">{title}</p>
          <p className="text-muted small m-0">{date}</p>
          <p className="text-muted small m-0">{place}</p>
          <p className="text-muted small m-0">{subject}</p>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default CardEntry;
