import React, {FC, useState} from 'react';
import styles from "./card.module.scss";

interface CardProps {
  data: {
    id: number,
    text: string,
  },
  NotesData: [
    {
      id: number,
      text: string,
    }
  ],
  setNotesData: any,
}

export const Card: FC<CardProps> = ({data, NotesData, setNotesData}) => {

  const [value, setValue] = useState(data.text);


  const [isDisableNote, setIsDisableNote] = useState(true);

  const textAreaValueHandler = (event) => {
    setValue(event.target.value);
  };

  // let note = {
  //   id: data.id,
  //   text: value,
  // };

  const saveNoteHandler = () => {
    setIsDisableNote(true);

    console.log(data.id)

    // let json = JSON.stringify(note);
      setNotesData(prevState => prevState.map(item => item.id === data.id ? {...item, text: value} : item))
    // NotesData[data.id].text = note.text;
    
    console.log(NotesData)
 

    //Вывод
    // let temp = JSON.parse(NotesData);
    // console.log(temp.text)
  }

  const editNoteHandler = () => {
    setIsDisableNote(false);
  }

  const delNoteHandler = () => {
    setNotesData(NotesData.filter(item => item.id !== data.id))
    console.log(NotesData)
  }

  return (
    <div className={styles["note-editor__card"]}>
      <div className={styles["card__header"]}>
        <h2>Cards</h2>
      </div>
      <div className={styles["card__body"]}>
        <textarea 
          className={styles["card__body-textarea"]} 
          placeholder="Введите заметку..." 
          onChange={textAreaValueHandler} 
          disabled={isDisableNote} 
          value={value}
        />
      </div>
      <div className={styles["card__footer"]}>
        {isDisableNote 
        ? <button onClick={editNoteHandler}>
          Редактировать
        </button>  
        : <button onClick={saveNoteHandler}>
          Сохранить
        </button>}
        <button onClick={delNoteHandler}>
          Удалить
        </button>
      </div>
    </div>
  )
}