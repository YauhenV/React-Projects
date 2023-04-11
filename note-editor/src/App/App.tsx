import './App.css';
import React, {useState} from 'react'
import { Card } from './components/UI/card';
import { NewCard } from './components/UI/new-card';

export function App() {
  
  const NotesData =[
    {
      id: 0,
      text: "2323",
    },
    {
      id: 1,
      text: "fhghf",
    },
  ];
  
  const [notesDataState, setNotesDataState] = useState(NotesData);
  const [amountCard, setAmountCard] = useState(notesDataState.length);

  const newCardButtonHandler = () => {
    setAmountCard(amountCard + 1);
    setNotesDataState(curr => [...curr, {
      id: amountCard,
      text: "",
    }]);
    
  }

  console.log(amountCard);
  console.log(notesDataState);

  return (
    <div className="wrapper">
      <section className="note-editor__cards">
        {notesDataState.map(item => {
          return (
            <Card data={item} NotesData={notesDataState} setNotesData={setNotesDataState} key={Math.random()} />
          )
        })}

        <NewCard buttonHandler={newCardButtonHandler}/>

      </section>
    </div>
  );
}