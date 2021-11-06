import { React } from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import User from "./User";

const Main = () => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <User />
      <User />
      <User />
    </Stack>
  );
};

export default Main;
