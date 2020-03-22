import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import NotesContext from '../contexts/notes';
import Form from '../form';
import List from '../list';
import Calendar from '../calendar';
import theme from '../../styles/theme';
import styles from '../../styles';


export default ({date}) => {

  const [storageNotes, setStorageNotes] = React.useState(
    JSON.parse(localStorage.notes || '""') || {}
  );

  const datesNotes = [];

  for (const date in storageNotes) {
    datesNotes.push(date);
  }

  const notes = storageNotes[date] || [];

  const setNotes = (notes) => {
    const modifiedNotes = {
      ...storageNotes,
      [date]: notes,
    };

    if (!notes.length) delete modifiedNotes[date];

    localStorage.notes = JSON.stringify(modifiedNotes);
    setStorageNotes(modifiedNotes);
  };


  const append = ({ text }) => {
    const id = notes.length ?
      notes[notes.length - 1].id + 1 :
      1;

    notes.push({
      id,
      status: false,
      text: text,
    });
    setNotes(notes);
  };

  const update = ({ id, text }) => {
    setNotes(
      notes.map(note => note.id === id ?
        { ...note, text } :
        note
      )
    );
  };

  const updateStatus = ({ id }) => {
    setNotes(
      notes.map(note => note.id === id ?
        { ...note, status: !note.status } :
        note
      )
    );
  };

  const remove = ({ id }) => {
    setNotes(
      notes.filter(note => note.id !== id)
    );
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.wrapperGrid}>
        <div style={styles.grid92}>
          <MuiThemeProvider theme={theme}>
            <NotesContext.Provider value={{
              notes,
              setNotes,
              append,
              update,
              updateStatus,
              remove,
              datesNotes,
            }}>
              <div style={styles.wrapperFormAndCalendar}>
                <Form />
                <Calendar />
              </div>

              {notes.length !== 0 &&
                <div style={styles.wrapperList}><List /></div>}

            </NotesContext.Provider>
          </MuiThemeProvider>
        </div>
      </div>
    </div>
  )
}
