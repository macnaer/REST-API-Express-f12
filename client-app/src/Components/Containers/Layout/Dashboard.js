import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { WithApiService } from "../../Hoc/With-api-service";
import PrimarySearchAppBar from "../../AppBar/AppBar";
import { useSelector } from "react-redux";


import jwt from "jsonwebtoken";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginUserByTokenAction } from "../../../Actions/loginUserUactions/loginUserAction";

const drawerWidth = 240;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { userProfileInfo } = useSelector(store => store.login)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.token) {
      const userData = jwt.decode(localStorage.token, {
        complete: true,
      }).payload;
      dispatch(loginUserByTokenAction(userData));
      navigate("/adminPanel");
    }
  }, []);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% )` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <PrimarySearchAppBar />
      </AppBar>
      <Toolbar />
      <Divider />
      <List>
        <ListItem
          button
          onClick={() => {
            navigate("/adminpanel/userList");
          }}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={"UserList"} />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            navigate("/adminpanel/register");
          }}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={"Create User"} />
        </ListItem>

        {
          userProfileInfo.Role === 'admin' &&
          <ListItem
            button
            onClick={() => {
              navigate("/adminpanel/Role");
            }}
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Role"} />
          </ListItem>
        }
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          <Outlet />
        </Typography>
      </Box>
    </Box>
  );
}
DashBoard.propTypes = {
  window: PropTypes.func,
};

export default WithApiService()(DashBoard);
