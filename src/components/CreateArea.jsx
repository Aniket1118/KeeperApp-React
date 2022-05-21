import React, { useState } from "react";

function CreateArea(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNotes((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(notes);

    event.preventDefault();
    setNotes({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={notes.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={notes.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
