import React from 'react';
import _ from 'lodash';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import NotesContext from '../../contexts/notes';
import createUtils from './utils';
import styles from '../../../styles';
import {
  IconUpload,
  IconDownload,
  IconStatusSquare,
  IconMinusSquare,
  IconStatusCalendar,
  IconMinusCalendar,
  IconClearToday,
  IconClearAll,
} from '../../../assets/icons';

const useStyles = makeStyles(theme => ({
  item: {
    color: '#607d8b',
  }
}));


export default () => {

  const classes = useStyles();

  const { notes, date, setModifiedNotes } = React.useContext(NotesContext);

  const isExistNotesToday = !_.isEmpty(notes[date]);
  const isExistNotes = !_.isEmpty(notes);

  const isTodayFinished = isExistNotesToday &&
    notes[date].every(note => note.status);

  const isAllFinished = isExistNotes &&
    Object.entries(notes).every(([date, dateNotes]) =>
      dateNotes.every(note => note.status));

  const utils = createUtils(
    notes, date, setModifiedNotes, isTodayFinished, isAllFinished
  );

  return (
    <List component="div" disablePadding dense>

      <input
        type="file"
        id="contained-button-file"
        accept="application/JSON"
        onChange={utils.upload}
        style={styles.displayNone}
      />
      <label htmlFor="contained-button-file">
        <ListItem
          button
          onClick={utils.confirmUpload}
          className={classes.item}
        >
          <ListItemIcon>
            <IconUpload />
          </ListItemIcon>
          <ListItemText primary="Upload calendar notes" />
        </ListItem>
      </label>

      <ListItem
        button
        onClick={utils.download}
        className={classes.item}
        divider
      >
        <ListItemIcon>
          <IconDownload />
        </ListItemIcon>
        <ListItemText primary="download calendar notes" />
      </ListItem>


      <ListItem
        button
        disabled={!isExistNotesToday}
        onClick={utils.toggleStatusToday}
        className={classes.item}
      >
        <ListItemIcon>
          {(isExistNotesToday && !isTodayFinished) ?
            <IconStatusSquare /> :
            <IconMinusSquare />}
        </ListItemIcon>

        <ListItemText primary={
          (!isExistNotesToday && 'nothing to change') ||
          (isTodayFinished ? 'start today again' : 'complete today')
        } />
      </ListItem>

      <ListItem
        button
        disabled={!isExistNotes}
        onClick={utils.toggleStatusAll}
        className={classes.item}
        divider
      >
        <ListItemIcon>
          {(isExistNotes && !isAllFinished) ?
            <IconStatusCalendar /> :
            <IconMinusCalendar />}
        </ListItemIcon>

        <ListItemText primary={
          (!isExistNotes && 'nothing to change') ||
          (isAllFinished ? 'start all over again' : 'complete all')
        } />
      </ListItem>


      <ListItem
        button
        onClick={utils.removeTodayNotes}
        className={classes.item}
      >
        <ListItemIcon>
          <IconClearToday />
        </ListItemIcon>
        <ListItemText primary="delete today's notes" />
      </ListItem>

      <ListItem
        button
        onClick={utils.removeAllNotes}
        className={classes.item}
      >
        <ListItemIcon>
          <IconClearAll />
        </ListItemIcon>
        <ListItemText primary="delete all calendar notes" />
      </ListItem>

    </List>
  );
}
