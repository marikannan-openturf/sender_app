import { Button, Dialog, Stack, Typography, IconButton, DialogTitle, DialogContentText } from '@mui/material'
import { CloseRounded } from '@mui/icons-material'
import { styled } from '@mui/system'

export default function AccountStatusBankPopup(props) {
  const CustomButtom = styled(Button)`
    &.Mui-disabled{
       opacity:0.5;
       background-color : #1976d2;
       color:white
    }`
  return (
    <Dialog
      open={props.featuredInfo} sx={{ height: '100%', width: '100%' }} onClose={() => props.setFeaturedInfoClose()}
    >
      <DialogTitle>
        <Stack sx={{ float: 'right' }} spacing={12} direction='row'>

          <Typography variant='h6' fontFamily='Poppins' fontWeight='600' my={2}>Bank Account Status</Typography>
          <IconButton sx={{ justifyContent: 'right', marginBlockEnd: `auto !important`, marginLeft: 'auto' }} p={0}><CloseRounded width={10} height={10} onClick={() => props.setFeaturedInfoClose()} /></IconButton>
        </Stack>
      </DialogTitle>
      <DialogContentText>

        <Stack spacing={2} width={500} alignItems='center' justifyContent='center' direction='row'>
          <Stack  spacing={3} textAlign='right'>
            <Typography color="#575757" fontWeight='500' >Account Number of the beneficiary :</Typography>
            <Typography color="#575757" fontWeight='500' >Account KYC Number of the beneficiary :</Typography>
            <Typography color="#575757" fontWeight='500' > Bank name of the beneficiary :</Typography>
            <Typography color="#575757" fontWeight='500' > Bank code-IFSC/Routing Code/Swift BIC :</Typography>
            {/* <Typography color="#575757" fontWeight='500' > Account Mobile number of the beneficiary :</Typography> */}
            <Typography color="#575757" fontWeight='500' > Country :</Typography>
            {/* <Typography color="#575757" fontWeight='500' > Provider :</Typography> */}
            {/* <Typography color="#575757" fontWeight='500' > Bank Subcode :</Typography> */}
          </Stack>
          <Stack spacing={3}>
            <Typography color="#575757" fontWeight='500'>{props.accountNumber}</Typography>
            <Typography color="#575757" fontWeight='500'>{props.kycNumber}</Typography>
            <Typography color="#575757" fontWeight='500'> {props.network}</Typography>
            <Typography color="#575757" fontWeight='500'> {props.bankCode}</Typography>
            {/* <Typography color="#575757" fontWeight='500'> {props.mobileNumber}</Typography> */}
            <Typography color="#575757" fontWeight='500'> {props.country}</Typography>
            {/* <Typography color="#575757" fontWeight='500'> {props.provider}</Typography> */}
            {/* <Typography color="#575757" fontWeight='500'> {props.subCode}</Typography> */}

          </Stack>

        </Stack>
        <Stack spacing={3} py={5} justifyContent='center' direction='row'>
          <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={() => props.setFeaturedInfoClose()}>OK</Button>
          <CustomButtom sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' disabled>Create Transaction</CustomButtom>

        </Stack>
      </DialogContentText>


    </Dialog>
  )
}
