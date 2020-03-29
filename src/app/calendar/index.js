import React from 'react';
import DayPicker from 'react-day-picker/DayPicker';
import { withRouter } from 'react-router-dom';

import DaysContext from '../contexts/day';
import NotesContext from '../contexts/notes';
import Button from '../button';

import dayToString from '../../utils/day-to-string';
import createModifiers from '../../utils/create-modifiers';
import onFocusBlur from '../../utils/on-focus-blur';
import { IconCalendar } from '../../assets/icons';
import styles from '../../styles';
import './stylesDayPicker.css';


export default withRouter(({ history }) => {

  const { day, setDay } = React.useContext(DaysContext);
  const { dates } = React.useContext(NotesContext);

  const [month, setMonth] = React.useState(day);
  const [isShow, setIsShow] = React.useState(false);

  const calendarModifiers = createModifiers(day, dates);

  const onBlurCallback = () => {
    setMonth(day);
    setIsShow(false);
  };

  const handleFocusBlur = onFocusBlur(onBlurCallback);

  const handleDayClick = (changedDay, modifiers, dayPickerInput) => {
    const changedUrl = `/todolist?${dayToString(changedDay)}`;
    setDay(changedDay);

    setTimeout(() => {
      history.push(changedUrl);
      setMonth(changedDay);
      setIsShow(false);
    }, 50);
  };

  const onToggleHandler = () => {
    isShow && setMonth(day);
    setIsShow(!isShow);
  };

  const onWheelHandler = (event) => {
    const scrollUp = event.nativeEvent.deltaY < 0 ? true : false;
    const monthNumber = month.getMonth();
    const changedMonth = scrollUp ? monthNumber - 1 : monthNumber + 1;

    setMonth(new Date(month.getFullYear(), changedMonth));
  };


  return (
    <div
      onFocus={handleFocusBlur.onFocus}
      onBlur={handleFocusBlur.onBlur}
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
            modifiers={calendarModifiers.modifiers}
            modifiersStyles={calendarModifiers.modifiersStyles}
          />
        </div>
      </div>
    </div>
  )
})
