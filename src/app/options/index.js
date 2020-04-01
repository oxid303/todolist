import React from 'react';
import { Collapse } from '@material-ui/core';
import DayContext from '../contexts/day';
import Button from '../button';
import Menu from './menu';
import Calendar from './calendar';
import { IconMenu, IconFocusOnDay } from '../../assets/icons';
import styles from '../../styles';


export default () => {

  const { day, pushDayToUrl } = React.useContext(DayContext);

  const [monthDay, setMonthDay] = React.useState(day);

  React.useEffect(() => {
    setMonthDay(day);
  }, [day]);

  const focusOnCurrMonth = focusedDay => {
    if (focusedDay.toString() !== monthDay.toString()) {
      setMonthDay(focusedDay);
    }
  };

  const moveOnToday = () => {
    const day = new Date(
      new Date().setHours(0, 0, 0, 0)
    );
    focusOnCurrMonth(day);
    pushDayToUrl(day);
  };

  const [open, setOpen] = React.useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div style={styles.wrapperOptions}>
      <div style={styles.topOffset}></div>
      <div style={styles.containerOptions}>

        <Button
          onClick={() => focusOnCurrMonth(day)}
          tooltip="focus on current day"
        ><IconFocusOnDay /></Button>

        <Button onClick={moveOnToday} tooltip="move on today">
          <svg height="20" width="114">
            <text x="20" y="15" style={styles.textBold}>on today</text>
          </svg>
        </Button>

        <Button onClick={handleToggleMenu} tooltip="menu">
          <IconMenu />
        </Button>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <div style={styles.wrapperMenu}>
            <Menu />
          </div>
        </Collapse>

        <div style={styles.wrapperCalendar}>
          <Calendar monthDay={monthDay} setMonthDay={setMonthDay} />
        </div>
      </div>
    </div>
  )
}
