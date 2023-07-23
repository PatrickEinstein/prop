import React from "react";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import Dashboard from "../Screens/Dashboard";
import Projects from "../Screens/ProjectScreen";
import Funders from "../Screens/FunderScreen";
import CreateProjects from "../Screens/CreateProjects";
import Explore from "../Screens/ExploreInvestments";

const Mainboard = () => {
  const typeofpage = useSelector((state) => state.user.typeofProfilePage);
  return (
    <Stack
      sx={{
        p: "3rem 0rem",
        mt: "1%",
        overflow: "scroll",
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

        height: "100vh",
      }}
    >
      {(() => {
        switch (typeofpage) {
          case "Dashboard":
            return <Dashboard />;
            break;

          case "Funders":
            return <Funders />;
            break;

          case "Projects":
            return <Projects />;
            break;
          case "Create Project":
            return <CreateProjects />;
            break;
          case "Transactions":
            // return <Transactions />;
            break;
          case "Explore":
            return <Explore />;
            break;

          default:
            <Dashboard />;
            break;
        }
      })()}
    </Stack>
  );
};

export default Mainboard;
