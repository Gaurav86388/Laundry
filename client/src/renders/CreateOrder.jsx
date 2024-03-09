import React from "react";
import "./CreateOrder.css";
import Button from "../components/Button";
const CreateOrder = () => {
  return (
    <>
      <div className="main-top">
        <h2 id="main-top-title">Orders | 0</h2>
      </div>

      <div className="main-center">
        <p>No Orders available</p>

        <Button
          classname="home-create-btn"
          buttonName="Create"
          link="/createorder"
        />
      </div>
    </>
  );
};

export default CreateOrder;
