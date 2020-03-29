export default (object, key, value = []) => {
  const modifiedObject = {
    ...object,
    [key]: value,
  };

  if (!value.length) delete modifiedObject[key];

  return modifiedObject;
};
