import { EditOutlined } from "@mui/icons-material";
import {
  Box,
  Typography,
  useMediaQuery,
  Stack,
  IconButton,
} from "@mui/material";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Camera, Upload } from "phosphor-react";
import MyButtons from "./Button";

const UploadWidget = ({ image, setImage, job }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(true);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Stack
      spacing={3}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      {isImage && (
        <Dropzone
          acceptedFiles=".jpg,.jpeg,.png"
          multiple={false}
          onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
        >
          {({ getRootProps, getInputProps }) => (
            <Box
              {...getRootProps()}
              border={"2px dashed white"}
              borderRadius={5}
              p="1rem"
              width="100%"
              height="100%"
              sx={{
                "&:hover": { cursor: "pointer" },
                height: "100%",
                position: "relative",
              }}
            >
              <input {...getInputProps()} />
              {image ? (
                <Stack>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "20%",
                      left: "30% ",
                      fontSize: 60,
                    }}
                  >
                    <Camera />
                  </IconButton>
                  <img
                    src={
                      typeof image === "string"
                        ? image
                        : URL.createObjectURL(image)
                    }
                    alt="Result"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </Stack>
              ) : (
                <Stack
                  width="100%"
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <>
                  <Typography color="white">
                    File types supported: JPEG, PNG, GIF
                  </Typography>
                  <Typography color="white">Max size: 100 MB</Typography>
                  </>
                  <MyButtons
                    width="50%"
                    height={150}
                    color="black"
                    text="Choose file"
                  />
                </Stack>
              )}
            </Box>
          )}
        </Dropzone>
        // </Box>
      )}
    </Stack>
  );
};

export default UploadWidget;
