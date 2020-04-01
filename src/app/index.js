import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import DayContext from './contexts/day';
import UI from './ui';

import dayToString from '../utils/day-to-string';
import isValidUrlDate from '../utils/is-valid-url-date';


export default withRouter(({ history, location }) => {

  const [day, setDay] = React.useState(new Date(
    new Date().setHours(0, 0, 0, 0)
  ));
  const [date, setDate] = React.useState(dayToString(day));

  const baseUrl = '/todolist/';
  const urlDate = location.search.substring(1);

  const pushDayToUrl = day => {
    const changedDate = dayToString(day);

    if (changedDate !== urlDate) {
      const changedUrl = `${baseUrl}?${changedDate}`;
      history.push(changedUrl);
    }
  };

  if (urlDate !== date) {

    if (isValidUrlDate(urlDate)) {
      const changedDay = new Date(urlDate);
      const changedDate = dayToString(changedDay);

      setDay(changedDay);
      setDate(changedDate);
      return <Redirect to={`${baseUrl}?${changedDate}`} />

    } else {
      return <Redirect to={`${baseUrl}?${date}`} />
    }
  }

  return (
    <DayContext.Provider value={{
      day,
      pushDayToUrl,
    }}>
      <Route to={{
        pathname: baseUrl,
        search: `${date}`,
      }} render={() => <UI date={date} />} />
    </DayContext.Provider>
  )
})
