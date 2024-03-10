import React from "react";
import "./Records.css";
import Maintop from "../components/Maintop";
import view from "/view.png";
import { OrderRecords } from "./orderRecords.js";
const Records = () => {
  return (
    <>
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
            {OrderRecords.map((item, index) => {
              return (
                <tr>
                  <td>{item.orderId}</td>
                  <td>{item.orderDateTime}</td>
                  <td>{item.storeLocation}</td>
                  <td>{item.city}</td>
                  <td>{item.storePhone}</td>
                  <td>{item.totalItems}</td>
                  <td>
                    <span id="item-price">{item.price}</span>
                  </td>
                  <td>{item.status}</td>
                  <td>
                    <div className="view-img">
                      <img src={view} alt="view image" />
                    </div>
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
