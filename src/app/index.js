import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import DayContext from './contexts/day';
import UI from './ui';

import dayToString from '../utils/day-to-string';
import isValidUrlDate from '../utils/is-valid-url-date';


export default withRouter(({ location }) => {

  const [day, setDay] = React.useState(new Date());

  const [date, setDate] = React.useState(dayToString(day));

  const urlDate = location.search.substring(1);

  if (urlDate !== date && isValidUrlDate(urlDate)) {
    const changedDay = new Date(urlDate);
    const changedDate = dayToString(changedDay);

    setDay(changedDay);
    setDate(changedDate);
    return <Redirect to={`/todolist?${changedDate}`} />

  } else if (urlDate !== date) {
    return <Redirect to={`/todolist?${date}`} />
  }

  return (
    <DayContext.Provider value={{
      day,
      setDay,
    }}>
      <Route to={{
        pathname: "/todolist",
        search: `${date}`,
      }} render={() => <UI date={date} />} />
    </DayContext.Provider>
  )
})
