import React from 'react';
import NotesContext from '../contexts/notes';
import Button from '../button';
import TextField from './textfield';
import noop from 'lodash/noop';

import { Form, Field } from 'react-final-form';
import { composeValidators } from '../../utils/validators';
import { required, minLength, maxLength } from '../../utils/validators';

import { Grid } from '@material-ui/core';
import { IconClear } from '../../assets/icons';
import { IconAppend } from '../../assets/icons';
import { IconStatus } from '../../assets/icons';
import { IconCancel } from '../../assets/icons';
import { IconSave } from '../../assets/icons';
import { IconRemove } from '../../assets/icons';


export default ({ note = {}, isEdit = false, unmount = noop }) => {

  const { append, update, remove } = React.useContext(NotesContext);

  const minLength5 = minLength(5);
  const maxLength250 = maxLength(250);
  const fieldValidate = composeValidators(required, minLength5, maxLength250);

  const statusColor = note.status ? 'darkgreen' : 'grey';
  const label = isEdit ? 'change note' : 'add note';
  const placeholder = isEdit ? 'what changed?' : 'what\'s new?';
  const text = 'text';

  const onSubmit = (note) => {
    note.text = note.text.replace(/^\s+|\s+$/g, '');
    note.text = note.text.replace(/\s+/g, ' ');

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

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start">

            {!isEdit &&
              <Button
                disabled={pristine}
                onClick={form.reset}
                tooltip={pristine ? false : "clear"}
              >
                <IconClear color={pristine ? 'grey' : 'black'} />
              </Button>}

            {isEdit &&
              <Button disabled><IconStatus color={statusColor} /></Button>}

            <Field
              name={text}
              component="input"
              type="text"
              validate={fieldValidate}
            >
              {input => (
                <TextField
                  {...input}
                  isEdit={isEdit}
                  label={label}
                  placeholder={placeholder}
                />
              )}
            </Field>

            {!isEdit &&
              <Button type="submit" tooltip="add note"><IconAppend /></Button>}

            {isEdit &&
              <span>
                <Button
                  color={pristine ? "primary" : "secondary"}
                  onClick={unmount}
                  tooltip={pristine ? "cancel" : "cancel changes"}
                ><IconCancel /></Button>

                <Button type="submit" tooltip="save"><IconSave /></Button>

                <Button
                  color="secondary"
                  onClick={() => remove(note)}
                  disabled
                ><IconRemove color="grey" /></Button>
              </span>
            }
          </Grid>
        </form>
      )}
    />
  )
}
