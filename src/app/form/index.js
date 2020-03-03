import React from 'react';
import { Form, Field } from 'react-final-form';
import noop from 'lodash/noop';
import NotesContext from '../contexts/notes';

export default ({ initialValues = {}, isEdit = false, afterSubmit = noop }) => {

  const { append, update } = React.useContext(NotesContext);

  const onSubmit = (note) => {
    isEdit ? update(note) : append(note);
  };

  const status = initialValues.status ? '1' : '0';
  const placeholder = isEdit ? 'change note' : 'add note';

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form }) => (
        <form onSubmit={e => {
          handleSubmit(e);
          form.reset();
          afterSubmit();
        }}>

          {!isEdit && <button type="button" onClick={() => form.reset()}>clear</button>}

          {isEdit && <button type="button" disabled>{status}</button>}

          <Field
            name="text"
            component="input"
            type="text"
            placeholder={placeholder} />

          {!isEdit && <button type="submit">add note</button>}

          {isEdit &&
            <span>
              <button type="button" onClick={afterSubmit}>cancel</button>
              <button type="submit">save</button>
              <button type="button" disabled>delete</button>
            </span>
          }
        </form>
      )}
    />
  )
}
