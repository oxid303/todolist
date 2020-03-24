import React from 'react';
import NotesContext from '../contexts/notes';
import Form from '../form';
import Row from '../row';

import onFocusBlur from '../../utils/on-focus-blur';
import styles from '../../styles';


export default () => {

  const { currNotes } = React.useContext(NotesContext);

  const [editId, setEditId] = React.useState(null);

  const onBlurCallback = () => setEditId(null);

  const handleFocusBlur = onFocusBlur(onBlurCallback);

  let previousForm = false;

  return (
    <div style={styles.buildVerticalGridItems(52)}>

      {currNotes.map((note, index) => {

        if (note.id === editId) {
          previousForm = true;

          return (
            <div
              key={note.id}
              style={styles.buildPaddingTop(1)}
              onFocus={handleFocusBlur.onFocus}
              onBlur={handleFocusBlur.onBlur}
            >
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
