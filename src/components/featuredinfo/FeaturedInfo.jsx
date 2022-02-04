import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import { useState } from "react";
import Bank from "./Bank";
import './featuredInfo.css'
import Mobile from "./Mobile"
import { Stack, Link, Button , Typography } from "@mui/material";
export default function FeaturedInfo() {
  const [tab, setTab] = useState(true)
  const [mobile, setMobile] = useState(true)
  const [bank, setBank] = useState(false)

  const mobileActive = () => {
    setMobile(true)
    setBank(false)
  }

  const bankActive = () => {
    setMobile(false)
    setBank(true)
  }

  return (
    <>
      <Stack spacing={3} p={6}>
        <Stack direction='row' justifyContent='space-between' spacing={5}>
          <Stack direction='row' spacing={3}>
          <Link   component="button"
 underline={mobile ? "always" : "none"} color="inherit" onClick={mobileActive}>
            <Typography fontFamily='Poppins-Medium' fontSize={18} color={mobile ? '#e85654' : '#7e7e7e'}>Mobile</Typography>

          </Link>
          <Link component="button" underline={bank ? "always" : "none"} color="inherit" onClick={bankActive}>

            <Typography fontFamily='Poppins-Medium' fontSize={18} color={bank ? '#e85654' : '#7e7e7e'}>Bank</Typography>

          </Link>
        </Stack>
          <Stack>
          <Button variant='contained'>Create Transaction</Button>
        </Stack>
        </Stack>
      
        {mobile?<Mobile/>:<Bank/>}

      </Stack>
    </>
  )
}
