import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import CardEntry from "./CardEntry";
import styles from "./CardWidget.module.css";

function CardWidget({ link, img, alt, title, entries }) {
  return (
    <Card className={styles.card}>
      <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
        <Card.Body
          className="d-flex align-items-center text-start p-0"
          style={{ margin: "12px" }}
        >
          <img
            src={img}
            alt={alt}
            style={{ height: "37px", width: "auto", margin: "5px" }}
          />
          <Card.Title
            className={`fs-4 align-items-center justify-content-center ${styles.cardTitle}`}
          >
            {title}
          </Card.Title>
        </Card.Body>

        <ListGroup
          className="text-start"
          style={{ margin: "12px 12px 12px 24px" }}
        >
          {entries.map((entry, index) => (
            <CardEntry key={index} {...entry} />
          ))}
        </ListGroup>
      </a>
    </Card>
  );
}

export default CardWidget;
