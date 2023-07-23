import { Stack } from "@mui/material";
import React from "react";
import ProjectData from "../Demodata";
import DataforStats from "./DataforStats";

function ProjectsTable() {
  const filteredData = ProjectData.filter(({ id }) => id >= 1 && id <= 5);

  return (
    <div
     
    >
      {filteredData.map(({ id, Project, Totalvolume, VolumeSold }) => (
        <DataforStats
          key={id}
          id={id}
          Project={Project}
          Totalvolume={Totalvolume}
          VolumeSold={VolumeSold}
        />
      ))}
    </div>
  );
}

export default ProjectsTable;
