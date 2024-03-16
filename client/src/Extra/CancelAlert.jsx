import React, { useEffect } from 'react'
import "./CancelAlert.css"
import warningImg from "/warning.png"
import crossImg from "/x-button.png"
import { useRender } from '../Context'


const CancelAlert = ({orderId}) => {

 const {setCancelAlert, onHandleRender} = useRender()




function handleAlertProceed(){
  const jwt = localStorage.getItem("jwt")

fetch("http://localhost:3000/order/orderdetails",{

  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    'authorization': `Bearer ${jwt}`
  },
  body: JSON.stringify({orderId: orderId})
})
.then(res=>res.json())
.then(data=>{
  
  if(data.status==="cancelled"){
    
    setCancelAlert(false)
    
  }
  
})
.catch(e=>console.log(e))

onHandleRender("createOrder")
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
          <h5>Are you sure you want to cancel the order no: <span id="cancel-order-id">{orderId}</span></h5>
      <button onClick={handleAlertProceed} id="cancel-alert-box-message-btn">Proceed</button>
        
      </div>

  </div>
</div></div>
    
  )
}

export default CancelAlert