import * as React from 'react';
import { useState } from "react";
import { Stack, Link, Button, Typography, Box } from "@mui/material";
import HistoryMobile from "./HistoryMobile";
import HistoryBank from "./HistoryBank";
import CancelHistory from './CancelHistory';
import ReverseHistory from './ReverseHistory';



export default function TransactionHistory() {
  const [mobile, setMobile] = useState(true)
  const [bank, setBank] = useState(false)
  const [cancelTrans, setCancelTrans] =useState(false)
  const [reverseTrans, setReverseTrans] =useState(false)
  
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
        {cancelTrans? <CancelHistory  setCancelTrans={setCancelTrans} />:
          reverseTrans? <ReverseHistory setReverseTrans={setReverseTrans} />:
        <Stack spacing={3}>
        <Stack direction='row' justifyContent='space-between' spacing={5}>
          <Stack direction='row' spacing={3}>
            <Link component="button"
              underline={mobile ? "always" : "none"} color="inherit" onClick={mobileActive}>
              <Typography fontSize={18} fontWeight='500' color={mobile ? '#e85654' : '#7e7e7e'}>Mobile</Typography>

            </Link>
            <Link component="button" underline={bank ? "always" : "none"} color="inherit" onClick={bankActive}>

              <Typography fontSize={18} fontWeight='500' color={bank ? '#e85654' : '#7e7e7e'}>Bank</Typography>

            </Link>
          </Stack>
            <Stack>
              <Button variant='contained'>Create Transaction</Button>
            </Stack>
        </Stack>

        {mobile ? <HistoryMobile setCancelTrans={setCancelTrans} setReverseTrans={setReverseTrans}  /> : <HistoryBank setCancelTrans={setCancelTrans} setReverseTrans={setReverseTrans} />}
      </Stack>
      }

      </Stack>
    </>
  )
}
