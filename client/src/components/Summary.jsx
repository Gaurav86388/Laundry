import React from "react";
import Button from "./Button";
import "./Summary.css";
import Card from "./Card";
import {createPortal} from 'react-dom'
const Summary = () => {
  return createPortal(
    <div className="summary">
      <div className="summary-title">
        <h1>Summary</h1>

      </div>
      <div className="summary-store-info">
        <div id="store-location">
          <select name="" id="store-location-select">
            <option id="store-location-option">Store Location</option>
          </select>
        </div>
        <div className="store-address">
          <h3>Store Address:</h3>
          <span>—</span>
        </div>

        <div className="store-phone">
          <h3>Phone</h3>
          <span>—</span>
        </div>
      </div>

      <div className="order-details">
        <p>Order Details</p>
        <table id="order-details-table">
          <tbody>
            <tr>
              <td>Shirts</td>
              <td id="order-details-table-services">Washing, Ironing</td>
              <td>
                <div className="order-details-table-price">
                <h4 id="order-details-table-price-calc">5 x 20 = </h4><span>100</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Shirts</td> <td id="order-details-table-services">Washing, Ironing</td>
              <td>
                <div className="order-details-table-price">
                 <h4 id="order-details-table-price-calc">5 x 20 = </h4> <span>100</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Shirts</td>
              <td id="order-details-table-services">Washing, Ironing</td>

              <td>
                <div className="order-details-table-price">
                <h4 id="order-details-table-price-calc">5 x 20 = </h4><span>100</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="below-table">

                    <div className="sub-total">
                    <h4>Sub total:</h4> <h3>450</h3>
                    </div>
                    <div className="pickup-charge">
                    <h4>Pickup Charges:</h4> <h3>90</h3>
                    </div>
                    </div>

        <div className="total">
          <h4>Total:</h4> <h3>Rs. 560</h3>
        </div>
        

      </div>

      <div className="address">
      <p>Address</p>

        <div className="address-sub">
          <div className="address-cards">
          <Card />
          <Card />
          </div>
        
        <input type="button" className = "address-sub-btn" value="ADD NEW" />
        </div>

       
        
      </div>
      <div className="summary-lower">
        <Button buttonName="Confirm" classname="summary-confirm-button"/>
      </div>
    </div>,
    document.getElementById('summary')
  );
};

export default Summary;
