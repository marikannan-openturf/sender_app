import './reportCorridor.css'
import { Container  } from '@mui/material';
import Ledger from '../components/Report/Ledger/Ledger';
import CorridorQuotation from '../components/Report/Corridor/CorridorQuotation';
import CorridorEmpty from '../components/Report/Corridor/CorridorEmpty';
export default function ReportCorridor() {
  return (
  <div className='reportCorridor'>
      <Container>
          <CorridorQuotation/>
          {/* <CorridorEmpty/> */}
      </Container>
  </div>
  )
}
