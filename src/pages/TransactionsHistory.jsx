import TransactionHistory from '../components/Transacations/History/TransactionHistory'
import './transactionsHistory.css'
import { Container } from '@mui/material';

export default function TransactionsHistory() {
  return (
    <div className='transactions-history'>
      <Container>
        <TransactionHistory/>
      </Container>
    </div>
  ) 
}
