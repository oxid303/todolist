import React from 'react';
import { Form } from 'react-final-form';
import noop from 'lodash/noop';
import NotesContext from '../contexts/notes';
import Layout from './form-layout';

import cutSpaces from '../../utils/cut-spaces';
import notesToStrings from '../../utils/notes-to-strings';
import {
  composeValidators,
  required,
  minLength,
  maxLength,
  isUniqueString
} from '../../utils/validators';


export default ({ note = {}, isEdit = false, unmount = noop }) => {

  const { append, update, currNotes } = React.useContext(NotesContext);

  const minLength5 = minLength(5);
  const maxLength250 = maxLength(250);

  const currNotesStrings = notesToStrings(currNotes);
  const isUniqueStringOnToday = isUniqueString(currNotesStrings);

  const validators = composeValidators(
    required,
    minLength5,
    maxLength250,
    isUniqueStringOnToday
  );

  const statusColor = note.status ? 'darkgreen' : 'grey';
  const text = 'text';

  const onSubmit = (note) => {
    note.text = cutSpaces(note.text);

    const action = isEdit ? update : append;
    action(note);
  };

  const onPressEsc = isEdit && React.useCallback((e) => {
    if (e.keyCode === 27) {
      unmount();
    }
  }, [unmount]);

  isEdit && React.useEffect(() => {
    document.addEventListener("keydown", onPressEsc, false);

    return () => {
      document.removeEventListener("keydown", onPressEsc, false);
    };
  }, [onPressEsc]);


  return (
    <Form
      onSubmit={onSubmit}
      initialValues={note}
      render={({ handleSubmit, form, pristine, valid }) => (

        <form
          onBlur={() => form.resetFieldState(text)}
          onSubmit={e => {
            handleSubmit(e);
            if (valid) {
              form.resetFieldState(text);
              form.reset();
              unmount();
            }
          }}>

          <Layout
            form={form}
            pristine={pristine}
            statusColor={statusColor}
            text={text}
            isEdit={isEdit}
            fieldValidate={validators}
            unmount={unmount}
          />

        </form>
      )}
    />
  )
}
