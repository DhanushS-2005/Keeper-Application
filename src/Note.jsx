import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function deleteItem() {
    props.onDelete(props.id);
  }

  return (
    <div className="notesContainer">
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={deleteItem}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
