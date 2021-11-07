import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const DetailMenu = () => {
  return (
    <div>
      <ButtonGroup aria-label="text button group">
        <Button>Piscine</Button>
        <Button>Subject</Button>
        <Button>Evaluation</Button>
      </ButtonGroup>
    </div>
  );
};

export default DetailMenu;
