import React from "react";
import styles from "./BulletinEntry.module.css";

function BulletinEntry(props) {
  return (
    <>
      <div className={styles.entryContainer}>
        <div className={styles.entryNumber}>{props.number}</div>
        <div className={styles.entryDepartment}>{props.department}</div>
        <div className={styles.entryTitle}>{props.title}</div>
        <div className={styles.entryAdmin}>{props.admin}</div>
        <div
          className={styles.entryDate}
          style={!props.isTitle ? { textTransform: "uppercase" } : null}
        >
          {props.date}
        </div>
      </div>
      <hr
        style={
          props.isTitle
            ? {
                border: "none",
                height: "2px",
                width: "100%",
                backgroundColor: "black",
              }
            : {
                border: "none",
                height: "1px",
                width: "100%",
                backgroundColor: "rgba(217, 217, 217, 1)",
              }
        }
      />
    </>
  );
}

export default BulletinEntry;

// import React from "react";
// import { Row, Col } from "react-bootstrap";
// import styles from "./BulletinEntry.module.css";

// function BulletinEntry(props) {
//   return (
//     <>
//       <Row className={`${styles.entryContainer} align-items-center`}>
//         <Col xs={2} sm={1} className={styles.entryNumber}>
//           {props.number}
//         </Col>
//         <Col xs={3} sm={2} className={styles.entryDepartment}>
//           {props.department}
//         </Col>
//         <Col xs={4} sm={5} className={styles.entryTitle}>
//           {props.title}
//         </Col>
//         <Col xs={2} sm={2} className={styles.entryAdmin}>
//           {props.admin}
//         </Col>
//         <Col
//           xs={3}
//           sm={2}
//           className={styles.entryDate}
//           style={!props.isTitle ? { textTransform: "uppercase" } : null}
//         >
//           {props.date}
//         </Col>
//       </Row>
//       <hr
//         style={
//           props.isTitle
//             ? {
//                 border: "none",
//                 height: "2px",
//                 width: "100%",
//                 backgroundColor: "black",
//               }
//             : {
//                 border: "none",
//                 height: "1px",
//                 width: "100%",
//                 backgroundColor: "rgba(217, 217, 217, 1)",
//               }
//         }
//       />
//     </>
//   );
// }

// export default BulletinEntry;
