import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Typography, Container, Paper, Box } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import StyledButton from './StyledButton';


function ThemeToggleApp() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Container sx={{ textAlign: "center", marginTop: "50px" }}>
      {/* Только этот блок получает тему */}
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 4,
            maxWidth: 500,
            mx: "auto",
          }}
        >
          <Typography variant="h4" gutterBottom>
            {isDark ? "Тёмная тема" : "Светлая тема"}
          </Typography>
          <Box>
            <StyledButton onClick={toggleTheme}>
              {isDark ? "Переключить на светлую" : "Переключить на тёмную"}
            </StyledButton>
          </Box>
        </Paper>
      </ThemeProvider>
    </Container>
  );
}

export default ThemeToggleApp;