import React from 'react'
import "./CancelAlert.css"
import warningImg from "/warning.png"
import crossImg from "/x-button.png"

import { useRender } from '../Context'

const CancelAlert = ({orderId}) => {

 const {setCancelAlert, setCancelProceedIndex} = useRender()


function handleAlertProceed(){

    setCancelProceedIndex(orderId)
setCancelAlert(false)

}



  return ( <div className="ene">
    <div className="cancel-alert-overlay"/>
    <div className='cancel-alert-box'>

  <div className="cancel-alert-box-title">
      <span>Alert</span>
      <div className="cancel-alert-box-cross">
          <img src={crossImg} alt="cross image" onClick={()=>setCancelAlert(false)}/>
      </div>
  </div>

  <div className="cancel-alert-box-content">

      <div className="cancel-alert-box-icon">
          <img src={warningImg} alt="warning image" />
      </div>
      <div className="cancel-alert-box-message">
          <h5>Are you sure you want to cancel the order no {orderId}</h5>
          <button onClick={handleAlertProceed} id="cancel-alert-box-message-btn">Proceed</button>
      </div>

  </div>
</div></div>
    
  )
}

export default CancelAlert