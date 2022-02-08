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
import HistoryIcon from '@mui/icons-material/History';

export default function MenuBar() {
  const [accountOpen, setAccountOpen] = React.useState(true)
  const [transactionOpen, setTransactionOpen] = React.useState(true)
  const [reportOpen, setReportOpen] = React.useState(true)
  const [accountScreen, setAccountScreen] = React.useState(false)
  const [tpActiveScreen, setTpActiveScreen] = React.useState(false)
  const [tbActiveScreen, setTbActiveScreen] = React.useState(false)
  const [thActiveScreen, setThActiveScreen] = React.useState(false)
  const [reportLedgerScreen, setReportLedgerScreen] = React.useState(false)
  const [reportStatementScreen, setReportStatementScreen] = React.useState(false)
  const [bankListScreen, setBankListScreen] = React.useState(false)
  const [settingsScreen, setSettingsScreen] = React.useState(false)

  const handleAccountClick = () => {
    setAccountOpen(!accountOpen);
  }

  const handleTransactionClick = () => {
    setTransactionOpen(!transactionOpen);
  }

  const handleReportClick = () => {
    setReportOpen(!reportOpen);
  }

  const accountActive = () => {
    setTpActiveScreen(false)
    setTbActiveScreen(false)
    setThActiveScreen(false)
    setReportLedgerScreen(false)
    setReportStatementScreen(false)
    setBankListScreen(false)
    setSettingsScreen(false)
    setAccountScreen(true)
  }
  const tpActive  = () => {
    setAccountScreen(false)
    setTbActiveScreen(false)
    setThActiveScreen(false)
    setReportLedgerScreen(false)
    setReportStatementScreen(false)
    setBankListScreen(false)
    setSettingsScreen(false)
    setTpActiveScreen(true)
  }

  const tbActive  = () => {
    setAccountScreen(false)
    setTpActiveScreen(false)
    setThActiveScreen(false)
    setReportLedgerScreen(false)
    setReportStatementScreen(false)
    setBankListScreen(false)
    setSettingsScreen(false)
    setTbActiveScreen(true)
  }

  const thActive  = () => {
    setAccountScreen(false)
    setTpActiveScreen(false)
    setTbActiveScreen(false)
    setReportLedgerScreen(false)
    setReportStatementScreen(false)
    setBankListScreen(false)
    setSettingsScreen(false)
    setThActiveScreen(true)
  }

  const reportLedger  = () => {
    setAccountScreen(false)
    setTpActiveScreen(false)
    setTbActiveScreen(false)
    setThActiveScreen(false)
    setReportStatementScreen(false)
    setBankListScreen(false)
    setSettingsScreen(false)
    setReportLedgerScreen(true)
  }

  const reportStatement  = () => {
    setAccountScreen(false)
    setTpActiveScreen(false)
    setTbActiveScreen(false)
    setThActiveScreen(false)
    setReportLedgerScreen(false)
    setBankListScreen(false)
    setSettingsScreen(false)
    setReportStatementScreen(true)
  }

  const bankList  = () => {
    setAccountScreen(false)
    setTpActiveScreen(false)
    setTbActiveScreen(false)
    setThActiveScreen(false)
    setReportLedgerScreen(false)
    setReportStatementScreen(false)
    setSettingsScreen(false)
    setBankListScreen(true)
  }

  const settingsList  = () => {
    setAccountScreen(false)
    setTpActiveScreen(false)
    setTbActiveScreen(false)
    setThActiveScreen(false)
    setReportLedgerScreen(false)
    setReportStatementScreen(false)
    setBankListScreen(false)
    setSettingsScreen(true)
  }


  return (
    <List
      sx={{ minWidth:200, bgcolor: 'background.paper',paddingTop:'0px',paddingBottom:'0px' }}
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
        <List component="div" disablePadding sx={accountScreen ? {background: '#4490fa',color:'white'} : {}}>
          <ListItemButton component={Link} to="/account-status" onClick={accountActive}>
            <ListItemIcon sx={accountScreen ? {minWidth:'35px',paddingLeft:'30px',color:'white'} : {minWidth:'35px',paddingLeft:'30px'}}>
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
        <List component="div" disablePadding sx={tpActiveScreen ? {background: '#4490fa',color:'white'} : {}}>
          <ListItemButton  component={Link} to="/transactions-personal" onClick={tpActive}>
            <ListItemIcon sx={tpActiveScreen ? {minWidth:'35px',paddingLeft:'30px',color:'white'} : {minWidth:'35px',paddingLeft:'30px'}}>
              <AccountBoxOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Personal" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding sx={tbActiveScreen ? {background: '#4490fa',color:'white'} : {}}>
          <ListItemButton  component={Link} to="/transactions-business" onClick={tbActive}>
            <ListItemIcon sx={tbActiveScreen ? {minWidth:'35px',paddingLeft:'30px',color:'white'} : {minWidth:'35px',paddingLeft:'30px'}}>
              <BusinessCenterOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Business" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding sx={thActiveScreen ? {background: '#4490fa',color:'white'} : {}}>
          <ListItemButton  component={Link} to="/transactions-history" onClick={thActive}>
            <ListItemIcon sx={thActiveScreen ? {minWidth:'35px',paddingLeft:'30px',color:'white'} : {minWidth:'35px',paddingLeft:'30px'}}>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="History" />
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
        <List component="div" disablePadding sx={reportLedgerScreen ? {background: '#4490fa',color:'white'} : {}}>
          <ListItemButton component={Link} to="/report-ledger" onClick={reportLedger}>
            <ListItemIcon sx={reportLedgerScreen ? {minWidth:'35px',paddingLeft:'30px',color:'white'} : {minWidth:'35px',paddingLeft:'30px'}}>
              <ListOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Ledger" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding sx={reportStatementScreen ? {background: '#4490fa',color:'white'} : {}}>
          <ListItemButton component={Link} to="/report-statement" onClick={reportStatement}>
            <ListItemIcon sx={reportStatementScreen ? {minWidth:'35px',paddingLeft:'30px',color:'white'} : {minWidth:'35px',paddingLeft:'30px'}}>
              <DescriptionOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Statement" />
          </ListItemButton>
        </List>
      </Collapse>
      {/* <Divider/> */}
      <List component="div" disablePadding sx={bankListScreen ? {background: '#4490fa',color:'white'} : {}}>

      <ListItemButton component={Link} to="/bank-list" onClick={bankList}>
        <ListItemIcon sx={bankListScreen ? {minWidth:'35px',color:'white'} : {minWidth:'35px'}}>
          <AccountBalanceOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Bank list" />
      </ListItemButton>
      </List>
      {/* <Divider/> */}
      <List component="div" disablePadding sx={settingsScreen ? {background: '#4490fa',color:'white'} : {}}>
      <ListItemButton component={Link} to="/settings" onClick={settingsList}>
        <ListItemIcon sx={settingsScreen ? {minWidth:'35px',color:'white'} : {minWidth:'35px'}}>
          <SettingsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      </List>
    </List>
  );
}
