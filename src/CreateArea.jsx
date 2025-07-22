import React, { useState } from "react";

function CreateArea(props) {

  let [note, setNote] = useState({
    title : "",
    content : ""
  })

  function handleChange(event) {
    let {name, value} = event.target;

    setNote(prev => ({...prev, [name] : value}));
  }

  function submit(event){
    props.onAdd(note);
    setNote({title: "", content: ""});
    event.preventDefault();
  }


  return (
    <div>
      <form>
        <input value = { note.title } onChange={handleChange} name="title" placeholder="Title" />
        <textarea value = { note.content } onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
