
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "12px",
  padding: "10px 20px",
  fontWeight: 600,
  textTransform: "none",
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary ? theme.palette.secondary.main : "#9c27b0"})`,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 16px rgba(0,0,0,0.3)",
  },
}));

export default StyledButton;