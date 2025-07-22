import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  let [note, setNote] = useState({
    title: "",
    content: "",
  });

  let [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    let { name, value } = event.target;

    setNote((prev) => ({ ...prev, [name]: value }));
  }

  function submit(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function expand(){
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        )}
        <textarea
          value={note.content}
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
