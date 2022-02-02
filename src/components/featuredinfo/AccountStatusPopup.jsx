import './AccountStatusPopupStyle.css'
import close from'../../assets/img/popupCloseIcon.png'

export default function AccountStatusPopup() {
  return (
    <div className="account-status-popup-container">
      <img src={close} alt='closeImage' width="12px" height="12px" className="account-status-popup-close" />
        <div className="account-popup-sub-container">
            <span className='account-status-popup-title-box'>Account Status</span>
            <span className='account-statement'> Account Status<pre className='spacebox'>  :  </pre>Active</span>
            <span className='account-statement'> Account Sub Status<pre className='spacebox'>  :  </pre>Active</span>
            <span className='account-statement'> Legal Entity Identifier<pre className='spacebox'>  :  </pre>Airtel, India</span>
            <div className='account-status-popup-btns'>
              <button className='account-status-popup-ok-btn'>OK</button>
              <button className='account-status-popup-create-transt-btn'>Create Transaction</button>
          </div>
          </div>
    </div>
  )
}
