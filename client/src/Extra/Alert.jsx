import React, { useState } from "react";
import { createPortal } from "react-dom";

import "./Alert.css";
import tickImg from "/tick.png";
import Button from "../components/Button";

const Alert = ({message}) => {

  let btnText
if (message === "User already exists."){
  
  btnText = "Go Back"

}
else{
  btnText = "Go to Sign in"
}



  return createPortal(<>
 <div className="alert-overlay"/>
<div className="alert">
        <div className="alert-img">
          <img src={tickImg} alt="tick image" />
        </div>

        <div className="alert-message">
          <h1>{message}</h1>
        </div>

        <Button buttonName={btnText} link={btnText === "Go Back" ? "/register" : "/"} classname="alert-btn" />
      </div>
  </>, document.getElementById('modal')
   

);
};

export default Alert;
