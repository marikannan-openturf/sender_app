import { ArrowDownward,ArrowUpward } from "@mui/icons-material"
import './featuredInfo.css'
export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
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
      </div>
    </div>
  )
}
