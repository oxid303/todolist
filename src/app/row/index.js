import React from 'react';
import { Typography } from '@material-ui/core';
import NotesContext from '../contexts/notes';
import Button from '../button';

import isSameMouseDownAndUp from '../../utils/is-same-mouse-down-and-up';
import { IconEdit, IconRemove, IconStatus } from '../../assets/icons';
import styles from '../../styles';


export default ({ note, setEditId }) => {

  const { id, status, text } = note;
  const { updateStatus, remove } = React.useContext(NotesContext);

  const [isHidden, setIsHidden] = React.useState(true);

  const isSameMouse = isSameMouseDownAndUp();

  const handleEvent = (event) => {
    if (isSameMouse(event)) setIsHidden(!isHidden);
  };

  return (
    <div style={styles.gridRow}>

      <Button onClick={() => updateStatus(note)} tooltip="change status">
        <IconStatus color={status ? 'green' : 'black'} />
      </Button>

      <Typography
        style={styles.buildRowText(status, isHidden)}
        onMouseDown={handleEvent}
        onMouseUp={handleEvent}
        variant="body1"
        gutterBottom
      >{text}</Typography>

      <Button onClick={() => setEditId(id)} tooltip="edit">
        <IconEdit />
      </Button>

      <Button color="secondary" onClick={() => remove(note)} tooltip="delete">
        <IconRemove />
      </Button>

    </div>
  )
}
