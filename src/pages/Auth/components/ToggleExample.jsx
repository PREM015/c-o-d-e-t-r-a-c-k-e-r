import React from "react";
import { Switch, Typography, Box } from "@mui/material";
import { useTheme } from "../../../contexts/ThemeContext";

const ToggleExample = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const handleToggle = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography>Dark Mode</Typography>
      <Switch checked={isDarkMode} onChange={handleToggle} />
    </Box>
  );
};

export default ToggleExample;
