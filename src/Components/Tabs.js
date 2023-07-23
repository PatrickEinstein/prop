import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Avatar, Box, Stack, Typography, useMediaQuery } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import ProjectGrid from "./ProjectCard";
import MyButtons from "./Button";

function CustomTabPanel(props) {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      color="white"
      // style={{
      //   height: 800,
      // }}
    >
      {value === index && (
        <Box sx={{ p: 3, color: "white", overflow: "scroll" }}>{children}</Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  name1,
  name2,
  content1,
  content2,
  content3,
}) {
  const [value, setValue] = React.useState(0);
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", color: "white" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={name1}
            {...a11yProps(0)}
            sx={{
              textTransform: "initial",
              color: "white",
              width: "20%",
            }}
          />
          <Tab
            label={name2}
            {...a11yProps(1)}
            sx={{
              textTransform: "initial",
              color: "white",
              width: "20%",
            }}
          />
          {content3 && (
            <Tab
              label={<MyButtons text="Explore All" color="black" />}
              {...a11yProps(2)}
              sx={{
                textTransform: "initial",
                color: "white",
                width: "20%",
                position: "absolute",
                right: 0,
                bottom: 0,
              }}
            />
          )}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {content1}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {content2}
      </CustomTabPanel>
      {content3 && (
        <CustomTabPanel value={value} index={2}>
          {content3}
        </CustomTabPanel>
      )}
    </Box>
  );
}
