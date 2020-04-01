import _ from 'lodash';
import addToNewObj from '../../../utils/add-to-new-obj';

const isValidJSON = text => {
  try {
    JSON.parse(text);
  } catch (e) {
    return false;
  }
  return true;
};

export default (
  notes, date, setModifiedNotes, isTodayFinished, isAllFinished
) => ({

  confirmUpload: e => {
    if (!_.isEmpty(notes)) {
      const isConfirm = window.confirm(
        `
        This action will destroy all your notes on this site.
        You can save it first.
        Are you sure you want to continue?`
      );
      if (!isConfirm) e.preventDefault();
    }
  },

  upload: e => {

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
  },

  download: () => {
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
  },

  toggleStatusToday: () => {
    const status = !isTodayFinished;

    const currNotes = notes[date].map(note => ({ ...note, status }));
    const modifiedNotes = addToNewObj(notes, date, currNotes);
    setModifiedNotes(modifiedNotes);
  },

  toggleStatusAll: () => {
    const status = !isAllFinished;
    const modifiedNotes = {};

    for (const date in notes) {
      modifiedNotes[date] = notes[date].map(note => ({ ...note, status }));
    }
    setModifiedNotes(modifiedNotes);
  },

  removeTodayNotes: () => {
    if (!notes[date]) {
      alert('Nothing to delete');
      return;
    }
    const isConfirm = window.confirm('Delete today\'s notes?');
    if (isConfirm) {
      const modifiedNotes = addToNewObj(notes, date, undefined);
      setModifiedNotes(modifiedNotes);
    }
  },

  removeAllNotes: () => {
    if (_.isEmpty(notes)) {
      alert('Nothing to delete');
      return;
    }
    const isConfirm = window.confirm('Delete all your notes on this site?');
    if (isConfirm) {
      setModifiedNotes({});
    };
  },
});
