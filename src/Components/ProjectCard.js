import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: "black",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  padding: 0,
}));

const ProjectGrid = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      // height={800}
      // overflow="scroll"
    >
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        sx={{
          overflow: "scroll",
          height: 600,
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(({ index }) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <Box
              height="15rem"
              sx={{
                backgroundColor: "black",
                backgroundSize: "cover",
                backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.2),
            rgba(0, 0, 0, 0.8) 
          ),
          url(https://images.unsplash.com/photo-1602298674761-700e96568f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZlZ2V0YXRpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80)
        `,
                backgroundRepeat: "no-repeat",
                backgroundPositionY: -50,
                filter: "brightness(100%)",
                position: "relative",
                border: "2px solid green",
                borderRadius: 5,
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  color: "white",
                  bottom: 8,
                  left: 10,
                  textTransform: "initial",
                }}
              >
                Benge Farms Limited
                <br />
                500 Units
              </Typography>
            </Box>
            {/* </Item> */}
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ProjectGrid;
