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
function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
        <Topbar />
      <div className="container">
        {/* <Sidebar /> */}
        <MenuBar/>
        <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/account-status" element = {<AccountStatus />}/>
            <Route path="/transactions-business" element = {<TransactionsBusiness />}/>
            <Route path="/transactions-personal" element = {<TransactionsPersonal />}/>
            <Route path="/transactions-history" element={<TransactionsHistory/>}/>
            <Route path="/report-ledger" element = {<ReportLetger />}/>
            <Route path="/report-statement" element = {<ReportStatement />}/>
            <Route path="/report-corridor" element = {<ReportCorridor/>}/>
            <Route path="/bank-list" element={<BankList/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/quotation" element={<Quotation/>}/>
            <Route path="*" to={process.env.REACT_APP_BASE_URL} element={<Home />} />
        </Routes>

      </div>
  </BrowserRouter>  );
}

export default App;
