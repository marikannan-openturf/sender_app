import React,{useState,useEffect} from 'react';
import './topbar.css'
import { NotificationsNone } from '@mui/icons-material';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { OutlinedInput, Paper, Stack, Typography, TextField, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

export default function Topbar() {
  const [environment, setEnvironment] = useState('sandbox')
  const [language, setLanguage] = useState('js')
const environmentHandler = (e) => {
setEnvironment(e.target.value)
localStorage.setItem('environment',e.target.value)
}
const languageHandler = (e) => {
  setLanguage(e.target.value)
  localStorage.setItem('language',e.target.value)
  }
useEffect(()=>{
  if(localStorage.getItem('environment')) {
    setEnvironment(localStorage.getItem('environment'))
  } else {
    setEnvironment('sandbox')
    localStorage.setItem('environment','sandbox')
  }
  if(localStorage.getItem('language')) {
    setLanguage(localStorage.getItem('language'))
  } else {
    setLanguage('js')
    localStorage.setItem('language','js')
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
                <Stack direction='row'>
               <Stack p={1}>
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
               </Stack>
               <Stack p={1}>
               <TextField
                  sx={{ width: 205 }}
                  label="Language"
                  value={language}
                  onChange={languageHandler}
                  select
                  InputProps={{ style: { height: 40 } }}
                  InputLabelProps={{ style: { height: 40 } }}
                >
                  {/* <MenuItem value="" >
                    Environment
                  </MenuItem> */}
                  <MenuItem value='js'>Javascript</MenuItem>
                  {/* <MenuItem value='F'>Female</MenuItem> */}
                  <MenuItem value='java'>Java</MenuItem>
                  <MenuItem value='python'>Python</MenuItem>

                  {/* <MenuItem value='Jio'>Jio</MenuItem> */}
                </TextField>
               </Stack>
                </Stack>
       
    </div>
    </div>
  )
}
