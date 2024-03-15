import React, {useState, useEffect} from "react";

import "./Summary.css";
import Card from "./Card";
import cross_img from "/x-button.png"
import { useRender } from "../Context";
import Alert from "../Extra/Alert";

const cardData = [{

  title: "Work",
  address: "12th Floor, Infinity Tech Park, Mumbai"
},
{
  title: "Friend's Place",
  address: "5th Avenue, Sector 17, Chandigarh"
}  
  ]

const Summary = () => {

const {setShowSummary, showAlert, setShowAlert, laundryCart} = useRender()


const [ isSelected, setIsSelected] = useState()
const [cardAdd, setCardAdd] = useState()

const [formData, setformData] = useState({
  storeDetails: {
    storeLocation:"",
    storeAddress: "",
    phone: ""
  },

  orderDetails: {
    rows: [],
    subTotal : 0,
    pickupCharge : 0,
    total: 0
  },
  userAddress: {
    title: "",
    fulladdress: "",
    city: ""
  }
})

const values = laundryCart.map(item=> item.product !== "" && parseInt(item.expense.result))

const pickupCharge = 90
let subTotal = 0
for (let i=0; i< values.length; i++){
  subTotal= subTotal + values[i]
}
useEffect(()=>{

  if(subTotal > 0){
    setformData((prev)=>({...prev, orderDetails: {...prev.orderDetails, subTotal: subTotal, pickupCharge: pickupCharge, total: subTotal + pickupCharge}}))
  const newArray = laundryCart.filter(item=> { if(item.product !== "" )return item } )

  setformData((prev)=>({...prev, orderDetails: {...prev.orderDetails, rows: newArray}}))
  }



}, [subTotal])

console.log(formData)
function handleConfirm(){

fetch("http://localhost:3000/order/orderdetails", {
  method: "POST",
  headers: {
    'Content-Type': "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify(formData)
})
.then(res=>res.json())
.then(data=>{
if(data ==="success"){
  setShowAlert("Confirm")
}
else if(data === "less details"){
  setShowAlert("less details")
}
})
.catch(e=>console.log(e))
  
  
  
}


return (<>
  {showAlert !== "" && <Alert message={showAlert}/>}
  
    <div className="summary">
      <div className="summary-title">

        <h1>Summary</h1>
        <div className="cross-img">
        <img src={cross_img} alt="cross image" onClick={()=>setShowSummary(false)}/>
      </div>
      </div>
      
      <div className="summary-store-info">
        <div id="store-location">
          <select name="" id="store-location-select" 
          onChange={(e)=>setformData(prev=>({...prev, storeDetails: {...prev.storeDetails, storeLocation: e.target.value}}))}>


          <option id="store-location-option">Store location</option>
            <option id="store-location-option">J P Nagar</option>
            <option id="store-location-option">Maha Nagar</option>
          </select>
        </div>
        <div className="store-address">
          <h3>Store Address:</h3>
          <input type="text" placeholder="—"  onChange={(e)=>setformData(prev=>({...prev, storeDetails: {...prev.storeDetails, storeAddress: e.target.value}}))}/>
         
        </div>

        <div className="store-phone">
          <h3>Phone</h3>
          <input type="number" placeholder="—"  onChange={(e)=>setformData(prev=>({...prev, storeDetails: {...prev.storeDetails, phone: e.target.value}}))}/>
          
        </div>
      </div>

      <div className="order-details">
        <p>Order Details</p>
        <table id="order-details-table">
          <tbody>
            {laundryCart.map((item, index)=>{

              if(item.product === "") return

             
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
            <h4>Sub total:</h4> <h3>{subTotal}</h3>
          </div>
          <div className="pickup-charge">
            <h4>Pickup Charges:</h4> <h3>90</h3>
          </div>
        </div>

        <div className="total">
          <h4>Total:</h4> <h3>{subTotal + 90}</h3>
        </div>
      </div>

      <div className="address">
        <p>Address</p>

        <div className="address-sub">
          <div className="address-cards">
            {cardData.map((item, index)=>{

                return <Card key={index} title={item.title} address={item.address}
                cardId={index} selected = {isSelected === index}  setIsSelected={setIsSelected}
                  setformData={setformData} cardSelect={cardAdd === item.address} cardAdd={cardAdd} setCardAdd= {setCardAdd}/>
            })}
           

          </div>

          <input type="button" className="address-sub-btn" value="ADD NEW" />
        </div>
      </div>
      <div className="summary-lower">

        <button id="summary-confirm-button" onClick={handleConfirm}> Confirm</button>
      </div>
    </div>
    </>
  );
};

export default Summary;