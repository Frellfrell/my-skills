import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./MessageList.module.css";



function MessageList({ messages, onDeleteMessage }) {
  if (messages.length === 0) return null;

  return (
    <Paper className={styles.list}>
      <Typography variant="h6" gutterBottom>
        Sent Messages
      </Typography>
      <List>
        {messages.map((m) => (
          <ListItem key={m.id} className={styles.item}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText
              primary={`${m.name} (${m.email})`}
              secondary={m.message}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                color="error"
                onClick={() => onDeleteMessage(m.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default MessageList;