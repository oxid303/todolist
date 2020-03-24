import dayToString from '../day-to-string';

export default url => {
  const date = dayToString(new Date(url));
  return date === url && date !== 'NaN-NaN-NaN';
};
