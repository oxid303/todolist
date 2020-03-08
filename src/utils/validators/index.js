const cutSpaces = (str) =>
  str.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = value =>
  value && !(/^\s+$/.test(value)) ? undefined : 'Must not be empty';

export const minLength = min => value =>
  value && cutSpaces(value).length < min ? `Must be ${min} characters or more` : undefined;

export const maxLength = max => value =>
  value && cutSpaces(value).length > max ? `Must be ${max} characters or less` : undefined;
