import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function MenuBar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader">
      {/* <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <HomeOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <Divider/> */}
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PermIdentityOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/account-status">
            <ListItemIcon>
              <CheckCircleOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Status" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider/>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <RepeatOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/transactions-personal">
            <ListItemIcon>
              <AccountBoxOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Personal" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}  component={Link} to="/transactions-business">
            <ListItemIcon>
              <BusinessCenterOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Business" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider/>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <NoteAltOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Report" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/report-ledger">
            <ListItemIcon>
              <ListOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Ledger" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/report-statement">
            <ListItemIcon>
              <DescriptionOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Statement" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider/>

      <ListItemButton component={Link} to="/bank-list">
        <ListItemIcon>
          <AccountBalanceOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Bank list" />
      </ListItemButton>
      <Divider/>
      <ListItemButton component={Link} to="/settings">
        <ListItemIcon>
          <SettingsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </List>
  );
}
