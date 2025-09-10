import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Typography, Container } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import StyledButton from './StyledButton';


const ThemeToggleApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          {isDark ? 'Тёмная тема' : 'Светлая тема'}
        </Typography>
        <StyledButton onClick={toggleTheme}>
          Switch theme
        </StyledButton>
      </Container>
    </ThemeProvider>
  );
};

export default ThemeToggleApp;
