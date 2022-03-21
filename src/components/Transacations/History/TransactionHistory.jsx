import * as React from 'react';
import { useState } from "react";
import { Stack, Link, Button, Typography } from "@mui/material";
import HistoryMobile from "./HistoryMobile";
import HistoryBank from "./HistoryBank";



export default function TransactionHistory() {
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
      <Stack p={6}>
        <Stack spacing={3}>
        <Stack direction='row' justifyContent='space-between' spacing={5}>
          {/* <Stack direction='row' spacing={3}>
            <Link component="button"
              underline={mobile ? "always" : "none"} color="inherit" onClick={mobileActive}>
              <Typography fontSize={18} fontWeight='500' color={mobile ? '#e85654' : '#7e7e7e'}>Mobile</Typography>

            </Link>
            <Link component="button" underline={bank ? "always" : "none"} color="inherit" onClick={bankActive}>

              <Typography fontSize={18} fontWeight='500' color={bank ? '#e85654' : '#7e7e7e'}>Bank</Typography>

            </Link>
          </Stack> */}
            {/* <Stack>
            <Button variant='contained' sx={{backgroundColor:'#4490fa'}}>Create Transaction</Button>
            </Stack> */}
        </Stack>

        {mobile ? <HistoryMobile/> : <HistoryBank />}
      </Stack>
      </Stack>
    </>
  )
}
