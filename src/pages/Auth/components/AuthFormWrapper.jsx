import React from 'react';
import { Box, Paper } from '@mui/material';

const AuthFormWrapper = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
      <Paper elevation={4} sx={{ p: 4, width: 400 }}>
        {children}
      </Paper>
    </Box>
  );
};

export default AuthFormWrapper;
