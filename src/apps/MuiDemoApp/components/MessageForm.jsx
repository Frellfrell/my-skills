import { useState } from "react";
import { Paper, Typography, Box, TextField, Button } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

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
      <Typography variant="h6" gutterBottom>Send a Message</Typography>
      <Box onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{ startAdornment: <PersonIcon className={styles.icon} /> }}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{ startAdornment: <MailIcon className={styles.icon} /> }}
        />
        
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          InputProps={{ startAdornment: <MessageIcon className={styles.icon} /> }}
          rows={4}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
           startIcon={<SendIcon />}
          onClick={handleSend}
        >
          Send
        </Button>
      </Box>
    </Paper>
  );
}

export default MessageForm;
