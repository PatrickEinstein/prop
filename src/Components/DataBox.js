import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function DataBox({ title, body }) {
  return (
    <Box
      sx={{
        height: 300,
        width: "100%",
        border: "1px solid white",
        borderRadius: 3,
        overflow: "auto",
        color: "white",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: 20,
          p:2
        }}
      >
       {title}
      </Typography>
      <Stack height={"90%"} >{body}</Stack>
    </Box>
  );
}

export default DataBox;
