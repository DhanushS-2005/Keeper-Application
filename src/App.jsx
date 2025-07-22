import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import './App.css'

function App() {

  let [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes(prev => ([...prev, note]));
  }

  function deleteNote(id) {
    setNotes(prev => {
      return prev.filter((item, index) => {
        return index !== id;
      })
    })
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote} />
      {
        notes.map((noteItem, index) => <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete = {deleteNote} />)
      }
    </div>
  );
}

export default App;
