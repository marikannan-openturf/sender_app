import React,{useState,useEffect} from 'react';
import { OutlinedInput, Stack, Paper, Button, Box, Typography } from "@mui/material";
import { styled } from '@mui/system'

function Sandbox() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  useEffect(()=>{
  if(localStorage.getItem('username')) {
    setUsername(localStorage.getItem('username'))
  }
  if(localStorage.getItem('password')) {
    setPassword(localStorage.getItem('password'))
  }
  },[])

  const sandboxHandler = () => {
    localStorage.setItem('username',username)
    localStorage.setItem('password',password)
  }

  const CustomButtom = styled(Button)`
    &.Mui-disabled{
       opacity:0.5;
       background-color : #1976d2;
       color:white
    }`
  return (
    <div>
      <Paper>
          <Box padding={6}>
              <Stack spacing={4} alignItems='center' >

                <Stack spacing={12} alignItems='center' justifyContent='center' direction='row'>
                  <Stack textAlign='right'>
                  <Typography fontSize={18} color="#575757" fontWeight='500'>Username</Typography>
                  </Stack>
                  <Stack spacing={3}>
                  <OutlinedInput sx={{ height: 40, width:300 }} placeholder='Username' value={username} onChange={({target}) => setUsername(target.value)}/>
                  </Stack>
                </Stack>

                <Stack spacing={12} alignItems='center' justifyContent='center' direction='row'>
                  <Stack textAlign='right'>
                    <Typography fontSize={18} color="#575757" fontWeight='500'>Password</Typography>
                  </Stack>
                  <Stack spacing={3} pl={1}>
                    <OutlinedInput sx={{ height: 40, width:300 }} placeholder='Password' value={password} onChange={({target}) => setPassword(target.value)} />
                  </Stack>
                </Stack>
                  <Stack pl={52}>
                  {username && password ? 

                    <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={sandboxHandler}>Save</Button>
                 : <CustomButtom sx={{ alignSelf: 'center', letterSpacing: 1 }} onClick={sandboxHandler} variant='contained' disabled>Save</CustomButtom>}
                    </Stack>

              </Stack>
          </Box>
      </Paper>
    </div>
  )
}

export default Sandbox