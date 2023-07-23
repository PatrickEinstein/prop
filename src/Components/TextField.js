import React, { Component } from "react";
import { styled } from "@mui/system";
import {
  Box,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: "white", // Change the color of the label text
  },
  "& .MuiInputBase-input": {
    color: "white", // Change the color of the input text
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white", // Change the color of the outline when not focused
    },
    "&:hover fieldset": {
      borderColor: "white", // Change the color of the outline on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "white", // Change the color of the outline when focused
    },
  },
  // width: "80%",
  // height: "auto",
}));

const TextBox = ({ label, onChange, placeholder, multiline, rows }) => {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  return (
    <CustomTextField
      id="outlined-basic2"
      label={label}
      variant="outlined"
      onChange={onChange}
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
      sx={{
        width: isNonMobileScreen ? "80%" : "100%",
      }}
    />
  );
};

export default TextBox;
