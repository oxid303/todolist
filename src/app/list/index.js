import React from 'react';
import NotesContext from '../contexts/notes';
import Form from '../form';
import Row from '../row';
import styles from '../../styles';

export default () => {

  const { notes } = React.useContext(NotesContext);

  const [editId, setEditId] = React.useState(null);

  let previousForm = false;

  return (
    <div style={styles.grid52}>

      {notes.map((note, index) => {

        if (note.id === editId) {
          previousForm = true;

          return (
            <div key={note.id} style={styles.buildPaddingTop(1)}>
              <Form
                key={note.id}
                isEdit={true}
                unmount={() => setEditId(null)}
                note={note} />
            </div>
          );

        } else {
          const isLine = !(index === 0 || previousForm);
          const paddingTop = isLine ? 0 : 1;
          previousForm = false;

          return (
            <div key={note.id} style={styles.buildPaddingTop(paddingTop)}>

              {isLine && <div style={styles.topLine}></div>}

              <Row
                note={note}
                setEditId={setEditId} />
            </div>
          );
        }
      })}

    </div>
  )
}
