import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Typography, Container, Paper, IconButton, Box } from '@mui/material';
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
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 4,
            maxWidth: 500,
            mx: "auto",
            transition: "background-color 0.4s, color 0.4s",
          }}
        >
          
            {/* Иконка-переключатель */}
          <Box display="flex" justifyContent="flex-end">
             <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{
                bgcolor: isDark ? "grey.800" : "grey.200",
                "&:hover": {
                  bgcolor: isDark ? "grey.700" : "grey.300",
                },
                transition: "all 0.3s ease",
              }}
            >
              {isDark ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
          
         {/* Заголовок */}
          <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
            {isDark ? "Dark Theme 🌙" : "Light Theme ☀️"}
          </Typography>
           <Typography variant="body1" sx={{ mt: 1 }}>
            This is a simple app demonstrating theme toggling using Material-UI.
          </Typography>

           {/* Кастомная кнопка */}
           <Box mt={3}>
            <StyledButton onClick={toggleTheme}>
              {isDark ? "Switch to Light" : "Switch to Dark"}
            </StyledButton>
          </Box>
        </Paper>
      </ThemeProvider>
    </Container>
  );
}

export default ThemeToggleApp;