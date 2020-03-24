import React from 'react';
import { Form } from 'react-final-form';
import noop from 'lodash/noop';
import NotesContext from '../contexts/notes';
import Layout from './layout';

import cutSpaces from '../../utils/cut-spaces';
import {
  composeValidators,
  required,
  minLength,
  maxLength
} from '../../utils/validators';


export default ({ note = {}, isEdit = false, unmount = noop }) => {

  const { append, update } = React.useContext(NotesContext);

  const minLength5 = minLength(5);
  const maxLength250 = maxLength(250);

  const validators = composeValidators(required, minLength5, maxLength250);

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
