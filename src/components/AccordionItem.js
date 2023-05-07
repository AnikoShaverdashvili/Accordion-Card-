import styles from "./AccordionItem.module.css";

const AccordionItem = (props) => {
  const { handleOnclick, numberOfItem, itemNumber, content, title, font } =
    props;

  return (
    <div className={styles.border}>
      <div
        className={styles.questionsContaner}
        onClick={() => {
          handleOnclick(itemNumber);
        }}>
        <p
          style={{
            fontWeight: numberOfItem === itemNumber ? font : "400",
          }}>
          {title}
        </p>
        {numberOfItem === itemNumber ? <span>{content}</span> : null}
      </div>
    </div>
  );
};

export default AccordionItem;
