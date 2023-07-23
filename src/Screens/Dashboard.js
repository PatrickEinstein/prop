import React from "react";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import {
  Grass,
  Person2Outlined,
  Person2Rounded,
  PowerOffOutlined,
  VolumeMute,
} from "@mui/icons-material";
import DataBox from "../Components/DataBox";
import DataTable from "../Components/Projects";
import ProjectsTable from "../Components/Projects";
import Title from "../Components/Title";
import DataforStats from "../Components/DataforStats";
import ProjectData from "../Demodata";
import { useMediaQuery } from "@mui/material";
function Dashboard() {
  const isNonMobileScreen = useMediaQuery("(min-width:1050px)");
  const filteredData = ProjectData.filter(({ id }) => id >= 1 && id <= 2);
  return (
    <Stack
      spacing={5}
      sx={{
        width: "100%",
        height: 700,
        marginTop: isNonMobileScreen ? "3%" : "10%",
      }}
    >
      <Stack
        direction={isNonMobileScreen ? "row" : "column"}
        justifyContent="space-between"
        // sx={{

        // }}
      >
        {/* COLUMN LEFT */}
        <Stack
          spacing={3}
          sx={{
            width: isNonMobileScreen ? "45%" : "100%",
            marginBottom: isNonMobileScreen ? null : 10,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "auto",
              border: "1px solid white",
              borderRadius: 3,
            }}
          >
            <Stack
              direction="row"
              spacing={3}
              sx={{
                paddingTop: 1,
                paddingBottom: 1,
                // paddingLeft: 2,
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
          </Box>
          {/* DATABOX LEFT */}
          <DataBox />
        </Stack>

        {/* COLUMN RIGHT */}
        <Stack
          spacing={3}
          sx={{
            width: isNonMobileScreen ? "45%" : "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "auto",
              border: "1px solid white",
              borderRadius: 3,
            }}
          >
            <Stack
              direction="row"
              spacing={3}
              sx={{
                paddingTop: 1,
                paddingBottom: 1,
                paddingLeft: 2,
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "powderblue",
                }}
              >
                <Grass
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
                  2,900
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Projects
                </Typography>
              </Stack>
            </Stack>
          </Box>
          {/* DATABOX RIGHT */}
          <DataBox body={<ProjectsTable />} title={<Title />} />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={5}
        sx={{
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
          }}
        >
          Recent Activities
        </Typography>
        <Typography
          sx={{
            color: "white",
          }}
        >
          See all
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: isNonMobileScreen ? 20 : 8,
          }}
        >
          Project
        </Typography>

        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            marginLeft: "10%",
            fontSize: isNonMobileScreen ? 20 : 8,
          }}
        >
          Funder
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: isNonMobileScreen ? 20 : 8,
          }}
        >
          TransactionType
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: isNonMobileScreen ? 20 : 8,
          }}
        >
          Volume
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: isNonMobileScreen ? 20 : 8,
          }}
        >
          Time
        </Typography>
      </Stack>
      {filteredData.map(
        ({ Project, Funder, TransactionType, Volume, Time }) => (
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={2}>
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
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",

                fontSize: isNonMobileScreen ? 20 : 8,
              }}
            >
              {Funder}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: isNonMobileScreen ? 20 : 8,
              }}
            >
              {TransactionType}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: isNonMobileScreen ? 20 : 8,
              }}
            >
              {Volume}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: isNonMobileScreen ? 20 : 8,
              }}
            >
              {Time}
            </Typography>
          </Stack>
        )
      )}
    </Stack>
  );
}

export default Dashboard;
