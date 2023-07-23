import { Person2Outlined } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";
function DataforStats({
  id,
  Project,
  Totalvolume,
  VolumeSold,
  Funder,
  TransactionType,
  TIme,
}) {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  return (
    <Stack direction="row" spacing={2}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          marginBottom: 2,
          paddingLeft: 3,
          width: "30%",
          whiteSpace: "nowrap",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: isNonMobileScreen ? 20 : 8,
          }}
        >
          {id}
        </Typography>

        <Stack direction="row" spacing={2} sx={{ whiteSpace: "nowrap" }}>
          <IconButton
            sx={{
              backgroundColor: "powderblue",
            }}
          >
            <Person2Outlined
              sx={{
                color: "white",
                fontSize: isNonMobileScreen ? 20 : 8,
              }}
            />
          </IconButton>
          <Typography
            sx={{
              color: "white",
              // textAlign: "right",
              marginTop: 2,
              fontSize: isNonMobileScreen ? 20 : 8,
            }}
          >
            {Project}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        justifyContent="right"
        spacing={5}
        direction="row"
        sx={{
          width: "60%",
          paddingRight: 3,
          fontSize: isNonMobileScreen ? 20 : 8,
        }}
      >
        <Typography
          sx={{
            color: "white",
            whiteSpace: "nowrap",
            fontSize: isNonMobileScreen ? 20 : 8,
          }}
        >
          {Totalvolume}
        </Typography>

        <Typography
          sx={{
            color: "white",
            whiteSpace: "nowrap",
            fontSize: isNonMobileScreen ? 20 : 8,
          }}
        >
          {VolumeSold}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default DataforStats;
