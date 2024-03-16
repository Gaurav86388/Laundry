import React from 'react'
import "./CancelAlert.css"
import warningImg from "/warning.png"
import crossImg from "/x-button.png"
import { useRender } from '../Context'
import {useNavigate} from "react-router-dom"
const CancelAlert = ({orderId, setCancelButton}) => {

 const {setCancelAlert, onHandleRender} = useRender()

 const navigate = useNavigate()
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
  console.log(data.status)
  if(data.status==="cancelled"){
    setCancelAlert(false)
    window.location.reload()

  }
  
})
.catch(e=>console.log(e))


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