import { useState } from "react";
import { Paper, Typography, Box, TextField, Button, InputAdornment } from "@mui/material";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MessageIcon from '@mui/icons-material/Message';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SendIcon from '@mui/icons-material/Send';
import styles from "./MessageForm.module.css";




function MessageForm({ onSendMessage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }
    setError("");
    onSendMessage({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Paper className={styles.form}>
      <Typography variant="h6" gutterBottom>
        <ForwardToInboxIcon className={styles.icon} />
        Send a Message
      </Typography>
      <Box 
      component="form"
      onSubmit={handleSubmit}
       display="flex"
        flexDirection="column"
        gap={2}
      >
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonAddAltIcon className={styles.icon} />
              </InputAdornment>
            ),
          }}
          fullWidth
        />

        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactMailIcon className={styles.icon} />
              </InputAdornment>
            ),
          }}
          fullWidth
        />

        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          multiline
          rows={4}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MessageIcon className={styles.icon} />
              </InputAdornment>
            ),
          }}
          fullWidth
        />

        {error && <Typography color="error">{error}</Typography>}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box>
    </Paper>
  );
}

export default MessageForm;