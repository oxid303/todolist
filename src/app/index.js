import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import DayContext from './contexts/day';
import UI from './ui';

import dayToString from '../utils/day-to-string';
import isValidUrlDate from '../utils/is-valid-url-date';


export default withRouter(({ history, location }) => {

  const [day, setDay] = React.useState(new Date());

  const [date, setDate] = React.useState(dayToString(day));

  const urlDate = location.search.substring(1);

  const baseUrl = '/todolist/';

  const pushDayToUrl = day => {
    const changedUrl = `${baseUrl}?${dayToString(day)}`;
    history.push(changedUrl);
  };

  if (urlDate !== date && isValidUrlDate(urlDate)) {
    const changedDay = new Date(urlDate);
    const changedDate = dayToString(changedDay);

    setDay(changedDay);
    setDate(changedDate);
    return <Redirect to={`${baseUrl}?${changedDate}`} />

  } else if (urlDate !== date) {
    return <Redirect to={`${baseUrl}?${date}`} />
  }

  return (
    <DayContext.Provider value={{
      day,
      setDay,
      pushDayToUrl,
    }}>
      <Route to={{
        pathname: baseUrl,
        search: `${date}`,
      }} render={() => <UI date={date} />} />
    </DayContext.Provider>
  )
})
