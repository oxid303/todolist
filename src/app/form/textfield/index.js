import React from 'react';
import { TextField } from '@material-ui/core';
import styles from '../../../styles';

export default ({
  input: { name, onChange, value },
  meta: { error, touched },
  helperText,
  label,
  placeholder,
  isEdit,
  ...rest
}) => {
  return (
    <TextField
      autoFocus
      onFocus={e => isEdit && e.target.select()}

      name={name}
      placeholder={placeholder}
      style={styles.buildTextField(isEdit)}

      value={value}
      onChange={onChange}
      inputProps={{ style: styles.textFieldInput }}

      label={label}
      InputLabelProps={{ style: styles.textFieldLabel }}

      error={error && touched}
      helperText={touched ? error : helperText}
      FormHelperTextProps={{ style: styles.textFieldHelperText }}

      // multiline
      // rowsMax="4"
      {...rest}
    />
  )
};
