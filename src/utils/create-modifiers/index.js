import dayToString from '../day-to-string';

export default (day, dates) => {
  const modifiers = {
    sundays: { daysOfWeek: [0] },
    selectedDay: new Date(day),
  };
  const modifiersStyles = {
    sundays: { color: 'salmon' },
    selectedDay: { color: 'white', backgroundColor: '#55caee' },
  };
  const today = dayToString(day);

  for (let i = 0; i < dates.length; i++) {
    const date = dates[i];

    if (date !== today) {
      modifiers[date] = new Date(date);
      modifiersStyles[date] = { backgroundColor: 'lightgreen' };
    }
  }

  return {
    modifiers,
    modifiersStyles,
  };
};
