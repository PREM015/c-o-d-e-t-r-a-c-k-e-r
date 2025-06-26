import React, { useState } from 'react';
import {
  Box, TextField, Button, FormControlLabel, Checkbox, Typography,
  Alert, Switch, Tooltip
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useTheme } from '../../contexts/ThemeContext';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // ✅ Firebase auth

const Login = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const validate = () => {
    let temp = {};
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Invalid email address';
    temp.password = formData.password ? '' : 'Password is required';
    setErrors(temp);
    return Object.values(temp).every(x => x === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setShowAlert(true);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setFirebaseError('');
      alert("✅ Logged in successfully!");
      // Optional: redirect to dashboard
      // navigate("/home/dashboard");
    } catch (err) {
      setFirebaseError(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 400, margin: 'auto', mt: 5, display: 'flex', flexDirection: 'column',
        gap: 2, bgcolor: isDarkMode ? '#1e1e1e' : '#fafafa', color: isDarkMode ? '#fff' : '#000',
        p: 4, borderRadius: 3, boxShadow: 4, position: 'relative'
      }}
    >
      {/* 🌙 Toggle Dark Mode */}
      <Tooltip title="Toggle Dark Mode" arrow>
        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            sx={{
              '& .MuiSwitch-thumb': { backgroundColor: isDarkMode ? '#fff' : '#000' },
              '& .MuiSwitch-track': { backgroundColor: isDarkMode ? '#555' : '#ccc' },
            }}
          />
        </Box>
      </Tooltip>

      <Typography variant="h4" align="center" fontWeight="bold">Log In</Typography>

      {showAlert && <Alert severity="error">Please correct the highlighted fields.</Alert>}
      {firebaseError && <Alert severity="error">{firebaseError}</Alert>}

      {/* Email */}
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth required variant="outlined"
      />

      {/* Password */}
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        fullWidth required variant="outlined"
      />

      {/* Remember Me */}
      <FormControlLabel
        control={
          <Checkbox
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
        }
        label="Remember me"
      />

      {/* Submit Button */}
      <Button type="submit" variant="contained" fullWidth>Log In</Button>

      {/* Google Login Placeholder */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => alert('Google Login coming soon...')}
      >
        Log in with Google
      </Button>

      {/* Links */}
      <Typography align="center" sx={{ mt: 1 }}>
        Don’t have an account? <a href="/signup">Sign up</a><br />
        <a href="/forgot-password">Forgot Password?</a>
      </Typography>
    </Box>
  );
};

export default Login;
