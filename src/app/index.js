import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import DayContext from './contexts/day';
import UI from './ui';

import dayToString from '../utils/day-to-string';
import isValidUrlDate from '../utils/is-valid-url-date';


export default withRouter(({ location }) => {

  const [day, setDay] = React.useState(new Date());

  const [date, setDate] = React.useState(dayToString(day));

  const urlDate = location.pathname.substring(1);

  if (urlDate !== date && isValidUrlDate(urlDate)) {
    const changedDay = new Date(urlDate);
    const changedDate = dayToString(changedDay);

    setDay(changedDay);
    setDate(changedDate);
    return <Redirect to={`/${changedDate}`} />

  } else if (urlDate !== date) {
    return <Redirect to={`/${date}`} />
  }

  return (
    <DayContext.Provider value={{
      day,
      setDay,
    }}>
      <Route path={`/${date}`} render={() => <UI date={date} />} />
    </DayContext.Provider>
  )
})
