import React, {useState} from "react";

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

const values = laundryCart.map(item=> item.product !== "" && parseInt(item.expense.result))


let subTotal = 0
for (let i=0; i< values.length; i++){
  subTotal= subTotal + values[i]
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
          <select name="" id="store-location-select">
          <option id="store-location-option">Store location</option>
            <option id="store-location-option">J P Nagar</option>
            <option id="store-location-option">Maha Nagar</option>
          </select>
        </div>
        <div className="store-address">
          <h3>Store Address:</h3>
          <input type="text" placeholder="—" />
         
        </div>

        <div className="store-phone">
          <h3>Phone</h3>
          <input type="number" placeholder="—" />
          
        </div>
      </div>

      <div className="order-details">
        <p>Order Details</p>
        <table id="order-details-table">
          <tbody>
            {laundryCart.map((item, index)=>{

              if(item.product === "") return

              console.log(laundryCart)
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

                return <Card key={index} cardId={index} selected = {isSelected === index} isSelected={setIsSelected}
                 title={item.title} address={item.address}/>
            })}
           

          </div>

          <input type="button" className="address-sub-btn" value="ADD NEW" />
        </div>
      </div>
      <div className="summary-lower">

        <button id="summary-confirm-button" onClick={()=>setShowAlert("Confirm")}> Confirm</button>
      </div>
    </div>
    </>
  );
};

export default Summary;


