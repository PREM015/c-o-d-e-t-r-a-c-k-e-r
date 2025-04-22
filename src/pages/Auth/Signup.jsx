import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Alert,
  Switch,
  Tooltip
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useTheme } from '../../contexts/ThemeContext';

const Signup = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

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
      console.log('Signup Data:', formData);
      setShowAlert(false);
      // API call goes here
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
        mx: 'auto',
        mt: 5,
        p: 4,
        borderRadius: 3,
        boxShadow: isDarkMode ? 4 : 3,
        bgcolor: isDarkMode ? '#1e1e1e' : '#fafafa',
        color: isDarkMode ? '#fff' : '#000',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        position: 'relative',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      {/* Dark Mode Toggle */}
      <Tooltip title="Toggle Dark Mode" arrow>
        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            sx={{
              '& .MuiSwitch-thumb': {
                backgroundColor: isDarkMode ? '#fff' : '#000',
              },
              '& .MuiSwitch-track': {
                backgroundColor: isDarkMode ? '#555' : '#ccc',
              },
            }}
          />
        </Box>
      </Tooltip>

      <Typography variant="h4" align="center" fontWeight="bold">
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
        variant="outlined"
        InputLabelProps={{ style: { color: isDarkMode ? '#ccc' : '#555' } }}
        InputProps={{
          style: {
            color: isDarkMode ? '#fff' : '#000',
            backgroundColor: isDarkMode ? '#2a2a2a' : '#fff',
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
        variant="outlined"
        InputLabelProps={{ style: { color: isDarkMode ? '#ccc' : '#555' } }}
        InputProps={{
          style: {
            color: isDarkMode ? '#fff' : '#000',
            backgroundColor: isDarkMode ? '#2a2a2a' : '#fff',
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
        fullWidth
        variant="outlined"
        autoComplete="new-password"
        InputLabelProps={{ style: { color: isDarkMode ? '#ccc' : '#555' } }}
        InputProps={{
          style: {
            color: isDarkMode ? '#fff' : '#000',
            backgroundColor: isDarkMode ? '#2a2a2a' : '#fff',
          },
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            name="updates"
            checked={formData.updates}
            onChange={handleChange}
            sx={{ color: isDarkMode ? '#ccc' : '#333' }}
          />
        }
        label="Send me email updates"
        sx={{ color: isDarkMode ? '#ccc' : '#333' }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          py: 1.5,
          fontWeight: 'bold',
          backgroundColor: isDarkMode ? '#1976d2' : '#1976d2',
          '&:hover': {
            backgroundColor: isDarkMode ? '#1565c0' : '#115293',
          },
        }}
      >
        Sign Up
      </Button>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => alert('Google Signup coming soon...')}
        sx={{
          py: 1.5,
          color: isDarkMode ? '#fff' : '#000',
          borderColor: isDarkMode ? '#666' : '#ccc',
          '&:hover': {
            backgroundColor: isDarkMode ? '#333' : '#f1f1f1',
            borderColor: isDarkMode ? '#888' : '#bbb',
          },
        }}
      >
        Sign up with Google
      </Button>

      <Typography align="center" sx={{ mt: 1 }}>
        Already have an account?{' '}
        <a href="/login" style={{ color: isDarkMode ? '#90caf9' : '#1976d2', textDecoration: 'none' }}>
          Log in
        </a>
      </Typography>
    </Box>
  );
};

export default Signup;
