import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "./redux/userSlice";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  TextField,
  Box,
} from "@mui/material";

function UserList() {
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = () => {
    if (name.trim() && email.trim()) {
      dispatch(addUser({ name, email }));
      setName("");
      setEmail("");
    }
  };
  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };


  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "2rem auto",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          👥 Interactive User List
        </Typography>

        {/* Форма добавления */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            marginBottom: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            size="small"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            size="small"
          />
          <Button variant="contained" onClick={handleAddUser}>
            ➕ Add
          </Button>
        </Box>

        {/* Список пользователей */}
        <List>
          {users.map((user, index) => (
            <React.Fragment key={user.id}>
              <ListItem
                secondaryAction={
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleRemoveUser(user.id)}
                  >
                    ❌ Remove
                  </Button>
                }
              >
                <ListItemText primary={user.name} secondary={user.email} />
              </ListItem>
              {index < users.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default UserList;