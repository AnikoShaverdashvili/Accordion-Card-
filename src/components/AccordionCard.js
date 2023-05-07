import styles from "./AccordionCard.module.css";
import womanImage from "../images/main-woman.svg";
import box from "../images/box-desktop.svg";
import { useState } from "react";

const AccordionCard = () => {
  const [numberOfItem, setNumberOfItem] = useState(null);
  const handleOnclick = (number) => {
    if (numberOfItem === number) {
      setNumberOfItem(null);
    } else {
      setNumberOfItem(number);
    }
  };

  return (
    <div className={styles.container}>
      <img src={box} className={styles.imageOnTop} alt="box" />
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <img src={womanImage} alt="woman"></img>
        </div>
      </div>
      <div className={styles.faqContainer}>
        <h1>FAQ</h1>
        <div
          onClick={() => {
            handleOnclick(1);
          }}>
          hiiiiiiiiiii from title{numberOfItem === 1 ? <p>hiiiii</p> : null}
        </div>
        <div>
          <div
            onClick={() => {
              handleOnclick(2);
            }}>
            hiiiiiiiiiii from title{numberOfItem === 2 ? <p>hiiiii</p> : null}
          </div>
        </div>
        <div>
          <div
            onClick={() => {
              handleOnclick(3);
            }}>
            hiiiiiiiiiii from title{numberOfItem === 3 ? <p>hiiiii</p> : null}
          </div>
        </div>
        <div>
          <div
            onClick={() => {
              handleOnclick(4);
            }}>
            hiiiiiiiiiii from title{numberOfItem === 4 ? <p>hiiiii</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
