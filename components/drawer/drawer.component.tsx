import React, { useState } from "react";
import Router from "next/router";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

import HomeSharpIcon from "@mui/icons-material/HomeSharp";

const DrawerComponent = ({ pages }: any) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleRouteChange = (e: any, page: any) => {
    e.preventDefault();

    setOpenDrawer(false);

    Router.push(`/${page}`);
  };

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <HomeSharpIcon
          onClick={(e) => handleRouteChange(e, "/")}
          sx={{ cursor: "pointer", marginLeft: "20px", marginTop: "10px" }}
        />
        <List sx={{ width: "300px" }}>
          {pages.map(
            (
              page:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined,
              index: React.Key | null | undefined
            ) => (
              <ListItemButton
                key={index}
                onClick={(e) => handleRouteChange(e, page)}
              >
                <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            )
          )}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(true)}
      >
        <MenuSharpIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComponent;
