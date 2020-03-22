import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import DayContext from './contexts/day';
import UI from './ui';


export default withRouter(({ location }) => {

  const [day, setDay] = React.useState(new Date());

  const dateToString = (day) =>
    `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;

  const [date, setDate] = React.useState(dateToString(day));

  const url = location.pathname.substring(1);

  const isValidDateUrl = (url) => dateToString(new Date(url)) === url;

  if (url !== date && isValidDateUrl(url)) {
    const changedDay = new Date(url);
    const changedDayString = dateToString(changedDay);

    setDay(changedDay);
    setDate(changedDayString);
    return <Redirect to={`/${changedDayString}`} />

  } else if (url !== date) {
    return <Redirect to={`/${date}`} />
  }

  return (
    <DayContext.Provider value={{
      day,
      setDay,
      dateToString,
    }}>
      <Route path={`/${date}`} render={() => <UI date={date} />} />
    </DayContext.Provider>
  )
})
