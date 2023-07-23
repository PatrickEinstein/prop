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
import AllInvestments from "../AllInvestments";
import SearchAppBar from "../Components/Searchbar";
import Picker from "../Components/Picker";
import { DeleteOutline, Grass, MenuOutlined } from "@mui/icons-material";

function Explore() {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  const projects = AllInvestments;
  const columns = [
    //the firelds corresponds to the
    //key in the objects of the array
    //the header name is what you assign to show it
    //but it must start with capital letter
    {
      field: "_id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "logo",
      headerName: "",
      flex: 0.5,
      renderCell: () => (
        <IconButton aria-label="Delete">
          <Grass sx={{ color: "white" }} />
        </IconButton>
      ),
    },
    {
      field: "project",
      headerName: "Project",
      flex: 1.5,
    },
    ...(isNonMobileScreen
      ? [
          {
            field: "name",
            headerName: "Name",
            flex: 1.5,
          },
          {
            field: "category",
            headerName: "Category",
            flex: 1.5,
          },
          {
            field: "price",
            headerName: "Price",
            flex: 1.5,
          },
          {
            field: "return",
            headerName: "Return",
            flex: 1.5,
          },
          {
            field: "maturity",
            headerName: "Maturity",
            flex: 1.5,
          },
          {
            field: "timeleft",
            headerName: "Time left",
            flex: 1,
          },
        ]
      : [
          {
            field: "price",
            headerName: "Price",
            flex: 1.5,
          },
        ]),
  ];

  return (
    <Box m={isNonMobileScreen ? "1.5rem 2.5rem" : "1.5rem 0"}>
      <Typography fontWeight="bold" color="white" variant="h3" m="1rem 0rem">
        Explore Investments
      </Typography>
      <Stack direction="row" justifyContent="space-between" mb={5}>
        <Box width="70%" height={40} backgroundColor="black">
          <SearchAppBar placeholder="Search Investment Oppurtunity" />
        </Box>
        {isNonMobileScreen ? (
          <Stack
            width="25%"
            backgroundColor="black"
            height={40}
            justifyContent="center"
            alignItems="center"
          >
            <Picker />
          </Stack>
        ) : (
          <IconButton>
            <MenuOutlined 
            sx={{
              color:"white"
            }}
            />
          </IconButton>
        )}
      </Stack>
      <Box
        // mt="40px"
        height="90vh"
        width="100%"
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

export default Explore;
