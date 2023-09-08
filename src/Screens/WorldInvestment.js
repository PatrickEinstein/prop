import React from "react";
import Logo2 from "../assets/logo2.svg";
import { Avatar } from "@mui/material";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import CustomTabPanel from "../Components/Tabs";
import MainCarousel from "../Components/Carousel";
import AllInvestments from "../AllInvestments";
import {
  FireExtinguisherOutlined,
  Fireplace,
  Grass,
} from "@mui/icons-material";
import MyButtons from "../Components/Button";
import { DataGrid } from "@mui/x-data-grid";

function World() {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  const projects = AllInvestments;
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "logo",
      headerName: "",
      flex: 0.2,
      renderCell: () => (
        <IconButton aria-label="Delete">
          <Grass sx={{ color: "white" }} />
        </IconButton>
      ),
    },
    {
      field: "project",
      headerName: "Project",
      flex: isNonMobileScreen ? 2 : 1.5,
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
    <Stack width="98vw" overflow="auto"  height="100vh">
      {/* NAVBAR */}
      <Stack
        justifyContent="space-between"
        direction="row"
        m={isNonMobileScreen ? "1rem 0.5rem" : "1rem 1.5rem"}
        width="90vw"
      >
        <img
          src={Logo2}
          alt="Logo"
          style={{
            width: 90,
            height: 50,
          }}
        />

        <Stack
          width={isNonMobileScreen ? "30%" : "60%"}
          direction="row"
          justifyContent="space-between"
          m={isNonMobileScreen ? "0.5rem 1rem " : "1rem 0"}
        >
          <Typography color="white">Explore</Typography>
          <Typography color="white">My Portfolio</Typography>
          <Avatar alt="Profile" src={faker.image.avatar()} size={10} />
        </Stack>
      </Stack>
      {/* NAVBAR */}
      {/* CAROUSEL */}
      <MainCarousel />
      {/* CAROUSEL */}
      {/* TABS */}
      <Stack direction="row" justifyContent="space-between" width="100%">
        <CustomTabPanel
          name1={["Hot", <Fireplace />]}
          name2="Latest"
          content1={
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
          }
          content2={
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
          }
          content3={
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
          }
        />
      </Stack>
      {/* TABS */}
    </Stack>
  );
}

export default World;
