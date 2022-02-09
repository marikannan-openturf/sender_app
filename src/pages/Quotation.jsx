import React from 'react';
import QuotationForm from '../components/Quotation/QuotationForm';
import { Container,Stack, Box, Button, Paper, Typography  } from '@mui/material';
import './quotation.css'

function Quotation() {
  return <div className='quotation'>
  <Container>
      <Stack spacing={3} p={6}>
        <Stack direction='row'>
          <Stack direction='row'>
          <Typography textAlign='left' fontSize={20} fontFamily='Poppins' variant='h6' color="#404040">Quotation</Typography>
          </Stack>
        </Stack>
        <QuotationForm/>
      </Stack>
      </Container>
    </div>;
}

export default Quotation;
