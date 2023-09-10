import { CurrencyBitcoinRounded, WalletRounded } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import TextBox from "../Components/TextField";

const FundCrypto = () => {
  return (
    <Box
      color="white"
      sx={{
        width: "25rem",
        height: "auto",
        backgroundColor: "black",
        borderRadius: "1.5rem",
        transform: "translate(-50% ,-50% )",
        position: "absolute",
        top: "50%",
        left: "50%",
        p: "2rem 2rem",
      }}
    >
      <Typography
        textAlign="center"
        sx={{
          fontweight: "bold",
          fontsize: 20,
        }}
      >
        You are about to invest in
      </Typography>

      <Typography textAlign="center" m="1rem 2rem" color="powderblue">
        Cocao Plantation in Gbagi
      </Typography>
      <TextBox placeholder={14} label="How many units are you buying?" />
      <TextBox placeholder={140} label="How much is that worth (in USDT)?" />
      <Box width="80vw" borderRadius="0.5rem" p="2rem">
        <IconButton borderRadius="50%" backgroundColor="white">
          <WalletRounded />
        </IconButton>
        <Typography>8Xuwuerjed.djnjd</Typography>
        <Typography>COnnected</Typography>
      </Box>
    </Box>
  );
};

export default FundCrypto;
