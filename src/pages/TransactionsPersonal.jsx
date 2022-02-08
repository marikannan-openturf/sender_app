import React from 'react';
import './transactionsPersonal.css'
import TransactionPersonalStatus from '../components/Transacations/Personal/Personal'
import { Container } from '@mui/material';

export default function TransactionsPersonal() {
  return (
    <div className='transactionsPersonal'>
      <Container>
        <TransactionPersonalStatus />
      </Container>
    </div>
  );
}
