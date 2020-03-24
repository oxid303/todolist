import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import NotesContext from '../contexts/notes';
import Form from '../form';
import List from '../list';
import Calendar from '../calendar';

import localStorageNotes from '../../utils/local-storage-notes';
import getObjKeysNames from '../../utils/get-obj-keys-names';
import addToNewObj from '../../utils/add-to-new-obj';
import nextIdInArrayObjects from '../../utils/next-id-in-array-objects';
import muiTheme from '../../styles/mui-theme';
import styles from '../../styles';


export default ({ date }) => {

  const [notes, setNotes] = React.useState(localStorageNotes.get());

  const currNotes = notes[date] || [];

  const setCurrNotes = (currNotes) => {
    const modifiedNotes = addToNewObj(notes, date, currNotes);

    localStorageNotes.set(modifiedNotes);
    setNotes(modifiedNotes);
  };

  const dates = getObjKeysNames(notes);

  const append = ({ text }) => {
    currNotes.push({
      id: nextIdInArrayObjects(currNotes),
      status: false,
      text: text,
    });
    setCurrNotes(currNotes);
  };

  const update = ({ id, text }) => {
    setCurrNotes(
      currNotes.map(note => note.id === id ?
        { ...note, text } :
        note
      )
    );
  };

  const updateStatus = ({ id }) => {
    setCurrNotes(
      currNotes.map(note => note.id === id ?
        { ...note, status: !note.status } :
        note
      )
    );
  };

  const remove = ({ id }) => {
    setCurrNotes(
      currNotes.filter(note => note.id !== id)
    );
  };

  return (
    <MuiThemeProvider theme={muiTheme}>
      <NotesContext.Provider value={{
        currNotes,
        setCurrNotes,
        append,
        update,
        updateStatus,
        remove,
        dates,
      }}>
        <div style={styles.wrapper}>
          <div style={styles.wrapperGrid}>
            <div style={styles.buildVerticalGridItems(92)}>

              <div style={styles.gridFormAndCalendar}>
                <Form />
                <Calendar />
              </div>

              {currNotes.length !== 0 &&
                <div style={styles.wrapperList}><List /></div>}

            </div>
          </div>
        </div>
      </NotesContext.Provider>
    </MuiThemeProvider>
  )
}
