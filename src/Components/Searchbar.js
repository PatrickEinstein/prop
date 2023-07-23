import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "black",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "100%",
      },
    },
  },
}));

export default function SearchAppBar({ placeholder }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const isNonMobileScreen = useMediaQuery("(max-width:500px)");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon style={{ color: "white" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={placeholder}
          inputProps={{ "aria-label": "search" }}
          value={value}
          sx={{
            width: "100%",
          }}
        />
      </Search>
    </Box>
  );
}
