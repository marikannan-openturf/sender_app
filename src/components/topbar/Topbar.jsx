import React,{useState,useEffect} from 'react';
import './topbar.css'
import { NotificationsNone } from '@mui/icons-material';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { OutlinedInput, Paper, Stack, Typography, TextField, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

export default function Topbar() {
  const [environment, setEnvironment] = useState('sandbox')
const environmentHandler = (e) => {
setEnvironment(e.target.value)
localStorage.setItem('environment',e.target.value)
}
useEffect(()=>{
  if(localStorage.getItem('environment')) {
    setEnvironment(localStorage.getItem('environment'))
  } else {
    setEnvironment('sandbox')
    localStorage.setItem('environment','sandbox')
  }
},[])
  return (
    <div className='topbar'>
    <div className="topbarWrapper">
      <Box className="topLeft" component={Link} to="/sender-app" >
          <span className="logo-sender-app">Sender APP</span>
      </Box>
      {/* <Typography color="#575757" fontWeight='500'>
                  Sender Gender
                </Typography> */}
                <TextField
                  sx={{ width: 205 }}
                  label="Environment"
                  value={environment}
                  onChange={environmentHandler}
                  select
                  InputProps={{ style: { height: 40 } }}
                  InputLabelProps={{ style: { height: 40 } }}
                >
                  {/* <MenuItem value="" >
                    Environment
                  </MenuItem> */}
                  <MenuItem value='sandbox'>Sandbox</MenuItem>
                  {/* <MenuItem value='F'>Female</MenuItem> */}
                  <MenuItem value='uat'>UAT</MenuItem>
                  {/* <MenuItem value='Jio'>Jio</MenuItem> */}
                </TextField>
        {/* <div className="topRight">
          <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
          </div>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="topAvatar"/>

        </div> */}
    </div>
    </div>
  )
}
