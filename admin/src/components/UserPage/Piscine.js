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

const Piscine = ({ userId }) => {
  const [piscines, setPiscines] = useState([]);

  useEffect(() => {
    const url = `https://betti.kr:9000/api/users/${userId}/piscines`;

    axios
      .get(url)
      .then((response) => {
        setPiscines(response.data);
      })
      .catch((error) => {
        console.log(`${url} 호출 실패!`);
      });
  }, [userId]);

  return (
    <Stack sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Piscine
      </Typography>
      <List>
        {piscines.map((piscine, index) => {
          return (
            <ListItem>
              <Accordion style={{ width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{piscine.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <pre>{JSON.stringify(piscine, null, 2)}</pre>
                    <br />
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

export default Piscine;
