import React from "react";
import "./CreateOrder.css";
import Button from "../components/Button";

import Maintop from "../components/Maintop";
const CreateOrder = () => {
  return (
    <>
     
          <Maintop />
        
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
