import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useEffect } from 'react';
import { WithApiService } from "../Hoc/With-api-service";

import { useSelector, useDispatch } from 'react-redux';

// Actions
import { LoadUsers } from '../../Actions/DashBoardActions/DashBoardActions';

//appbar
import PrimarySearchAppBar from '../AppBar/AppBar'



const drawerWidth = 240;

function DashBoard(props) {

  console.log("props -> ", props)
  const { ApiService } = props;

  const { UsersList } = useSelector(store => store.DashboardReducer);
  const dispatch = useDispatch()

  console.log("UsersList ", UsersList)

  useEffect(() => {

    ApiService.getAllUsers().then(response => {
      const { data } = response;
      console.log("getAllUsers ", data);
      dispatch(LoadUsers(data));
    });
  }, [])

  const user = UsersList.map(item =>
    <div key={item.Name}>
      <p>{item.Name}</p>
      <p>{item.Email}</p>
    </div>
  )

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          <h1>Dashboard</h1>
          {user}
        </Typography>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  window: PropTypes.func
};

export default WithApiService()(DashBoard);
