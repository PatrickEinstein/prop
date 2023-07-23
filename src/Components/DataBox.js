import { Box, Stack } from "@mui/material";
import React from "react";

function DataBox({ title, body }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
        border: "1px solid white",
        borderRadius: 3,
        overflow: "hidden",
        paddingBottom: 3,
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        {title}
        {body}
      </Stack>
    </Box>
  );
}

export default DataBox;
