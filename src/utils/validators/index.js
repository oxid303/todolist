import cutSpaces from '../cut-spaces';

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = value =>
  value && !(/^\s+$/.test(value)) ? undefined : 'Must not be empty';

export const minLength = (min = 10) => value =>
  value && cutSpaces(value).length < min ? `Must have ${min} characters or more` : undefined;

export const maxLength = (max = 100) => value =>
  value && cutSpaces(value).length > max ? `Must have ${max} characters or less` : undefined;

export const isUniqueString = (arrStrings = []) => value =>
  value && arrStrings.some(str => str === value) ? 'Must be unique note on today' : undefined;
