import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Typography, Container, Paper, IconButton, Box } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import StyledButton from './StyledButton';
import { Brightness4, Brightness7 } from "@mui/icons-material";


function ThemeToggleApp() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Container sx={{ textAlign: "center", marginTop: "50px" }}>
        <CssBaseline />
      {/* Только этот блок получает тему */}
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        
        <Paper
          elevation={12}
          sx={{
            p: 4,
            borderRadius: 4,
            maxWidth: 500,
            mx: "auto",
            color: "white",
            background: isDark
              ? "linear-gradient(135deg, #1e3c72, #2a5298)" // тёмная тема: глубокий синий градиент
              : "linear-gradient(135deg, #ff9a9e, #fad0c4)", // светлая тема: розово-персиковый градиент
            transition: "all 0.5s ease",
          }}
        >
          
            {/* Иконка-переключатель */}
          <Box display="flex" justifyContent="flex-end">
             <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{
                 bgcolor: "rgba(255,255,255,0.2)",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.3)",
                },
                color: "white",
                transition: "all 0.3s ease",
              }}
            >
              {isDark ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
          
         {/* Заголовок */}
          <Typography variant="h4" gutterBottom sx={{ mt: 2, fontWeight: 700 }}>
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