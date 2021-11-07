import { React, useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import DetailMenu from "./DetailMenu";

const User = () => {
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
    <Stack sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
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
            <ListItem>
              <Accordion style={{ width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">{user.id}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span>user_id : {user.user_id}</span>
                    <span>id : {user.id}</span>
                    <span>password : {user.password}</span>
                    <span>created_at : {user.createdAt}</span>
                    <span>updated_at : {user.updatedAt}</span>
                    <DetailMenu />
                  </div>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

export default User;

/*
<div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>{user.user_id}</span>
                <span>
                  <strong>{user.id}</strong>
                </span>
                <span>{user.password}</span>
                <span>{user.password}</span>
                <span>{user.password}</span>
                <span>{user.password}</span>
              </div>
            </ListItem>
            */
