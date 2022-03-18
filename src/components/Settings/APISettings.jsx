import { useState } from "react";
import Sandbox from "./Sandbox";
import Production from "./Production"
import { Stack, Link, Typography } from "@mui/material";

export default function APISettings() {
  const [production, setProduction] = useState(false)
  const [sandbox, setSandbox] = useState(true)

  const productionActive = () => {
    setProduction(true)
    setSandbox(false)
  }

  const sandboxActive = () => {
    setProduction(false)
    setSandbox(true)
  }

  return (
    <>
      <Stack p={6} sx={{height:'calc(100vh - 100px)'}}>

        {/* <Stack direction='row' mb={3}>
          <Typography textAlign='left' fontSize={20} fontFamily='Poppins' variant='h6' color="#404040">API Settings</Typography> 
        </Stack> */}

        <Stack direction='row' justifyContent='space-between' pb={3}>
        
          <Stack direction='row'  spacing={3}>
            <Link component="button" underline={sandbox ? "always" : "none"} color="inherit" onClick={sandboxActive}>
              <Typography fontSize={18} fontWeight='500' color={sandbox ? '#e85654' : '#7e7e7e'}>Sandbox</Typography>
            </Link>

            <Link component="button" underline={production ? "always" : "none"} color="inherit" onClick={productionActive}>
              <Typography fontSize={18} fontWeight='500' color={production ? '#e85654' : '#7e7e7e'}>UAT</Typography>
            </Link>
          </Stack>
        </Stack>

        {sandbox ?  <Sandbox />:<Production />}

      </Stack>
    </>
  )
}
