import React, { lazy,useEffect,useContext,useState } from 'react'
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/Home";
import TransactionsBusiness from "./pages/TransactionsBusiness";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TransactionsPersonal from "./pages/TransactionsPersonal";
import AccountStatus from "./pages/AccountStatus";
import ReportLetger from "./pages/ReportLetger";
import ReportStatement from "./pages/ReportStatement";
import MenuBar from "./components/sidebar/MenuBar";
import BankList from "./pages/BankList";
import Settings from "./pages/Settings";
import TransactionsHistory from "./pages/TransactionsHistory";
import Quotation from "./pages/Quotation";
import ReportCorridor from "./pages/ReportCorridor";
import SettingsErrorPopUp from './pages/SettingsErrorPopUp';
function App() {
const [settingsPopUp,setSettingsPopUp] = useState(false)
useEffect(()=>{
  if(localStorage.getItem('environment') === 'sandbox') {
    if(localStorage.getItem('username') && localStorage.getItem('password')) {
      setSettingsPopUp(false)
    } else {
      setSettingsPopUp(true)
    }
  } else if (localStorage.getItem('environment') === 'uat') {
    if(localStorage.getItem('prodUsername') && localStorage.getItem('prodPassword')) {
      setSettingsPopUp(false)
    } else {
      setSettingsPopUp(true)
    }
  }
},[])

const closeSettingsPopUp = () => {
  setSettingsPopUp(false)

}
  return (
    <BrowserRouter>
        <Topbar />
      <div className="container">
        {/* <Sidebar /> */}
        <MenuBar/>
        <Routes basename={process.env.REACT_APP_BASE_URL}>
            <Route path="/" element= {<Home />} />
            <Route path={`${process.env.REACT_APP_BASE_URL}/account-status`} element = {<AccountStatus />}/>
            {/* <Route path={`${process.env.REACT_APP_BASE_URL}/transactions-business`} element = {<TransactionsBusiness />}/> */}
            {/* <Route path={`${process.env.REACT_APP_BASE_URL}/transactions-personal`} element = {<TransactionsPersonal />}/> */}
            <Route path={`${process.env.REACT_APP_BASE_URL}/transactions-history`} element={<TransactionsHistory/>}/>
            <Route path={`${process.env.REACT_APP_BASE_URL}/report-ledger`} element = {<ReportLetger />}/>
            <Route path={`${process.env.REACT_APP_BASE_URL}/report-statement`} element = {<ReportStatement />}/>
            <Route path={`${process.env.REACT_APP_BASE_URL}/report-corridor`} element = {<ReportCorridor/>}/>
            <Route path={`${process.env.REACT_APP_BASE_URL}/bank-list`} element={<BankList/>}/>
            <Route path={`${process.env.REACT_APP_BASE_URL}/settings`} element={<Settings/>}/>
            {/* <Route path={`${process.env.REACT_APP_BASE_URL}/quotation`} element={<Quotation/>}/> */}
            <Route path="*" element={<Home />} />
        </Routes>
      {settingsPopUp && <SettingsErrorPopUp errorPopup={settingsPopUp} closeSettingsPopUp={closeSettingsPopUp}/> }
      </div>
  </BrowserRouter>  );
}

export default App;
