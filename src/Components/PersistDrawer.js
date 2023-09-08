import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Stack } from "@mui/material";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  Dashboard,
  Security,
  SupportAgentOutlined,
  LogoutOutlined,
  Notifications,
  AddTask,
  HourglassBottom,
  FileDownloadDone,
  Settings,
  FamilyRestroomOutlined,
  Create,
  Explore,
} from "@mui/icons-material";
import Mainboard from "./mainboard";
import Logo2 from "../assets/logo2.svg";
import PublicIcon from "@mui/icons-material/Public";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { setLoggedInUser, setProfileIndex } from "../Redux/reducer";
import SearchAppBar from "./Searchbar";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  background: "transparent",
  height: "auto",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  const [activeItem, setActiveItem] = useState(0);

  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const HandleLogout = () => {
    dispatch(setLoggedInUser(null));
    // navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        width: isNonMobileScreen ? "100%" : "auto",
      }}
    >
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              width: "100%",
            }}
          >
            <SearchAppBar />
            {isNonMobileScreen ? (
              <Stack direction="row" justifyContent="space-between" spacing={3}>
                <Avatar alt="Profile" src={faker.image.avatar()} />
                <Typography
                  sx={{
                    paddingTop: 1,
                  }}
                >
                  Olalekan
                </Typography>
                <IconButton>
                  <PublicIcon
                    sx={{
                      color: "white",
                    }}
                  />
                </IconButton>
                <IconButton>
                  <Notifications
                    sx={{
                      color: "white",
                    }}
                  />
                </IconButton>
                <Typography
                  sx={{
                    paddingTop: 1,
                  }}
                >
                  Admin
                </Typography>
              </Stack>
            ) : null}
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "black",
            color: "white",
            // opacity: 0.8,

            transform: "translate(20%, 3%)",
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              width: "0.1rem",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "transparent",
            },

            scrollbarWidth: "none",
            scrollbarGutter: "unset",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              color: "white",
            }}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{
            opacity: 0.8,
          }}
        >
          {isNonMobileScreen ? null : (
            <Stack
              direction="row"
              justifyContent="space-around"
              sx={{
                paddingTop: 5,
              }}
            >
              <Avatar alt="Profile" src={faker.image.avatar()} />
              <Typography
                sx={{
                  paddingTop: 1,
                }}
              >
                Olalekan
              </Typography>
              <IconButton>
                <PublicIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
              <IconButton>
                <Notifications
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
            </Stack>
          )}
          <List
            sx={{
              position: "relative",
            }}
          >
            <img
              src={Logo2}
              alt="logo"
              style={{
                height: 50,
                width: 200,
              }}
            />
            {[
              { text: "Dashboard", icon: <AddTask /> },
              { text: "Funders", icon: <HourglassBottom /> },
              { text: "Projects", icon: <FileDownloadDone /> },
              { text: "Create Project", icon: <Create /> },
              { text: "Transactions", icon: <Settings /> },
              { text: "Explore", icon: <Explore /> },
              {
                text: "Log out",
                icon: <LogoutOutlined onClick={HandleLogout} />,
              },
            ].map(({ text, icon }, index) => (
              <ListItem
                key={text}
                disablePadding
                // onClick={() => setOpen(false)}
                onClick={() => {
                  setActiveItem(index);
                  dispatch(setProfileIndex(text));
                }}
                sx={{
                  ...(index === activeItem
                    ? {
                        backgroundColor: "powderblue",
                        color: "black",
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                      }
                    : {}),
                  ...(text === "Log out"
                    ? {
                        position: "absolute",
                        bottom: -250,
                        left: 0,
                      }
                    : {}),
                }}
              >
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      color: "white",
                    }}
                    // onClick={() => dispatch(setProfileIndex(text))}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Main open={open}>
        {/* <DrawerHeader /> */}
        <Mainboard />
      </Main>
    </Box>
  );
}
