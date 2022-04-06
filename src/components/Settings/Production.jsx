import React,{useState,useEffect} from 'react';
import { OutlinedInput, Stack, Paper, Button, Box, Typography,TextField } from "@mui/material";
import { styled } from '@mui/system'
import { countryList } from '../../Utils/country'
import MenuItem from '@mui/material/MenuItem';

function Production() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [country, setCountry] = useState('US')

  useEffect(()=>{
    if(localStorage.getItem('prodUsername')) {
      setUsername(localStorage.getItem('prodUsername'))
    }
    if(localStorage.getItem('prodPassword')) {
      setPassword(localStorage.getItem('prodPassword'))
    }
    if(localStorage.getItem('prodCountry')) {
      setCountry(localStorage.getItem('prodCountry'))
    }
    },[])
  
    const sandboxHandler = () => {
      localStorage.setItem('prodUsername',username)
      localStorage.setItem('prodPassword',password)
      localStorage.setItem('prodCountry',country)
    }
  
    const CustomButtom = styled(Button)`
      &.Mui-disabled{
         opacity:0.5;
         background-color : #1976d2;
         color:white
      }`
  return (
    <>
     <Paper sx={{ p: 2 }}>
     <Typography textAlign='center' pt={2} fontSize={20} variant='h6' color="#404040">UAT Information</Typography>
     <Stack width={600} spacing={5} sx={{ p: 4 }}>
       <Stack direction='row' alignItems='center' justifyContent='space-between'>
         <Typography color="#575757" fontWeight='500'>
         Username 
         </Typography>
         <OutlinedInput sx={{ height: 40,width:200 }} placeholder='Username' onChange={({ target }) => setUsername(target.value)} value={username} />
       </Stack>
       <Stack direction='row' alignItems='center' justifyContent='space-between'>
         <Typography color="#575757" fontWeight='500'>
         Password
         </Typography>
         <OutlinedInput sx={{ height: 40,width:200 }} placeholder='Password' onChange={({ target }) => setPassword(target.value)} value={password} />
       </Stack>
       <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Country
            </Typography>
            <TextField
              alignItems='center'
              sx={{ width: 200 }}
              label="Country"
              value={country}
              onChange={({ target }) => setCountry(target.value)}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={{ style: { height: 40 } }}
            >


              {countryList && countryList.length > 0 && countryList.map((value, index) => {
                return (
                  <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
                )
              })}
            </TextField>
            {/* <OutlinedInput sx={{ height: 40 }} placeholder='Country' onChange={({ target }) => setCountry(target.value)} value={country} /> */}
          </Stack>
      
      
       <Stack direction='row'>
         <div style={{ width: '400px' }}>
         </div>
         {username && password && country ? 

<Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={sandboxHandler}>Save</Button>
: <CustomButtom sx={{ alignSelf: 'center', letterSpacing: 1 }} onClick={sandboxHandler} variant='contained' disabled>Save</CustomButtom>}           
       </Stack>
     </Stack>
    </Paper> 
    </>
  )
}

export default Production