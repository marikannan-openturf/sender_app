import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TransactionsPersonal from "./pages/TransactionsPersonal";
import TransactionStatus from "./pages/TransactionStatus";
import ReportLetger from "./pages/ReportLetger";
import ReportStatement from "./pages/ReportStatement";
function App() {
  return (
    <BrowserRouter>
        <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>

          <Route  path="/" element= {<Home />} />
            <Route path="/transactions" element = {<Transactions />}/>
            <Route path="/transactions-personal" element = {<TransactionsPersonal />}/>
            <Route path="/transactions-status" element = {<TransactionStatus />}/>
            <Route path="/report-ledger" element = {<ReportLetger />}/>
            <Route path="/report-statement" element = {<ReportStatement />}/>
            </Routes>

      </div>
  </BrowserRouter>  );
}

export default App;
