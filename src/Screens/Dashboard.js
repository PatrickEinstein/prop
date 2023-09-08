import React from "react";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import {
  Grass,
  GrassOutlined,
  Person2Outlined,
} from "@mui/icons-material";
import DataBox from "../Components/DataBox";
import ProjectsTable from "../Components/Projects";
import ProjectData from "../Demodata";
import { useMediaQuery } from "@mui/material";
import BarChartsGraph from "../Charts/BarChartsGraph";
function Dashboard() {
  const isNonMobileScreen = useMediaQuery("(min-width:1050px)");
  const filteredData = ProjectData.filter(({ id }) => id >= 1 && id <= 2);
  return (
    <Stack
      spacing={5}
      sx={{
        width: "100%",
        // height: 800,
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
          <DataBox body={<BarChartsGraph/>} title="Funding Report" />
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
          <DataBox body={<ProjectsTable />} title="Top Project" />
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

      <th>
        <Stack
          color="white"
          direction="row"
          justifyContent="space-between"
          // marginBottom={3}
          whiteSpace="nowrap"
          fontSize={isNonMobileScreen ? 20 : 10}
          overflow="auto"
        >
          <td>Project</td>
          <td>Funder</td>
          <td>TransactionType</td>
          <td>Volume</td>
          <td>Time</td>
        </Stack>
      </th>
      {filteredData.map(
        ({ Project, Funder, TransactionType, Volume, Time }) => (
          <tr>
            <Stack
              direction="row"
              color="white"
              justifyContent="space-between"
              fontSize={isNonMobileScreen ? 20 : 10}
              overflow="auto"
            >
              <td>
                <Stack direction="row" spacing={3}>
                  <IconButton>
                    <GrassOutlined
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        width: 30,
                        height: 30,
                      }}
                    />
                  </IconButton>
                </Stack>
              </td>
              <Stack
                direction="row"
                mt={2}
                width={"100%"}
                justifyContent="space-between"
              >
                <td>{Project}</td>
                <td>{Funder}</td>
                <td>{TransactionType}</td>
                <td>{Volume}</td>
                <td>{Time}</td>
              </Stack>
            </Stack>
          </tr>
        )
      )}
    </Stack>
  );
}

export default Dashboard;
