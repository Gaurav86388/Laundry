import React, {useState} from "react";

import "./CancelSummary.css";
import Card from "./Card";
import cross_img from "/x-button.png"
import { useRender } from "../Context";
import CancelAlert from "../Extra/CancelAlert";
const CancelSummary = ({orderList, handleViewButton, orderId}) => {

const [cancelButton, setCancelButton] = useState()

const {setCancelProceedIndex,} = useRender()

function handleCancel(){

setCancelButton(true)
}



return (<>
  {cancelButton && <CancelAlert orderId={orderId} />}
    <div className="cancelSummary">
      <div className="cancelSummary-title">

        <h1>Summary</h1>
        <div className="cross-img">
        <img src={cross_img} alt="cross image" onClick={ ()=>handleViewButton(prev=> !prev)}/>
      </div>
      </div>
      
      <div className="cancelSummary-store-info">
        <div id="store-location">
          <h3>Store Location</h3>
          <p>{orderList.storeDetails.storeLocation}</p>
        </div>

        <div className="store-address">
          <h3>Store Address:</h3>
          <p>{orderList.storeDetails.storeAddress}</p>

        </div>

        <div className="store-phone">
          <h3>Phone</h3>
        
        <p>{orderList.storeDetails.phone}</p>   
  
        </div>
      </div>

      <div className="order-details">
        <p>Order Details</p>
        <table id="order-details-table">
          <tbody>
            { orderList.orderDetails.rows.map((item, index)=>{
             
              return <tr key={index}>
              <td>{item.product}</td>
              <td id="order-details-table-services">{...item.serviceNames}</td>
              <td>
                <div className="order-details-table-price">
                  <h4 id="order-details-table-price-calc">{item.expense.calculation}</h4>
                  <span>{item.expense.result}</span>
                </div>
              </td>
            </tr>
            })}
            
 
          </tbody>
        </table>
        <div className="below-table">
          <div className="sub-total">
            <h4>Sub total:</h4> <h3> {orderList.orderDetails.subTotal}</h3>
          </div>
          <div className="pickup-charge">
            <h4>Pickup Charges:</h4> <h3>{orderList.orderDetails.pickupCharge}</h3>
          </div>
        </div>

        <div className="total">
          <h4>Total:</h4> <h3> {orderList.orderDetails.total}</h3>
        </div>
      </div>

      <div className="address">
        <p>Address</p>

        <div className="address-sub">
          <div className="address-cards">

            <Card title={orderList.userAddress.title} address={orderList.userAddress.fulladdress} />
                    
          </div>

        </div>
      </div>
      <div className="cancelSummary-lower">

          <input id="cancelSummary-cancel-button" type="button" onClick={handleCancel} value="Cancel"/>
        
      </div>
    </div>
    </>
  );
};

export default CancelSummary;