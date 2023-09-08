import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AllProjects from "../AllProjects";
import SearchAppBar from "../Components/Searchbar";
import Picker from "../Components/Picker";
import { DeleteOutline, Grass } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

function Projects() {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  const projects = AllProjects;
  const columns = [
    //the firelds corresponds to the
    //key in the objects of the array
    //the header name is what you assign to show it
    //but it must start with capital letter

    ...(isNonMobileScreen
      ? [
          {
            field: "_id",
            headerName: "ID",
            flex: 0.5,
          },
          {
            field: "project",
            headerName: "Project",
            flex: 0.5,
          },

          {
            field: "industry",
            headerName: "Industry",
            flex: 1,
          },
          {
            field: "volumeforsale",
            headerName: "Volume For Sale",
            flex: 1,
          },
          {
            field: "volumefunded",
            headerName: "Volume Funded",
            flex: 1,
          },
          {
            field: "funders",
            headerName: "Funders",
            flex: 1,
          },

          {
            field: "status",
            headerName: "Status",
            flex: 1,
          },
        ]
      : [
          {
            field: "industry",
            headerName: "Industry",
            flex: 1,
          },
          {
            field: "volumeforsale",
            headerName: "Volume For Sale",
            flex: 1,
          },
          {
            field: "volumefunded",
            headerName: "Volume Funded",
            flex: 1,
          },
        ]),
  ];

  return (
    <Box m={isNonMobileScreen ? "1.5rem 2.5rem" : "1.5rem 0"}>
      <Typography fontWeight="bold" color="white" variant="h6" m="1rem 0rem">
        All Projects
      </Typography>

      <Box
        height="90vh"
        sx={{
          overflow: "auto",
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

export default Projects;
