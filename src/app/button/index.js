import React from 'react';
import { Button, Tooltip } from '@material-ui/core';

const MuiTooltip = ({ children, tooltip, disabled }) => {
  return tooltip && !disabled ?
    <Tooltip title={tooltip} enterDelay={700} arrow>{children}</Tooltip> :
    <span>{children}</span>
};


export default ({
  children,
  color = 'primary',
  type = 'button',
  onClick,
  disabled = false,
  tooltip,
  component = 'button',
}) => {
  return (
    <MuiTooltip tooltip={tooltip} disabled={disabled}>

      <Button
        variant="contained"
        component={component}
        color={color}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >{children}</Button>

    </MuiTooltip>
  )
}
