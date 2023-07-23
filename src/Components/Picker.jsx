import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IconButton, Stack, Typography } from "@mui/material";
import { ArrowDownward, ArrowDownwardSharp } from "@mui/icons-material";

export default function Picker({ category, handleChange }) {
  return (
    <div>
      <FormControl
        variant="standard"
        sx={{ mb: 2, width: 300, color: "white" }}
      >
        <InputLabel
          id="demo-simple-select-standard-label"
          sx={{
            color: "white",
            fontWeight: "bold",
            height: "auto",
            // width:"100%"
          }}
        >
          <Stack direction="row" justifyContent="space-between" width={300}>
            <Typography> All Categories</Typography>
            <IconButton>
              <ArrowDownwardSharp sx={{ color: "white" }} />
            </IconButton>
          </Stack>
        </InputLabel>

        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleChange}
          label="Category"
          sx={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          <MenuItem value="Recipee">Recipee</MenuItem>
          <MenuItem value="online course">online course</MenuItem>
          <MenuItem value="rome course">rome course</MenuItem>
          <MenuItem value="product">Products</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
