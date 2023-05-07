import styles from "./AccordionCard.module.css";
import womanImage from "../images/main-woman.svg";
import box from "../images/box-desktop.svg";

const AccordionCard = () => {
  return (
    <div className={styles.container}>
      <img src={box} className={styles.imageOnTop} alt="top" />
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <img src={womanImage} alt="woman" style={{ height: "20%" }}></img>
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
