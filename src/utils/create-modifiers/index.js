import dayToString from '../day-to-string';

export default (day, dates) => {
  const modifiers = {
    sundays: { daysOfWeek: [0] },
    selectedDay: day,
  };
  const modifiersStyles = {
    sundays: { color: 'salmon' },
    selectedDay: { color: 'white', backgroundColor: '#55caee' },
  };
  const currDate = dayToString(day);

  for (let i = 0; i < dates.length; i++) {
    const date = dates[i];

    if (date !== currDate) {
      modifiers[date] = new Date(date);
      modifiersStyles[date] = { backgroundColor: 'lightgreen' };
    }
  }

  return {
    modifiers,
    modifiersStyles,
  };
};
