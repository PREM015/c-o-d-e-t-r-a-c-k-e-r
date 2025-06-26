import React from 'react';
import { TextField } from '@mui/material';

const FormInput = ({ label, name, type, value, onChange, error }) => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      error={Boolean(error)}
      helperText={error}
      sx={{ mb: 2 }}
      autoComplete={name}
    />
  );
};

export default FormInput;
