import { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import CreateModal from "./CreateModal";
import styles from "./TitleCard.module.css";

function TitleCard({ title, enableTimeAndPlace }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.titleCard}>
      {title}
      <button onClick={() => setIsModalOpen(true)}>
        <CreateIcon onClose={handleCloseModal} />
      </button>

      {isModalOpen && (
        <CreateModal
          enableTimeAndPlace={enableTimeAndPlace}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default TitleCard;
