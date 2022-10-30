import React, { useState } from "react";
import Router from "next/router";
import AppBar from "@mui/material/AppBar";
import { Tab, Tabs, Toolbar } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import DrawerComponent from "../drawer/drawer.component";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";

const PAGES = ["about", "talks", "thoughts"];

const HeaderComponent = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState();

  const handleRouteChange = (e: any, page: any) => {
    e.preventDefault();

    Router.push(`/${page}`);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        boxShadow: "none",
        maxWidth: "680px",
      }}
    >
      <Toolbar>
        {matches ? (
          <DrawerComponent pages={PAGES} />
        ) : (
          <>
            <HomeSharpIcon
              onClick={() => Router.push("/")}
              sx={{ cursor: "pointer" }}
            />
            <Tabs
              value={value}
              onChange={(e, val) => setValue(val)}
              textColor="inherit"
              indicatorColor="secondary"
              sx={{
                textTransform: "lowercase",
                marginLeft: "auto",
              }}
              variant="standard"
              centered
            >
              {PAGES.map((page) => (
                <Tab
                  sx={{
                    textTransform: "lowercase",
                  }}
                  key={page}
                  label={page}
                  onClick={(e) => handleRouteChange(e, page)}
                />
              ))}
            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
