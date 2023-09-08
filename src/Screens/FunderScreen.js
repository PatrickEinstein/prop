import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AllFUnders from "../AllFunders";
import { Person2Outlined } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

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
    <Box m={isNonMobileScreen ? "1.5rem 2.5rem" : "1.5rem 0"}>
      <Stack
        direction={isNonMobileScreen ? "row" : "column"}
        justifyContent="space-between"
        spacing={2}
        sx={{
          paddingTop: 1,
          paddingBottom: 1,
          width: isNonMobileScreen ? "auto" : "100%",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            p: "1.5rem 1rem",
            border: "1px solid white",
            width: isNonMobileScreen ? "30%" : "100%",
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
          sx={{
            p: "1.5rem 1rem",

            border: "1px solid white",
            width: isNonMobileScreen ? "30%" : "100%",
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
          sx={{
            p: "1.5rem 1rem",
            border: "1px solid white",
            width: isNonMobileScreen ? "30%" : "100%",
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

        <table>
          <th>
            <Stack
              direction="row"
              justifyContent="space-between"
              width="80vw"
              color="white"
              fontSize={isNonMobileScreen ? 20 : 10}
            >
              <td>ID</td>
              <td>Wallet Address</td>
              <Stack>
              <td>Country</td>
              </Stack>
            
              <td>Project FUnded</td>
            </Stack>
          </th>
          <tr>
            {projects.map(({ _id, wallet, country, projectfounded }) => (
              <Stack
                direction="row"
                justifyContent="space-between"
                width="70vw"
                color="white"
              >
                <td>{_id}</td>
                <Stack>
                  <td>{wallet.substring(8)}...</td>
                </Stack>

                <td>{country}</td>
                <td>{projectfounded}</td>
              </Stack>
            ))}
          </tr>
        </table>
      </Box>
    
  );
}

export default Funders;
