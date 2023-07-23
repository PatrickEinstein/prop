import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import TextBox from "../Components/TextField";
import UploadWidget from "../Components/DropZone";
import MyButtons from "../Components/Button";
import { useState } from "react";

function CreateProjects() {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  const [image, setImage] = useState();
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
      <Stack
        direction={isNonMobileScreen ? "row" : "column"}
        justifyContent="center"
        width="100%"
        alignItems={isNonMobileScreen ? null : "center"}
      >
        {!isNonMobileScreen && (
          <Stack
            width={isNonMobileScreen ? "30%" : "80%"}
            height="60%"
            spacing={1}
            mb={2}
          >
            <UploadWidget image={image} setImage={setImage} />
          </Stack>
        )}
        <Stack
          width={isNonMobileScreen ? "30%" : "80%"}
          height="auto"
          spacing={1}
        >
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
            width={isNonMobileScreen ? "80%" : "100%"}
            height={200}
          />
        </Stack>
        {isNonMobileScreen && (
          <Stack
            width={isNonMobileScreen ? "30%" : "80%"}
            height="60%"
            spacing={1}
          >
            <UploadWidget image={image} setImage={setImage} />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export default CreateProjects;
