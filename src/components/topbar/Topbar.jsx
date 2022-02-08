import React from 'react';
import './topbar.css'
import { NotificationsNone } from '@mui/icons-material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

export default function Topbar() {
  return (
    <div className='topbar'>
    <div className="topbarWrapper">
      <Box className="topLeft" component={Link} to="/" >
          <span className="logo-sender-app">Sender APP</span>
      </Box>
        <div className="topRight">
          <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
          </div>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="topAvatar"/>

        </div>
    </div>
    </div>
  )
}
