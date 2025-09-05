import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box
} from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";

import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

import styles from "./MuiDemoApp.module.css";

function MuiDemoApp() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, { id: Date.now(), ...newMessage }]);
  };

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter((m) => m.id !== id));
  };

 return (
    <Box className={styles.wrapper}>
      {/* Верхняя панель */}
      <AppBar position="static">
        <Toolbar>
          <InfoIcon className={styles.icon} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Material UI Demo
          </Typography>
          <Button
            color="inherit"
            startIcon={<InfoIcon />}
            onClick={handleClickOpen}
          >
            Info
          </Button>
        </Toolbar>
      </AppBar>

      {/* Основное содержимое */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Welcome to the Material UI Demo</Typography>
        {/* Форма */}
        <MessageForm onSendMessage={handleSendMessage} />
        {/* Список сообщений */}
        <MessageList messages={messages} onDeleteMessage={handleDeleteMessage} />
      </Container>

      {/* Диалоговое окно */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is a demo application using Material UI components.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
    </Box>
    );
}

export default MuiDemoApp;
