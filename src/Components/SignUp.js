import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MyButtons from "./Button";
import TextBox from "./TextField";
import { useNavigate } from "react-router-dom";
import Postcaller from "../Hooks/PostCaller";
import PostCaller from "../Hooks/PostCaller";
import Logo from "../assets/logo.svg";
import Logo2 from "../assets/logo2.svg";
const SignUp = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const onSignUp = async () => {
    const user = PostCaller(
      {
        email: email.toString(),
        password: password.toString(),
      },
      "user/register",
      {
        "Content-Type": "application/json",
      }
    );
    const awaitedUser = await user;
    console.log(`awaites`, awaitedUser);
    if (awaitedUser.success === true) {
      navigate("/signin");
    } else {
      alert(awaitedUser.email[0]);
    }
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        backgroundColor: "black",
        height: "100%",
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
        justifyContent="center"
        alignItems="center"
        height="100%"
        width={isNonMobileScreen ? "50%" : "100%"}
        p="3rem 0 3rem 0"
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
              width: "50%",
              height: "20%",
              filter: "brightness(120%)",
              objectPosition: "10% 10%",
            }}
          />
        )}
        <Typography
          sx={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          Tell us about <span style={{ color: "powderblue" }}> you!</span>
        </Typography>
        <TextBox
          id="outlined-basic1"
          label="First Name"
          variant="outlined"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextBox
          id="outlined-basic3"
          label="Email Address"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextBox
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextBox
          id="outlined-basic"
          label="Enter Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextBox
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <MyButtons
          text="Sign Up"
          color="black"
          width="80%"
          height={80}
          onClick={()=>navigate("/signin")}
        />

        <Typography
          sx={{
            color: "white",
          }}
        >
          Already have an account ?
          <span
            style={{
              color: "powder-blue",
            }}
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </Typography>
      </Stack>
      {/* </Box> */}
    </Stack>
  );
};

export default SignUp;
