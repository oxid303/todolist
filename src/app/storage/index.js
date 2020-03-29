import React from 'react';
import _ from 'lodash';
import NotesContext from '../contexts/notes';
import Button from '../button';

import addToNewObj from '../../utils/add-to-new-obj';
import styles from '../../styles';
import {
  IconUpload,
  IconDownload,
  IconClearToday,
  IconClearAll,
} from '../../assets/icons';

const isValidJSON = text => {
  try {
    JSON.parse(text);
  } catch (e) {
    return false;
  }
  return true;
};

export default () => {

  const { notes, date, setModifiedNotes } = React.useContext(NotesContext);

  const confirmUpload = (e) => {
    if (!_.isEmpty(notes)) {
      const isConfirm = window.confirm(
        `
        This action will destroy all your notes on this site.
        You can save it first.
        Are you sure you want to continue?`
      );
      if (!isConfirm) e.preventDefault();
    }
  };

  const upload = (e) => {

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = event => {
      const text = event.target.result;

      if (!file.type.match(/json.*/)) {
        alert('It is not a json file');

      } else if (!text) {
        alert('File is empty');

      } else if (!isValidJSON(text)) {
        alert('This file have some problems, upload denied');

      } else {
        const parsedNotes = JSON.parse(text);
        setModifiedNotes(parsedNotes);
      }
    };
    reader.readAsText(file);
    document.getElementById('contained-button-file').value = '';
  };

  const download = () => {
    if (_.isEmpty(notes)) {
      alert('There is nothing to save ...yet :)');
      return;
    }
    const file = new Blob(
      [JSON.stringify(notes)],
      { type: 'application/JSON' }
    );
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = `notes-${Date.now()}.json`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const clearTodayNotes = () => {
    if (!notes[date]) {
      alert('Nothing to delete');
      return;
    }
    const isConfirm = window.confirm('Delete today\'s notes?');
    if (isConfirm) {
      const modifiedNotes = addToNewObj(notes, date, undefined);
      setModifiedNotes(modifiedNotes);
    }
  };

  const clearAllNotes = () => {
    if (_.isEmpty(notes)) {
      alert('Nothing to delete');
      return;
    }
    const isConfirm = window.confirm('Delete all your notes on this site?');
    if (isConfirm) {
      setModifiedNotes({});
    };
  };

  return (
    <div style={styles.storage}>
      <input
        type="file"
        id="contained-button-file"
        accept="application/JSON"
        onChange={upload}
        style={styles.displayNone}
      />
      <label htmlFor="contained-button-file">
        <Button
          component="span"
          onClick={confirmUpload}
          tooltip="upload notes"
        ><IconUpload /></Button>
      </label>

      <Button
        onClick={download}
        tooltip="download notes"
      ><IconDownload /></Button>

      <Button
        color="secondary"
        onClick={clearTodayNotes}
        tooltip="delete today's notes"
      ><IconClearToday /></Button>

      <Button
        color="secondary"
        onClick={clearAllNotes}
        tooltip="delete all notes !!!"
      ><IconClearAll /></Button>
    </div>
  );
}
