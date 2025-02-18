import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allNotes, setAllNotes] = useState([]);
  function handleAdd(noteValue) {
    setAllNotes((prevValue) => {
      return [...prevValue, noteValue];
    });
  }

  function handleDelete(id) {
    setAllNotes((prevValue) => {
      return prevValue.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {allNotes.map((oneNote, index) => (
        <Note
          key={index}
          id={index}
          title={oneNote.title}
          content={oneNote.content}
          onDelete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
