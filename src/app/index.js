import React from 'react';
import uniqueId from 'lodash/uniqueId';
import NotesContext from './contexts/notes';
import Form from './form';
import List from './list';

export default () => {

  const note = {
    id: uniqueId(),
    status: false,
    text: 'qwerty'
  }

  const [notes, setNotes] = React.useState([note]);

  const append = ({ text }) => {
    notes.push({
      id: uniqueId(),
      status: false,
      text: text,
    });
    setNotes([...notes]);
  };

  const update = ({ id, text }) => {
    const modNotes = notes.map(note => (
      note.id === id ? { ...note, text } : note
    ));
    setNotes([...modNotes]);
  };

  const updateStatus = ({ id }) => {
    const modNotes = notes.map(note => (
      note.id === id ? { ...note, status: !note.status } : note
    ));
    setNotes([...modNotes]);
  };

  const remove = ({ id }) => {
    const modNotes = notes.filter(note => note.id !== id);
    setNotes([...modNotes]);
  };

  return (
    <NotesContext.Provider value={{
      notes,
      setNotes,
      append,
      update,
      updateStatus,
      remove,
    }}>
      <Form />
      <List />
    </NotesContext.Provider>
  )
}
