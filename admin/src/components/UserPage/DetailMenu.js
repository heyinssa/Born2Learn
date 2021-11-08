import { React } from "react";
import Button from "@mui/material/Button";

const DetailMenu = ({ clickHandler }) => {
  return (
    <div>
      <Button variant="outlined" onClick={clickHandler}>
        More
      </Button>
    </div>
  );
};

export default DetailMenu;
