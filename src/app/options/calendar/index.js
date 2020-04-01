import React from 'react';
import DayPicker from 'react-day-picker/DayPicker';
import DaysContext from '../../contexts/day';
import NotesContext from '../../contexts/notes';
import createModifiers from '../../../utils/create-modifiers';
import styles from '../../../styles';
import './stylesDayPicker.css';


export default ({ monthDay, setMonthDay }) => {

  const { day, pushDayToUrl } = React.useContext(DaysContext);
  const { dates } = React.useContext(NotesContext);

  const calendarModifiers = createModifiers(day, dates);

  const handleDayClick = (changedDay, modifiers, dayPickerInput) => {
    pushDayToUrl(changedDay);
  };

  const onWheelHandler = event => {
    const scrollUp = event.nativeEvent.deltaY < 0 ? true : false;
    const monthNumber = monthDay.getMonth();
    const changedMonth = scrollUp ? monthNumber - 1 : monthNumber + 1;

    setMonthDay(new Date(monthDay.getFullYear(), changedMonth));
  };

  return (
    <div
      onWheel={onWheelHandler}
      onMouseOver={styles.hiddenOverflow}
      onMouseOut={styles.autoOverflow}
    >
      <DayPicker
        fixedWeeks
        enableOutsideDaysClick={false}
        onDayClick={handleDayClick}
        month={monthDay}
        onMonthChange={day => setMonthDay(day)}

        // firstDayOfWeek={1} // Starting from Monday
        selectedDays={day}
        modifiers={calendarModifiers.modifiers}
        modifiersStyles={calendarModifiers.modifiersStyles}
      />
    </div>
  )
}
