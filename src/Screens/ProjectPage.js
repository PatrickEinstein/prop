import React from "react";
import Logo2 from "../assets/logo2.svg";
import { Avatar, Box, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { faker } from "@faker-js/faker";
import backdrop from "../assets/profilebackdrop.svg";
import BasicTabs from "../Components/Tabs";
import ProjectGrid from "../Components/ProjectCard";
import MyButtons from "../Components/Button";
import ProjectsTable from "../Components/Projects";
import { GrassOutlined } from "@mui/icons-material";
import AllFUnders from "../AllFunders";

function Projectpage() {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  return (
    <Stack
      width="100%"
      overflow="auto"
      height={isNonMobileScreen ? "auto" : 900}
    //   m="0.5rem 0 2rem 2rem"
    >
      {/* NAVBAR */}
      <Stack
        justifyContent="space-between"
        direction="row"
        m={isNonMobileScreen ? "1rem 0.5rem" : "0 0"}
        width="100%"
      >
        {" "}
        <img
          src={Logo2}
          alt="Logo"
          style={{
            width: 100,
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
      {/* BACKDROP */}
      <Box
        height={isNonMobileScreen ? "30%" : "auto"}
        width="100%"
        mb={isNonMobileScreen ? "7rem" : "10rem"}
        sx={{
          position: "relative",
        }}
      >
        <img
          src={backdrop}
          alt="Logo"
          style={{
            width: "100%",
            height: isNonMobileScreen ? "100%" : "auto",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "60%",
            left: "5%",
          }}
        >
          <Avatar
            alt="Profile"
            // src={faker.image.avatar()}
            sx={{
              height: 100,
              width: 100,
            }}
          />
        </Box>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          width="95vw"
          mt={5}
        >
          <Box width="45vw">
            <Typography color="white">
              <span style={{ fontweight: "bold", fontSize: 20 }}>
                Cocoa Planatation in Gbagi
              </span>
              <br />
              <span>
                Dolor non eget lobortis sit. Neque luctus quisque condimentum
                vulputate diam convallis nulla. Vitae ipsum ullamcorper massa
                magna vel a massa. Quisque id cras quam laoreet iaculis
                ultricies. Dolor sit urna egestas ipsum enim imperdiet
                consectetur turpis.{" "}
              </span>
            </Typography>
          </Box>
          <Box width="45vw">
            <Stack direction="row" justifyContent="space-between">
              <Typography color="white">
                <span style={{ fontSize: 15 }}>Expected ROI</span>
                <br />
                <span style={{ fontweight: "bold", fontSize: 15 }}>12%</span>
              </Typography>
              <Typography color="white">
                <span style={{ fontSize: 15 }}>Maturity Period</span>
                <br />
                <span style={{ fontweight: "bold", fontSize: 15 }}>
                  12 Months
                </span>
              </Typography>

              <Typography color="white">
                <span style={{ fontSize: 15 }}>Investors</span>
                <br />
                <span style={{ fontweight: "bold", fontSize: 15 }}>11,759</span>
              </Typography>
            </Stack>
            <MyButtons width={"100%"} text="close investment" />
          </Box>
        </Stack>

        <Stack color="white" height={400} margin="5rem 0 1rem 1rem" width="90vw" >
          <table>
            <th>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                marginBottom={3}
                whiteSpace="nowrap"
                width="100%"
                m="0rem 1rem"
              >
                <td>User</td>
                <td>Units</td>
                <td>Time</td>
              </Stack>
            </th>

            {AllFUnders.map(({ wallet, projectfounded }) => (
              <tr
                style={{
                  marginBottom: "10px",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  whiteSpace="nowrap"
                >
                  <td>
                   
                    <IconButton>
                      <GrassOutlined
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                          width: 50,
                          height: 50,
                          // mb: 1,
                        }}
                      />
                    </IconButton>
                    {wallet.substring(8)}...
                  </td>
                  <Stack marginTop={2}>
                    <td>{projectfounded}</td>
                  </Stack>
                  <Stack marginTop={2}>
                    <td>3 mins ago</td>
                  </Stack>
                </Stack>
              </tr>
            ))}
          </table>
        </Stack>
     
    </Stack>
  );
}

export default Projectpage;
