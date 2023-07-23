import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function MyButtons({
  text,
  width,
  onClick,
  startIcon,
  endIcon,
  backgroundColor,
  color,
  fontSize,
  disabled,
}) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        backgroundColor: "powderblue",
        width: width,
        height: 50
      }}
      disabled={disabled}
    >
      <Typography
        style={{ textTransform: "capitalize" }}
        variant="button"
        component="span"
        color={color}
        fontSize={fontSize}
      >
        {text}
      </Typography>
    </Button>
  );
}
