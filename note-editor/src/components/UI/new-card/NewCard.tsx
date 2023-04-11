import React, { FC } from 'react';
import styles from './newCard.module.scss';

interface NewCardProps {
  buttonHandler: () => void;
}

export const NewCard: FC<NewCardProps> = ({buttonHandler}) => {

  return (
    <div className={styles["note-editor__card"]}>
      <div className={styles["card__header"]}>
        <h2>New Cards</h2>
      </div>
      <div className={styles["card__body"]}>
        <button className={styles["card-new__body_button"]} onClick={buttonHandler}>Добавить новую заметку</button>
      </div>
    </div>
  )
}