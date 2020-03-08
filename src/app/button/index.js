import React from 'react';
import { Button, Tooltip } from '@material-ui/core';

const MuiTooltip = ({ children, tooltip }) => {
  return tooltip ?
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
}) => {
  return (
    <MuiTooltip tooltip={tooltip}>

      <Button
        variant="contained"
        color={color}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >{children}</Button>

    </MuiTooltip>
  )
}
