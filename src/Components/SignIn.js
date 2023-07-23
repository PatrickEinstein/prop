import React, { useState } from "react";
import {
  BadgeMark,
  Box,
  Checkbox,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MyButtons from "./Button";
import TextBox from "./TextField";
import { useNavigate } from "react-router-dom";
import PostCaller from "../Hooks/PostCaller";
import { setLoggedInUser } from "../Redux/reducer";
import { useDispatch } from "react-redux";
import Logo from "../assets/logo.svg";
import Logo2 from "../assets/logo2.svg";

const SignIn = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignIn = async () => {
    const user = PostCaller(
      {
        email: email,
        password: password,
      },
      "user/login",
      {
        "Content-Type": "application/json",
      }
    );
    const awaitedUser = await user;
    console.log(awaitedUser);
    if (awaitedUser.success === true) {
      dispatch(setLoggedInUser(awaitedUser));
      navigate("/dashboard");
    } else {
      alert("Could not authenticate");
      return;
    }
  };

  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "black",
        height: 800,
        width: "100%",
      }}
    >
      {isNonMobileScreen && (
        <Stack
          sx={{
            height: "100%",
            width: "50%",
          }}
        >
          <img
            src={Logo}
            alt="image"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              filter: "brightness(120%)",
              objectPosition: "10% 10%",
            }}
          />
        </Stack>
      )}

      <Stack
        spacing={1}
        // justifyContent="center"
        alignItems={isNonMobileScreen ? "center" : null}
        p={isNonMobileScreen ? "5rem 0 0 0" : "1rem 0.5rem"}
        height="100%"
        width={isNonMobileScreen ? "50%" : "100%"}
        sx={{
          backgroundColor: "black",
        }}
      >
        {!isNonMobileScreen && (
          <img
            src={Logo2}
            alt="image"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "15%",
              filter: "brightness(120%)",
              objectPosition: "10% 10%",
            }}
          />
        )}
        <Typography
          sx={{
            color: "white",
            fontSize: 40,
          }}
        >
          Welcome <span style={{ color: "powderblue" }}>back!</span>
        </Typography>

        <TextBox
          id="outlined-basic3"
          label="Email Address"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextBox
          id="outlined-basic"
          label="Enter Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />

        <MyButtons
          text="Login"
          color="black"
          width={isNonMobileScreen ? "80%" : "100%"}
          height={60}
          onClick={() => navigate("/dashboard")}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          width={!isNonMobileScreen ? "100%" : "80%"}
        >
          <Typography
            sx={{
              color: "white",
              // marginRight: 8,
            }}
          >
            <IconButton>
              <Checkbox
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
            Remember me
          </Typography>

          <Typography
            sx={{
              color: "white",
              marginTop: 2,
              // marginLeft: 8,
            }}
          >
            Forgot Password?
          </Typography>
        </Stack>
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
          }}
        >
          New here ?
          <span style={{ color: "powderblue" }}>Create an account</span>
        </Typography>
      </Stack>
      {/* </Box> */}
    </Stack>
  );
};

export default SignIn;
