import React from 'react';
import NotesContext from '../contexts/notes';

export default ({ note, setEditId }) => {

  const { id, status, text } = note;
  const { updateStatus, remove } = React.useContext(NotesContext);

  return (
    <div>
      <button onClick={() => updateStatus(note)}>{status ? '1' : '0'}</button>
      {text}
      <button onClick={() => setEditId(id)}>edit</button>
      <button onClick={() => remove(note)}>delete</button>
    </div>
  )
}
