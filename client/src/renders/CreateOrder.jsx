import React from "react";
import "./CreateOrder.css";
import Button from "../components/Button";

import Maintop from "../components/Maintop";
const CreateOrder = () => {
  return (
    <>
     
          <Maintop />
        
      <div className="main-center-order">
        <p>No Orders available</p>

        <Button
          classname="home-create-btn"
          buttonName="Create"

        />
      </div>
    </>
  );
};

export default CreateOrder;
