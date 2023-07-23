import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AllFUnders from "../AllFunders";
import { Person2Outlined } from "@mui/icons-material";

function Funders() {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  const projects = AllFUnders;
  const columns = [
    //the firelds corresponds to the
    //key in the objects of the array
    //the header name is what you assign to show it
    //but it must start with capital letter
    {
      field: "_id",
      headerName: "ID",
      flex: isNonMobileScreen ? 1 : 0.5,
    },
    ...(isNonMobileScreen
      ? [
          {
            field: "wallet",
            headerName: "Wallet Address",
            flex: 1,
          },
          {
            field: "country",
            headerName: "Country",
            flex: 1,
          },
          {
            field: "projectfounded",
            headerName: "Projects Funded",
            flex: isNonMobileScreen ? 1 : 2,
          },
        ]
      : [
          {
            field: "email",
            headerName: "Email Address",
            flex: 1,
          },
        ]),
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Stack
        direction={isNonMobileScreen ? "row" : "column"}
        justifyContent="space-between"
        sx={{
          paddingTop: 1,
          paddingBottom: 1,
          width: isNonMobileScreen ? "auto" : "100%",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          p="1rem 1rem "
          sx={{
            paddingBottom: 1,
            border: "1px solid white",
            width: "30%",
            borderRadius: 3,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "powderblue",
            }}
          >
            <Person2Outlined
              sx={{
                color: "white",
                fontSize: 40,
              }}
            />
          </IconButton>
          <Stack>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              133,300
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Funders
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          p="1rem 1rem "
          sx={{
            paddingBottom: 1,
            border: "1px solid white",
            width: "30%",
            borderRadius: 3,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "powderblue",
            }}
          >
            <Person2Outlined
              sx={{
                color: "white",
                fontSize: 40,
              }}
            />
          </IconButton>
          <Stack>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              133,300
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Funders
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          p="1rem 1rem "
          sx={{
            paddingBottom: 1,
            border: "1px solid white",
            width: "30%",
            borderRadius: 3,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "powderblue",
            }}
          >
            <Person2Outlined
              sx={{
                color: "white",
                fontSize: 40,
              }}
            />
          </IconButton>
          <Stack>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              133,300
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Funders
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography fontWeight="bold" color="white">
        All Funders
      </Typography>
      <Box
        // mt="40px"
        height="90vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },

          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "$ . MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary,
            borderBottom: "none",
          },
          "$ . MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "$ . MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary,
            borderTop: "none",
          },
          "$ . MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary} !important`,
          },
        }}
      >
        <DataGrid
          sx={{
            "&::-webkit-scrollbar": {
              width: "0.1rem",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "transparent",
            },
            color: "white",
          }}
          //   loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={projects}
          columns={columns}
        />
      </Box>
    </Box>
  );
}

export default Funders;
