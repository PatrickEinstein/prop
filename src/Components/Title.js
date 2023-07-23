import { Stack, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";
function Title() {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  return (
    <Stack
      sx={{
        width: "100%",
        whiteSpace: "nowrap",
      }}
    >
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
          paddingLeft: 5,
        }}
      >
        Top Projects
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          marginTop: 3,
          whiteSpace: "nowrap",
        }}
      >
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: "bold",
            color: "white",
            fontSize: isNonMobileScreen ? 20 : 8,
          }}
        >
          Project
        </Typography>
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: "bold",
            color: "white",
            textAlign: "right",
            marginLeft: 10,
            fontSize: isNonMobileScreen ? 20 : 8,
          }}
        >
          Total Volume
        </Typography>
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: "bold",
            color: "white",
            textAlign: "right",
            fontSize: isNonMobileScreen ? 20 : 8,
          }}
        >
          Volume Sold
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Title;
