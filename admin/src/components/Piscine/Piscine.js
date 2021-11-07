import { React, useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import DetailMenu from "./DetailMenu";

const Piscine = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "http://betti.kr:9000/api/users/all";

    axios
      .get(url)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(`${url} 호출 실패!`);
      });
  }, []);

  return (
    <Stack sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        User
      </Typography>
      <List>
        {users.map((user, index) => {
          return (
            <ListItem secondaryAction={<DetailMenu />}>
              <ListItemText
                primary={user.id + " / " + user.password}
                secondary={user.user_id}
              />
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

export default Piscine;
