import './settings.css'
import { Container } from '@mui/material';
import APISettings from '../components/Settings/APISettings';

export default function Settings() {
  return (
    <div className='settings'>
      <Container>
        <APISettings/>
      </Container>
    </div>
  ) 
}
