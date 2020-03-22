import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import NotesContext from '../contexts/notes';
import Button from '../button';
import { IconEdit, IconRemove, IconStatus } from '../../assets/icons';
import styles from '../../styles';


export default ({ note, setEditId }) => {

  const { id, status, text } = note;
  const { updateStatus, remove } = React.useContext(NotesContext);

  const [isHidden, setIsHidden] = React.useState(true);

  const handleEvent = ((xDown = 0, yDown = 0, xUp = 0, yUp = 0) => (e) => {

    if (e.type === 'mousedown' && e.button === 0) {
      xDown = e.nativeEvent.x;
      yDown = e.nativeEvent.y;
    }
    if (e.type === 'mouseup' && e.button === 0) {
      xUp = e.nativeEvent.x;
      yUp = e.nativeEvent.y;

      if (xDown === xUp && yDown === yUp) {
        setIsHidden(!isHidden);
      }
    }
  })();

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
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

    </Grid>
  )
}
