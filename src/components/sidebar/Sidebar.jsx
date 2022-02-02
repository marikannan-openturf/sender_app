import React, { useState } from 'react';
import './sidebar.css'
import { LineStyle, AccountBalanceWallet } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";
export default function () {
    let navigate = useNavigate();
    const [statusActive, setStatusActive] = useState(false)
    const [transactionsActive, setTransactionsActive] = useState(false)
    const [transactionsPersonalActive, setTransactionsPersonalActive] = useState(false)
    const [reportLetgerActive, setReportLedgerActive] = useState(false)
    const [reportStatementActive, setReportStatementActive] = useState(false)

    const statusNavigate = () => {
        setStatusActive(true)
        setTransactionsActive(false)
        setTransactionsPersonalActive(false)
        setReportLedgerActive(false)
        setReportStatementActive(false)
        navigate('/')
    }

    const transactionsBusinessNavigate = () => {
        setStatusActive(false)
        setTransactionsPersonalActive(false)
        setReportLedgerActive(false)
        setReportStatementActive(false)
        setTransactionsActive(true)
        navigate('/transactions')
    }

    const transactionsPersonalNavigate = () => {
        setTransactionsPersonalActive(true)
        setTransactionsActive(false)
        setStatusActive(false)
        setReportLedgerActive(false)
        setReportStatementActive(false)
        navigate('/transactions-personal')
    }

    const reportLedgerNavigate = () => {
        setTransactionsPersonalActive(false)
        setTransactionsActive(false)
        setStatusActive(false)
        setReportStatementActive(false)
        setReportLedgerActive(true)
        navigate('/report-ledger')
    }

    const reportStatementNavigate = () => {
        setTransactionsPersonalActive(false)
        setTransactionsActive(false)
        setStatusActive(false)
        setReportLedgerActive(false)
        setReportStatementActive(true)
        navigate('/report-statement')
    }


    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Account</h3>
                    <ul className="sidebarList">
                        <li className={statusActive ? "sidebarListItem active" : "sidebarListItem"} onClick={statusNavigate} >
                            <AccountBalanceWallet className='sidebarIcon' />
                            Status
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Transactions</h3>
                    <ul className="sidebarList">
                        <li className={transactionsActive ? "sidebarListItem active" : "sidebarListItem"} onClick={transactionsBusinessNavigate}>
                            <LineStyle className='sidebarIcon' />
                            Business
                        </li>
                        <li className={transactionsPersonalActive ? "sidebarListItem active" : "sidebarListItem"} onClick={transactionsPersonalNavigate}>
                            <LineStyle className='sidebarIcon' />
                            Personal
                        </li>
                        {/* <li className="sidebarListItem" onClick={() => navigate('/transactions-status')}>
                            <AccountBalanceWallet className='sidebarIcon' />
                            Status
                        </li> */}
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Report</h3>
                    <ul className="sidebarList">
                        <li className={reportLetgerActive ? "sidebarListItem active" : "sidebarListItem"} onClick={reportLedgerNavigate}>
                            <LineStyle className='sidebarIcon' />
                            Letger
                        </li>
                        <li className={reportStatementActive ? "sidebarListItem active" : "sidebarListItem"} onClick={reportStatementNavigate}>
                            <AccountBalanceWallet className='sidebarIcon' />
                            Statement
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Bank List</h3>

                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Settings</h3>
                </div>
            </div>
        </div>
    )
}
