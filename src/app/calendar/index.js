import React from 'react';
import DayPicker from 'react-day-picker/DayPicker';
import { withRouter } from 'react-router-dom';

import DaysContext from '../contexts/day';
import NotesContext from '../contexts/notes';
import Button from '../button';

import { IconCalendar } from '../../assets/icons';
import styles from '../../styles';
import './stylesDayPicker.css';


export default withRouter(({ history }) => {

  const { day, setDay, dateToString } = React.useContext(DaysContext);
  const { datesNotes } = React.useContext(NotesContext);

  const [month, setMonth] = React.useState(day);
  const [isShow, setIsShow] = React.useState(false);

  const modifiers = {
    sundays: { daysOfWeek: [0] },
    selectedDay: new Date(day),
  };
  const modifiersStyles = {
    sundays: { color: 'salmon' },
    selectedDay: { color: 'white', backgroundColor: '#55caee' },
  };
  const today = dateToString(day);

  for (let i = 0; i < datesNotes.length; i++) {
    const date = datesNotes[i];

    if (date !== today) {
      modifiers[date] = new Date(date);
      modifiersStyles[date] = { backgroundColor: 'lightgreen' };
    }
  }


  const handleDayClick = (changedDay, modifiers, dayPickerInput) => {
    const dayString = dateToString(changedDay);
    setDay(changedDay);

    setTimeout(() => {
      history.push(dayString);
      setMonth(changedDay);
      setIsShow(false);
    }, 50);
  };

  let timeOutId = null;

  const onBlurHandler = () => {
    timeOutId = setTimeout(() => {
      setMonth(day);
      setIsShow(false);
    });
  };

  const onFocusHandler = () => {
    clearTimeout(timeOutId);
  };

  const onToggleHandler = () => {
    isShow && setMonth(day);
    setIsShow(!isShow);
  };

  const onWheelHandler = (event) => {
    const scrollUp = event.nativeEvent.deltaY > 0 ? true : false;
    const monthNumber = month.getMonth();
    const changedMonth = scrollUp ? monthNumber - 1 : monthNumber + 1;

    setMonth(new Date(month.getFullYear(), changedMonth));
  };


  return (
    <div
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
    >

      <Button onClick={onToggleHandler} tooltip="calendar">
        <IconCalendar />
      </Button>

      <div style={styles.buildModal(isShow)}>

        <div
          onWheel={onWheelHandler}
          onMouseOver={styles.hiddenOverflow}
          onMouseOut={styles.autoOverflow}
          style={styles.buildCalendar(isShow)}
        >
          <DayPicker
            onDayClick={handleDayClick}
            todayButton="Today"
            onTodayButtonClick={handleDayClick}
            month={month}
            onMonthChange={(day) => setMonth(day)}

            // firstDayOfWeek={1} // Starting from Monday
            fixedWeeks
            enableOutsideDaysClick={false}
            selectedDays={day}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
          />
        </div>
      </div>
    </div>
  )
})
