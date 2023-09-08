import { IconButton, Stack } from "@mui/material";
import React from "react";
import ProjectData from "../Demodata";
import DataforStats from "./DataforStats";
import { GrassOutlined, Person2Outlined } from "@mui/icons-material";

function ProjectsTable() {
  const filteredData = ProjectData.filter(({ id }) => id >= 1 && id <= 5);

  return (
    <Stack color="white" height={400} marginTop={5} minWidth={300}>
      <table>
        <th>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={3}
            whiteSpace="nowrap"
          >
            <td>Project</td>
            <td>Volume Sold</td>
            <td>Amount</td>
          </Stack>
        </th>

        {filteredData.map(({ id, Project, Totalvolume, VolumeSold }) => (
          <tr
            style={{
              marginBottom: "10px",
            }}
          >
            <Stack direction="row" justifyContent="space-between" whiteSpace="nowrap" >
              <td>
             
                {id}
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
                {Project}
               
              </td>
              <Stack marginTop={2}>
              <td>{Totalvolume}</td>
              </Stack>
              <Stack marginTop={2}>
              <td>{VolumeSold}</td>
              </Stack>
            </Stack>
          </tr>
        ))}
      </table>
    </Stack>
  );
}

export default ProjectsTable;
