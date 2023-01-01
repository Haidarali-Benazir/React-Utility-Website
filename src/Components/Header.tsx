import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoIcon from "../Icons/LogoIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Drawer, IconButton, Toolbar } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/system";

const drawerWidth = 180;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  handleMenuClick:(value:number)=>any,
  window?: () => Window;
}

export default function Header(props: Props) {
  const { window,handleMenuClick } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
        <h1>Logo</h1>
      <List>
        {[
          "Welcome",
          "Edit",
          "Api Call",
          "Styling",
          "Filter",
          "Selection",
          "Excel Download",
          "Summary",
          "Other Feature",
          'API on Pagination'
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={()=> handleMenuClick(index)}>
             
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{ width: "100%" }}>
      <header className="appbar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            marginLeft: "5px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <h3>React Utilit Table</h3>
        </div>

        <div
          style={{
            padding: "10px 10px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          Created by &nbsp;
          <LinkedInIcon /> &nbsp;
          <a href={"https://www.linkedin.com/in/benazir-mulla/"}> Benazir </a>
          &ensp; and&ensp; <LinkedInIcon /> &nbsp;{" "}
          <a href={"https://www.linkedin.com/in/haidaralichamcham/"}>
            {" "}
            Haidarali{" "}
          </a>
        </div>
      </header>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
}
