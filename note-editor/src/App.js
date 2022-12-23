import './App.css';

function App() {
  return (
    <div className="wrapper">
      <section className="note-editor__cards">
        <div className="note-editor__card">
          <div className="card__header">
            <h2>Cards</h2>
          </div>
          <div className="card__body">
            <textarea className="card__body-textarea">
              Ghbdtn vbh!
            </textarea>
          </div>
          <div className="card__footer">
            <button>
              Редактировать
            </button>
            <button>
              Удалить
            </button>
          </div>
        </div>


        <div className="note-editor__card">
          <div className="card__header">
            <h2>Cards</h2>
          </div>
          <div className="card__body">
            <textarea className="card__body-textarea">
              Ghbdtn vbh!
            </textarea>
          </div>
          <div className="card__footer">
            <button>
              Редактировать
            </button>
            <button>
              Удалить
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
