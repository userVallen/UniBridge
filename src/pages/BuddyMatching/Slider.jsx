import { useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "./Slider.module.css";

function Slider({ slidesToShow, cards }) {
  const scrollRef = useRef(null);

  function scrollLeft() {
    const card = scrollRef.current.querySelector(`.${styles.cardWrapper}`);
    scrollRef.current.scrollBy({
      left: -card.offsetWidth,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    const card = scrollRef.current.querySelector(`.${styles.cardWrapper}`);
    scrollRef.current.scrollBy({
      left: card.offsetWidth,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.sliderContainer}>
      <button onClick={() => scrollLeft()}>
        <ArrowBackIosIcon />
      </button>
      <div className={styles.scrollContainer} ref={scrollRef}>
        {cards.map((card, index) => {
          return (
            <div
              className={styles.cardWrapper}
              key={index}
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              {card}
            </div>
          );
        })}
      </div>
      <button onClick={() => scrollRight()}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
}

export default Slider;
