import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Stack } from "@mui/material";
import { faker } from "@faker-js/faker";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTheme } from "@mui/material/styles";
import MyButtons from "./Button";

const MainCarousel = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  return (
    <Box
      width={isNonMobileScreen ? "95%" : "100%"}
      marginBottom={isNonMobileScreen ? 5 : 10}
    >
      <div id="testimonial">
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={true}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={isNonMobileScreen ? 30 : 80}
          width={"100%"}
          autoPlay={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <IconButton
              onClick={onClickHandler}
              sx={{
                position: "absolute",
                backgroundColor: "white",
                top: "50%",
                left: "0",
                padding: "5px",
                zIndex: "10",
                color: "white",
              }}
            >
              <NavigateBeforeIcon sx={{ fontSize: 40, color: "black" }} />
            </IconButton>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <IconButton
              onClick={onClickHandler}
              sx={{
                backgroundColor: "white",
                position: "absolute",
                top: "50%",
                right: "0",
                color: "white",
                padding: "5px",
                zIndex: "10",
              }}
            >
              <NavigateNextIcon sx={{ fontSize: 40, color: "black" }} />
            </IconButton>
          )}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(({ index }) => (
            <Box
              height="15rem"
              sx={{
                backgroundColor: "black",
                margin: "2rem 1rem",
                backgroundSize: "cover",
                p: 0,
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
              <Stack
                direction="row"
                justifyContent="space-between"
                position="absolute"
                bottom={8}
                left={10}
                width="95%"
              >
                <Typography
                  sx={{
                    color: "white",
                    textTransform: "initial",
                  }}
                >
                  Benge Farms Limited
                  <br />
                  45% Funded
                </Typography>

                <MyButtons text="Invest" color="black" />
              </Stack>
            </Box>
          ))}
        </Carousel>
      </div>
    </Box>
  );
};

export default MainCarousel;
