import React,{useState} from 'react';
import { OutlinedInput, Stack, Paper, Button, Box, Typography } from "@mui/material";

function Production() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  return (
    <div>
      <Paper>
          <Box padding={'140px'}>
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
                    <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained'>Save</Button>
                  </Stack>

              </Stack>
          </Box>
      </Paper>
    </div>
  )
}

export default Production