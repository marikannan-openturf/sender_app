import { ArrowDownward,ArrowUpward } from "@mui/icons-material"
import { useState } from "react";
import Bank from "./Bank";
import './featuredInfo.css'
import Mobile from "./Mobile"
export default function FeaturedInfo() {
  const [tab, setTab] = useState(false)

  const switchToMobile = () =>{
    setTab(false)
  } 
  const switchToBank = () =>{
    setTab(true)
  }
  return (
    <div className='featured'>
     {/*  <div className="featuredItem">
          <span className="featuredTitle">Income</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$231.45</span>
              <span className="featuredMoneyRate">-$31.45 <ArrowDownward className="featuredIcon negative" /> </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
          <span className="featuredTitle">Balance</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$231.45</span>
              <span className="featuredMoneyRate">-$23.45 <ArrowDownward className="featuredIcon negative" /> </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
          <span className="featuredTitle">Expenses</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$231.45</span>
              <span className="featuredMoneyRate">$231.45 <ArrowUpward className="featuredIcon" /> </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div> */}
      <div className="status-main-container">
        <div className="main-tab-container">
            <div className="tab-container">
              <span className={!tab?"mobile-active-tab":"mobile-tab"} onClick={switchToMobile}>Mobile</span>
              <span className={tab?"bank-active-tab":"bank-tab"} onClick={switchToBank}>Bank</span>
            </div>
            <div><button className="create-transcation-btn">Create Transaction</button></div>
        </div>
        {tab?<Mobile/>:<Bank/>}
      </div>
    </div>
  )
}
