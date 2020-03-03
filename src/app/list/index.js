import React from 'react';
import NotesContext from '../contexts/notes';
import Form from '../form';
import Row from '../row';

export default () => {

  const { notes } = React.useContext(NotesContext);

  const [editId, setEditId] = React.useState(null);

  return (
    <div>
      {notes.map(note => note.id === editId ?
        <Form
          key={note.id}
          isEdit={true}
          afterSubmit={() => setEditId(null)}
          initialValues={note} /> :
        <Row
          key={note.id}
          note={note}
          setEditId={setEditId} />
      )}
    </div>
  )
}
