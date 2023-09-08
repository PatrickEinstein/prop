import React from "react";
import Logo2 from "../assets/logo2.svg";
import { Avatar, Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { faker } from "@faker-js/faker";
import backdrop from "../assets/profilebackdrop.svg";
import BasicTabs from "../Components/Tabs";
import ProjectGrid from "../Components/ProjectCard";

function Profilepage() {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  return (
    <Stack
      width="100vw"
      overflow="auto"
      height="100vh"
      m="0.5rem 0 1rem 0"
    >
      {/* NAVBAR */}
      <Stack
        justifyContent="space-between"
        direction="row"
        m={isNonMobileScreen ? "1rem 0.5rem" : "0 0"}
        width="95vw"
      >
        {" "}
        <img
          src={Logo2}
          alt="Logo"
          style={{
            width: 100,
            height: 80,
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
        width="100vw"
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
            top: "80%",
            left: "5%",
          }}
        >
          <Avatar
            alt="Profile"
            src={faker.image.avatar()}
            sx={{
              height: 100,
              width: 100,
            }}
          />
          <Typography color="white">Patrick Dunamis</Typography>
          <Typography color="white" variant="subtitle">
            0xclBd5Fc..053b
          </Typography>
        </Box>
      </Box>
      {/* BACKDROP */}
      {/* TABS */}
      <BasicTabs
        name1="My Portfolio"
        name2="Completed"
        content1={<ProjectGrid />}
        content2={<ProjectGrid />}
      />
      {/* TABS */}
    </Stack>
  );
}

export default Profilepage;
