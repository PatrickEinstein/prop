import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import TextBox from "../Components/TextField";
import UploadWidget from "../Components/DropZone";
import MyButtons from "../Components/Button";

function CreateProjects() {
  return (
    <Stack justifyContent="left" alignItems="center" width="100%" spacing={3}>
      <Stack>
        <Typography
          color="white"
          fontWeight="bold"
          variant="h3"
          textAlign="left"
        >
          Create New Project
        </Typography>
        <Typography
          color="white"
          fontWeight="bold"
          variant="subtitle2"
          textAlign="left"
        >
          Lorem ipsum dolor sit amet consectetur. Commodo velit tellus eget cras
          tempus
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" width="100%">
        <Stack width="30%" height="auto" spacing={1}>
          <TextBox
            id="outlined-basic3"
            label="Name"
            variant="outlined"
            placeholder="Project Name"

            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextBox
            id="outlined-basic3"
            label="Description"
            variant="outlined"
            placeholder="Add a brief description of the project"
            multiline={true}
            rows={4}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextBox
            id="outlined-basic3"
            label="Industry"
            variant="outlined"
            placeholder="Agriculture"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextBox
            id="outlined-basic3"
            label="Funding Target"
            variant="outlined"
            placeholder="200,000"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextBox
            id="outlined-basic3"
            label="ROI"
            variant="outlined"
            placeholder="10%"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextBox
            id="outlined-basic3"
            label="Funding Period"
            placeholder="24"
            variant="outlined"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextBox
            id="outlined-basic3"
            label="Maturity Period"
            placeholder="6"
            variant="outlined"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <MyButtons
            color="black"
            text="Create Project"
            width="80%"
            height={200}
          />
        </Stack>
        <Stack width="30%" height="60%" spacing={1}>
          <UploadWidget />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CreateProjects;
