import BankListTable from '../components/BankList/BankListTable'
import './bankList.css'
import { Container } from '@mui/material';

export default function BankList() {
  return (
    <div className='banklist'>
    <Container>
        <BankListTable/>
    </Container>
  </div>
  ) 
}
