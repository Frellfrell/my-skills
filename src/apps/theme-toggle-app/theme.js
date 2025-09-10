import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#f48fb1' },
    background: { default: '#f5f5f5', paper: '#fff' },
    text: { primary: '#000' },
  },
  custom: {
    cardGradient: 'linear-gradient(135deg, #ff9a9e, #fad0c4)', // градиент для карточки
    buttonGradient: 'linear-gradient(45deg, #ff6a00, #ffcc00)', // градиент для кнопок
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#ce93d8' },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#fff' },
  },
  custom: {
    cardGradient: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    buttonGradient: 'linear-gradient(45deg, #2193b0, #6dd5ed)',
  },
});

