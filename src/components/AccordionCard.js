import styles from "./AccordionCard.module.css";
import womanImage from "../images/main-woman.svg";
import box from "../images/box-desktop.svg";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionCard = () => {
  const [numberOfItem, setNumberOfItem] = useState(null);
  const [font, setFont] = useState("400");
  const handleOnclick = (number) => {
    if (numberOfItem === number) {
      setNumberOfItem(null);
      setFont("400");
    } else {
      setNumberOfItem(number);
      setFont("700");
    }
  };
  const accordionItems = [
    {
      itemNumber: 1,
      title: "How many team members can I invite?",
      content:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      itemNumber: 2,
      title: "Is there a limit to the number of files I can upload?",
      content:
        "No, you can upload as many files as you need, as long as each file is under 2GB in size.",
    },
    {
      itemNumber: 3,
      title: "How do I reset my password?",
      content:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
    },
    {
      itemNumber: 4,
      title: "Can I cancel my subscription?",
      content:
        "Yes, you can cancel your subscription at any time. However, we do not offer refunds for partial months or years.",
    },
    {
      itemNumber: 5,
      title: "What payment methods do you accept?",
      content: "We accept Visa, Mastercard, American Express, and PayPal.",
    },
  ];

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
        <div>
          {accordionItems.map((item) => (
            <AccordionItem
              handleOnclick={handleOnclick}
              numberOfItem={numberOfItem}
              itemNumber={item.itemNumber}
              title={item.title}
              content={item.content}
              font={font}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
