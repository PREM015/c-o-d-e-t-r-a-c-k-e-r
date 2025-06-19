import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Alert,
  Switch,
  Tooltip
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useTheme } from '../../contexts/ThemeContext';

const Login = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validate = () => {
    let temp = {};
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Invalid email address';
    temp.password = formData.password ? '' : 'Password is required';
    setErrors(temp);
    return Object.values(temp).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Login Data:', formData);
      setShowAlert(false);
      // send to backend
    } else {
      setShowAlert(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
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
        bgcolor: isDarkMode ? '#1e1e1e' : '#fafafa',
        color: isDarkMode ? '#ffffff' : '#000000',
        p: 4,
        borderRadius: 3,
        boxShadow: isDarkMode ? 4 : 3,
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
        Log In
      </Typography>

      {showAlert && <Alert severity="error">Please correct the highlighted errors.</Alert>}

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
        autoComplete="email"
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
        autoComplete="current-password"
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
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            sx={{
              color: isDarkMode ? '#ccc' : '#333',
            }}
          />
        }
        label="Remember me"
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
        Log In
      </Button>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => alert('Google Login coming soon...')}
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
        Log in with Google
      </Button>

      <Typography align="center" sx={{ mt: 1 }}>
        Don’t have an account?{' '}
        <a href="/signup" style={{ color: isDarkMode ? '#90caf9' : '#1976d2', textDecoration: 'none' }}>
          Sign up
        </a>
        <br />
        <a href="/forgot-password" style={{ color: isDarkMode ? '#90caf9' : '#1976d2', textDecoration: 'none' }}>
          Forgot Password? 
        </a>
      </Typography>
    </Box>
  );
};

export default Login;
