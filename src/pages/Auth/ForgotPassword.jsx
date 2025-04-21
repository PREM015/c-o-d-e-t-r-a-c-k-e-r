import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Switch
} from '@mui/material';
import { useTheme } from "../../contexts/ThemeContext";

import { useTheme as useMuiTheme } from '@mui/material/styles';

const ForgotPassword = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const muiTheme = useMuiTheme();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      setSubmitted(false);
    } else {
      console.log('Reset link sent to:', email);
      setError('');
      setSubmitted(true);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 400,
        margin: 'auto',
        mt: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        bgcolor: isDarkMode ? '#121212' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" align="center">
        Forgot Password
      </Typography>

      <Typography align="center">
        Enter your email and we’ll help you reset your password.
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {submitted && <Alert severity="success">Reset link sent! Check your inbox.</Alert>}

      <TextField
        label="Email Address"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        InputLabelProps={{ style: { color: isDarkMode ? '#fff' : '#000' } }}
        InputProps={{
          style: {
            color: isDarkMode ? '#fff' : '#000',
          },
        }}
      />

      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        sx={{
          '& .MuiSwitch-thumb': {
            backgroundColor: isDarkMode ? '#fff' : '#000',
          },
          '& .MuiSwitch-track': {
            backgroundColor: isDarkMode ? '#666' : '#ccc',
          },
        }}
      />
     

      <Button type="submit" variant="contained" fullWidth>
        Send Reset Link
      </Button>

      <Typography align="center" mt={1}>
        Back to{' '}
        <a href="/login" style={{ color: isDarkMode ? '#90caf9' : '#1976d2' }}>
          Login
        </a>
      </Typography>
    </Box>
  );
};

export default ForgotPassword;
