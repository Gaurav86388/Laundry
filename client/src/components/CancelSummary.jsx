import React, {useEffect, useState} from "react";

import "./CancelSummary.css";
import Card from "./Card";
import cross_img from "/x-button.png"
import { useRender } from "../Context";
import ProgressBar from "../Extra/ProgressBar";
const CancelSummary = ({orderList, orderId, setOrderId, setViewOpen, status}) => {


 const {setCancelAlert, cancelAlert} = useRender()
const [checkCancel, setCheckCancel] = useState(false)
function handleCancel(){

  setCancelAlert(true)
  setOrderId(orderId)
  setCheckCancel(true)

}

useEffect(()=>{

  if(!cancelAlert && checkCancel){
    setViewOpen(false)
   
  }
  
}, [checkCancel, cancelAlert])


return (<>
 
    <div className="cancelSummary">
      <div className="cancelSummary-title">

        <h1>Summary</h1>
        <div className="cancelSummary-cross-img">
        <img src={cross_img} alt="cross image" onClick={ ()=>setViewOpen(false)}/>
      </div>
      </div>
      
      <div className="cancelSummary-store-info">
        <div className="cancelSummary-store-location">
          <h3>Store Location</h3>
          <p>{orderList.storeDetails.storeLocation}</p>
        </div>

        <div className="cancelSummary-store-address">
          <h3>Store Address:</h3>
          <p>{orderList.storeDetails.storeAddress}</p>

        </div>

        <div className="cancelSummary-store-phone">
          <h3>Phone</h3>
        
        <p>{orderList.storeDetails.phone}</p>   
  
        </div>
      </div>
      <ProgressBar />
      <div className="cancelSummary-order-details">
        <p>Order Details</p>
        <table id="cancelSummary-order-details-table">
          <tbody>
            { orderList.orderDetails.rows.map((item, index)=>{
             
              return <tr key={index}>
              <td>{item.product}</td>
              <td id="cancelSummary-order-details-table-services">{...item.serviceNames}</td>
              <td>
                <div className="cancelSummary-order-details-table-price">
                  <h4 id="cancelSummary-order-details-table-price-calc">{item.expense.calculation}</h4>
                  <span>{item.expense.result}</span>
                </div>
              </td>
            </tr>
            })}
            
 
          </tbody>
        </table>
        <div className="cancelSummary-below-table">
          <div className="cancelSummary-sub-total">
            <h4>Sub total:</h4> <h3> {orderList.orderDetails.subTotal}</h3>
          </div>
          <div className="cancelSummary-pickup-charge">
            <h4>Pickup Charges:</h4> <h3>{orderList.orderDetails.pickupCharge}</h3>
          </div>
        </div>

        <div className="cancelSummary-total">
          <h4>Total:</h4> <h3> {orderList.orderDetails.total}</h3>
        </div>
      </div>

      <div className="cancelSummary-address">
        <p>Address</p>

        <div className="cancelSummary-address-sub">
          <div className="cancelSummary-address-cards">

            <Card title={orderList.userAddress.title} address={orderList.userAddress.fulladdress} />
                    
          </div>

        </div>
      </div>
      <div className="cancelSummary-lower">

          <input id={status=== "Cancelled" ? "cancelSummary-cancel-button-inactive":"cancelSummary-cancel-button-active"} type="button" onClick={ status!== "Cancelled" && handleCancel} value="Cancel"/>
        
      </div>
    </div>
    </>
  );
};

export default CancelSummary;