import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [array, setArray] = useState([]);

  function addNote(notes) {
    setArray((prevValues) => {
      return [...prevValues, notes];
    });
  }
  function deleteNote(id) {
    setArray((prevValues) => {
      return prevValues.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {array.map((noteItem, index) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            id={index}
            key={index}
          />
        );
      })}

      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
