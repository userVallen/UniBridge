import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { createNoticePost, createCommunityPost } from "../api/postApi";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./CreateModal.module.css";

function CreateModal({ enableTimeAndPlace, onClose }) {
  const { t } = useTranslation();

  const [postData, setPostData] = useState({
    type: "",
    title: "",
    content: "",
    location: "",
    start: "",
    end: "",
  });

  // Set the type based on enableTimeAndPlace prop
  useEffect(() => {
    if (enableTimeAndPlace) {
      setPostData((prev) => ({ ...prev, type: "notice" }));
    } else {
      setPostData((prev) => ({ ...prev, type: "community" }));
    }
  }, [enableTimeAndPlace]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
    console.log(postData);
  };

  const handleDateChange = (date, field) => {
    setPostData((prev) => ({
      ...prev,
      [field]: date,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const finalPostData = { ...postData };

    // Submit your data here
    console.log("Submitting:", finalPostData);
    if (finalPostData.type === "community") {
      try {
        const data = await createCommunityPost(postData);
        console.log("community post submitted:", data);
      } catch (error) {
        console.error("Sign up failed:", error);
      }
    }

    if (finalPostData.type === "notice") {
      try {
        const data = await createNoticePost(postData);
        console.log("notice post submitted:", data);
      } catch (error) {
        console.error("Sign up failed:", error);
      }
    }
    // onSubmit(finalPostData); // Call parent's submit handler
    onClose();
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <p className={styles.title}>{t("create.modalTitle")}</p>
        <Form className={styles.createForm} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>{t("create.title")}</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={postData.title}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>{t("create.content")}</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              name="content"
              value={postData.content}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          {enableTimeAndPlace && (
            <>
              <Form.Group>
                <Form.Label>{t("create.location")}</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={postData.location}
                  onChange={handleChange}
                  autoComplete="off"
                ></Form.Control>
              </Form.Group>

              <Form.Group className={styles.formWithDatePicker}>
                <Form.Label>{t("create.start")}</Form.Label>
                <DatePicker
                  selected={postData.start}
                  onChange={(date) => handleDateChange(date, "start")}
                  name="start"
                  className="form-control"
                  dateFormat="yyyy-MM-dd HH:mm"
                  showTimeSelect
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className={styles.formWithDatePicker}>
                <Form.Label>{t("create.end")}</Form.Label>
                <DatePicker
                  selected={postData.end}
                  onChange={(date) => handleDateChange(date, "end")}
                  name="end"
                  className="form-control"
                  dateFormat="yyyy-MM-dd HH:mm"
                  showTimeSelect
                  autoComplete="off"
                />
              </Form.Group>
            </>
          )}
          <button onClick={handleSubmit}>{t("create.createPost")}</button>
        </Form>
      </div>
    </div>
  );
}

export default CreateModal;
