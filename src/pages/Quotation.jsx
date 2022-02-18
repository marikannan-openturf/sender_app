import React from 'react';
import { Container  } from '@mui/material';
import './quotation.css'
import QuotationStatus from '../components/Quotation/QuotationStatus';

function Quotation() {
  return  <div className='quotationStatus'>
  <Container>
    <QuotationStatus />
  </Container>
  
  </div>
}

export default Quotation;
