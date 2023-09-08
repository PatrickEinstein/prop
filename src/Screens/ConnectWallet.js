import { CurrencyBitcoinRounded } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

const Wallets = [
  {
    logo: (
      <IconButton
        sx={{
          backgroundColor: "white",
        }}
      >
        <CurrencyBitcoinRounded
          sx={{
            width: 50,
            height: 50,
          }}
        />
      </IconButton>
    ),
    name: "Toronet Wallet",
  },
  {
    logo: (
      <IconButton
        sx={{
          backgroundColor: "white",
        }}
      >
        <CurrencyBitcoinRounded
          sx={{
            width: 50,
            height: 50,
          }}
        />
      </IconButton>
    ),
    name: "Metamask",
  },
  {
    logo: (
      <IconButton
        sx={{
          backgroundColor: "white",
        }}
      >
        <CurrencyBitcoinRounded
          sx={{
            width: 50,
            height: 50,
          }}
        />
      </IconButton>
    ),
    name: "Coinbase Wallet",
  },
  {
    logo: (
      <IconButton
        sx={{
          backgroundColor: "white",
        }}
      >
        <CurrencyBitcoinRounded
          sx={{
            width: 50,
            height: 50,
          }}
        />
      </IconButton>
    ),
    name: "Trust Wallet",
  },
  {
    logo: (
      <IconButton
        sx={{
          backgroundColor: "white",
        }}
      >
        <CurrencyBitcoinRounded
          sx={{
            width: 50,
            height: 50,
          }}
        />
      </IconButton>
    ),
    name: "Wallet Connect",
  },
];

const ConnectWallet = () => {
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
      <Typography textAlign="center" sx={{
        fontweight: "bold",
        fontsize: 20
      }}>Connect Wallet</Typography>

      <Typography textAlign="center" m="1rem 2rem">
        Select your wallet provider, if you don’t currently have a wallet, click
        on any provider of your choice and create an account
      </Typography>
      <Box m="0 2rem">
        {Wallets.map(({ logo, name }) => (
          <Stack spacing={3} mb="1rem" direction="row">
            {logo}
            <Stack m="2rem 1rem" width="50vw">
            <Typography p="0.2rem 1rem" >{name}</Typography>
            </Stack>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default ConnectWallet;
