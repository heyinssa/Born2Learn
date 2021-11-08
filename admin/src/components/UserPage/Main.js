import { React, useState } from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import User from "./User";
import Piscine from "./Piscine";
import Subject from "./Subject";
import Evaluation from "./Evaluation";

const UserPage = () => {
  const [userId, setUserId] = useState([]);

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <User setUserId={setUserId} />
      <Piscine userId={userId} />
      <Subject userId={userId} />
      <Evaluation userId={userId} />
    </Stack>
  );
};

export default UserPage;
