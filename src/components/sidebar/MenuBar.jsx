import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
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

export default function MenuBar() {
  const [accountOpen, setAccountOpen] = React.useState(true);
  const [transactionOpen, setTransactionOpen] = React.useState(true);
  const [reportOpen, setReportOpen] = React.useState(true);

  const handleAccountClick = () => {
    setAccountOpen(!accountOpen);
  }

  const handleTransactionClick = () => {
    setTransactionOpen(!transactionOpen);
  }

  const handleReportClick = () => {
    setReportOpen(!reportOpen);
  }

  return (
    <List
      sx={{ minWidth:200, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader">
      {/* <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <HomeOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <Divider/> */}
      <ListItemButton onClick={handleAccountClick}>
        <ListItemIcon sx={{minWidth:'35px'}}>
          <PermIdentityOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
        {accountOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={accountOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton component={Link} to="/account-status">
            <ListItemIcon sx={{minWidth:'35px',paddingLeft:'30px'}}>
              <CheckCircleOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Status" />
          </ListItemButton>
        </List>
      </Collapse>
      {/* <Divider/> */}

      <ListItemButton onClick={handleTransactionClick}>
        <ListItemIcon sx={{minWidth:'35px'}}>
          <RepeatOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
        {transactionOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={transactionOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton  component={Link} to="/transactions-personal">
            <ListItemIcon sx={{minWidth:'35px',paddingLeft:'30px'}}>
              <AccountBoxOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Personal" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton  component={Link} to="/transactions-business">
            <ListItemIcon sx={{minWidth:'35px',paddingLeft:'30px'}}>
              <BusinessCenterOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Business" />
          </ListItemButton>
        </List>
      </Collapse>
      {/* <Divider/> */}

      <ListItemButton onClick={handleReportClick}>
        <ListItemIcon sx={{minWidth:'35px'}}> 
          <NoteAltOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Report" />
        {reportOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={reportOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton component={Link} to="/report-ledger">
            <ListItemIcon sx={{minWidth:'35px',paddingLeft:'30px'}}>
              <ListOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Ledger" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton component={Link} to="/report-statement">
            <ListItemIcon sx={{minWidth:'35px',paddingLeft:'30px'}}>
              <DescriptionOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Statement" />
          </ListItemButton>
        </List>
      </Collapse>
      {/* <Divider/> */}

      <ListItemButton component={Link} to="/bank-list">
        <ListItemIcon sx={{minWidth:'35px'}}>
          <AccountBalanceOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Bank list" />
      </ListItemButton>
      {/* <Divider/> */}
      <ListItemButton component={Link} to="/settings">
        <ListItemIcon sx={{minWidth:'35px'}}>
          <SettingsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </List>
  );
}
