import React, {useEffect, useState} from "react";
import "./Records.css";
import Maintop from "../components/Maintop";
import view from "/view.png";

import CancelSummary from "../components/CancelSummary"

import { useRender } from "../Context";
import CancelAlert from "../Extra/CancelAlert";

function ViewButton({view, orderList, orderId, setOrderId, status}){

  const [viewOpen, setViewOpen] = useState(false)
 
  function handleViewButton(){
    setOrderId(orderId)
    setViewOpen(prev=>!prev)
  }

  return <>
    {viewOpen && <CancelSummary orderList={orderList} setOrderId={setOrderId} setViewOpen={setViewOpen} orderId={orderId} status={status}/>}
    <div className="view-img">
    <img src={view} alt="view image" onClick={handleViewButton}/>
  </div>
  </>

}



function CancelOrder({status, orderId, setOrderId}){

  const {setCancelAlert} = useRender()

  
  function handleCancelOrder(){
  
    setCancelAlert(true)
    setOrderId(orderId)
  }



  return <div className="order-status">
          <span id={status === "Cancelled"? "item-status-active" : ""}>{status}</span>

          <input type="button" id="order-status-btn" value={status === "Cancelled" ? "" : "Cancel Order"} onClick={handleCancelOrder}/>
            </div>
}








const Records = () => {
  const [records, setRecords] = useState({
    orders: [],
    orderSummary: []
  })

  const {cancelAlert} = useRender()

  const [orderId, setOrderId] = useState()


  useEffect(()=>{
    const jwt = localStorage.getItem("jwt")
    fetch("http://localhost:3000/order/orderdetails", {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        Accept: "application/json",
        'authorization': `Bearer ${jwt}`
      },
    })
    .then((res)=>res.json())
    .then((data)=>{
     
     const {addOrder, addOrderSummary} = data
      if(addOrder, addOrderSummary){
        setRecords({orders: addOrder, orderSummary: addOrderSummary})

      }
      
      
      

    })
    .catch((e)=>console.log(e))
  }, [])



  return (
    <> {cancelAlert && <CancelAlert orderId={orderId}/>} 
      <Maintop />
      <div className="main-center-records">
        <table className="records-center">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Date & Time</th>
              <th>Store Location </th>
              <th>City</th>
              <th>Store Phone</th>
              <th>Total Items</th>
              <th>Price</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>

          <tbody>
            {records.orders.map((item, index) => {

             
              const localSummary = records.orderSummary[index]
              console.log(localSummary)

              if(item.orderId !== records.orderSummary[index].orderId ) return console.log("id's dont match")

              
              return (
                <tr key={index}>
                  <td>{item.orderId}</td>
                  <td>{item.orderDateAndTime}</td>
                  <td>{item.storeLocation}</td>
                  <td>{item.city}</td>
                  <td>{item.storePhone} </td>
                  <td>{item.totalItem}</td>
                  <td>
                    <span id="item-price">{item.price}</span>
                  </td>
                  <td> <CancelOrder status={item.status} orderId={item.orderId} setOrderId={setOrderId}/> </td>
                  <td>
                      <ViewButton view={view} orderList={localSummary} orderId={item.orderId} setOrderId={setOrderId} status={item.status}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Records;
