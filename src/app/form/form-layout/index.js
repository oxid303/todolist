import React from 'react';
import { Field } from 'react-final-form';
import Button from '../../button';
import TextField from '../textfield';
import {
  IconClear,
  IconAppend,
  IconStatus,
  IconCancel,
  IconSave,
  IconRemove,
} from '../../../assets/icons';


export default ({
  form,
  pristine,
  statusColor,
  text,
  isEdit,
  fieldValidate,
  unmount
}) => {

  const label = isEdit ? 'change note' : 'add note';
  const placeholder = isEdit ? 'what changed?' : 'what\'s new?';

  return (
    <>
      {!isEdit &&
        <Button
          disabled={pristine}
          onClick={form.reset}
          tooltip={pristine ? false : "clear"}
        >
          <IconClear color={pristine ? 'grey' : 'black'} />
        </Button>}

      {isEdit &&
        <Button disabled>
          <IconStatus color={statusColor} />
        </Button>}

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
        <Button
          type="submit"
          tooltip="add note"
          disabled={pristine}
        ><IconAppend color={pristine ? 'grey' : 'black'} /></Button>}

      {isEdit &&
        <span>
          <Button
            color={pristine ? "primary" : "secondary"}
            onClick={unmount}
            tooltip={pristine ? "cancel" : "cancel changes"}
          ><IconCancel /></Button>

          <Button
            type="submit"
            tooltip="save"
            disabled={!form.getState().values.text}
          ><IconSave /></Button>

          <Button disabled><IconRemove color="grey" /></Button>
        </span>
      }
    </>
  )
}
