import React, {useState} from "react";
import { createPortal } from "react-dom";

import "./Alert.css";
import tickImg from "/tick.png";
import Button from "../components/Button";


const alertMessages = {
  order: {
  heading :'Your order is successful',
 message : 'You can track the delivery in the "Orders" section.',
 btnName : 'Go to Orders'
},

regFail: {
  heading :"Registration Unsuccessful.",
  message : 'The email / phone you entered already exists.',
  btnName : "Go back"
},

regPass: {
  heading :"Registration Successful.",
  message : 'Your account has been created.',
  btnName : "Go to Sign in"
}


}
const Alert = ({message}) => {

 let heading, info, btnName
  let link = ""

if (message=== "User already exists."){
  
  
  heading = alertMessages.regFail.heading
  info = alertMessages.regFail.message
  btnName = alertMessages.regFail.btnName
  link = "/register"
}
else if (message === "Success register"){

  heading = alertMessages.regPass.heading
  info = alertMessages.regPass. message
  btnName = alertMessages.regPass.btnName

  link = "/"

}

else if (message === "Confirm"){

  heading = alertMessages.order.heading
  info = alertMessages.order.message
  btnName = alertMessages.order.btnName
  

}


  return createPortal(<>
 <div className="alert-overlay"/>
<div className="alert">
        <div className="alert-img">
          <img src={tickImg} alt="tick image" />
        </div>

        <div className="alert-message">
          <h1>{heading}</h1>
          <p>{info}</p>
        </div>

        <Button buttonName={btnName} link={link} classname="alert-btn" />
      </div>
  </>, document.getElementById('modal')
   

);
};

export default Alert;
