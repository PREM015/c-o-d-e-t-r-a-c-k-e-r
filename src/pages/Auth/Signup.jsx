import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Alert,
  Switch
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useTheme } from '../../contexts/ThemeContext';
import { useTheme as useMuiTheme } from '@mui/material/styles';

const Signup = () => {
  const { isDarkMode, setIsDarkMode } = useTheme(); // Context dark mode
  const muiTheme = useMuiTheme(); // MUI theme for palette colors

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    updates: false,
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? '' : 'Name is required';
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Email is not valid';
    temp.password = formData.password.length >= 6 ? '' : 'Minimum 6 characters';
    setErrors(temp);
    return Object.values(temp).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      setShowAlert(false);
      // backend submission here
    } else {
      setShowAlert(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
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
        position: 'relative',
      }}
    >
      {/* Dark Mode Switch at Top Right */}
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

      <Typography variant="h4" align="center">
        Sign Up
      </Typography>

      {showAlert && <Alert severity="error">Please correct the highlighted errors.</Alert>}

      <TextField
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={Boolean(errors.name)}
        helperText={errors.name}
        required
        fullWidth
        InputLabelProps={{ style: { color: isDarkMode ? '#fff' : '#000' } }}
        InputProps={{
          style: {
            color: isDarkMode ? '#fff' : '#000',
          },
        }}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
        required
        fullWidth
        InputLabelProps={{ style: { color: isDarkMode ? '#fff' : '#000' } }}
        InputProps={{
          style: {
            color: isDarkMode ? '#fff' : '#000',
          },
        }}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={Boolean(errors.password)}
        helperText={errors.password}
        required
        autoComplete="current-password"
        fullWidth
        InputLabelProps={{ style: { color: isDarkMode ? '#fff' : '#000' } }}
        InputProps={{
          style: {
            color: isDarkMode ? '#fff' : '#000',
          },
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            name="updates"
            checked={formData.updates}
            onChange={handleChange}
            sx={{ color: isDarkMode ? '#fff' : '#000' }}
          />
        }
        label="Send me email updates"
        sx={{ color: isDarkMode ? '#fff' : '#000' }}
      />

      <Button type="submit" variant="contained" fullWidth>
        Sign Up
      </Button>

      <Button
        variant="outlined"
        startIcon={<GoogleIcon />}
        onClick={() => alert('Google Signup coming soon...')}
        fullWidth
      >
        Sign up with Google
      </Button>

      <Typography align="center">
        Already have an account?{' '}
        <a href="/login" style={{ color: isDarkMode ? '#90caf9' : '#1976d2' }}>
          Log in
        </a>
      </Typography>
    </Box>
  );
};

export default Signup;
