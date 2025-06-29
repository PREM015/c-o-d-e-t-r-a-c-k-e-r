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
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase"; // ✅ Your Firebase auth instance

const ForgotPassword = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      setSubmitted(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setError('');
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
      setSubmitted(false);
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
        mt: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        bgcolor: isDarkMode ? '#121212' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000',
        p: 3,
        borderRadius: 2,
        boxShadow: 4,
        position: 'relative',
      }}
    >
      {/* Theme Toggle */}
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
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
      </Box>

      <Typography variant="h4" align="center" gutterBottom>
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
        autoComplete="email"
        fullWidth
        InputLabelProps={{ style: { color: isDarkMode ? '#fff' : '#000' } }}
        InputProps={{
          style: {
            color: isDarkMode ? '#fff' : '#000',
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
