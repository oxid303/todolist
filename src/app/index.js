import React from 'react';
import NotesContext from './contexts/notes';
import Form from './form';
import List from './list';
import uniqueId from 'lodash/uniqueId';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';
import styles from '../styles';


export default () => {

  const [notes, setNotes] = React.useState([]);

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
            }}>
              <div style={styles.wrapperForm}><Form /></div>

              {notes.length !== 0 &&
                <div style={styles.wrapperList}><List /></div>}

            </NotesContext.Provider>
          </MuiThemeProvider>
        </div>
      </div>
    </div>
  )
}
