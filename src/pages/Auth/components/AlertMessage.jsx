import React from 'react';
import { Alert } from '@mui/material';

const AlertMessage = ({ severity = "info", message }) => {
  if (!message) return null;

  return (
    <Alert severity={severity} sx={{ mt: 2 }}>
      {message}
    </Alert>
  );
};

export default AlertMessage;
