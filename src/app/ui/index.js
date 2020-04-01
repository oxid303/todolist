import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import NotesContext from '../contexts/notes';
import Form from '../form';
import List from '../list';
import Options from '../options';

import localStorageNotes from '../../utils/local-storage-notes';
import getObjKeysNames from '../../utils/get-obj-keys-names';
import addToNewObj from '../../utils/add-to-new-obj';
import nextIdInArrayObjects from '../../utils/next-id-in-array-objects';
import muiTheme from '../../styles/mui-theme';
import styles from '../../styles';
import moduleStyles from './styles.module.css';


export default ({ date }) => {

  const [notes, setNotes] = React.useState(localStorageNotes.get());

  const setModifiedNotes = notes => {
    localStorageNotes.set(notes);
    setNotes(notes);
  };

  const setCurrNotes = currNotes => {
    const modifiedNotes = addToNewObj(notes, date, currNotes);
    setModifiedNotes(modifiedNotes);
  };

  const dates = getObjKeysNames(notes);

  const currNotes = notes[date] || [];

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
        notes,
        currNotes,
        setModifiedNotes,
        date,
        dates,
        append,
        update,
        updateStatus,
        remove,
      }}>
        <div style={styles.wrapper}>
          <div className={moduleStyles.container}>

            <div className={moduleStyles.leftOffset}></div>

            <div style={styles.wrapperNotes}>

              <div style={styles.wrapperForm}><Form /></div>

              {currNotes.length !== 0 &&
                <div style={styles.wrapperList}><List /></div>}

            </div>

            <Options />
          </div>
        </div>
      </NotesContext.Provider>
    </MuiThemeProvider>
  )
}
