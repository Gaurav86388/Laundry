import React, { useEffect } from "react";
import { useState } from "react";
import { useRender } from "../Context";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

import { inputfieldsArray, indianStates, indianDistricts } from "./fieldsArray";
import './Register.css'
import Alert from "../Extra/Alert";

const navNames = ["Home", "Pricing", "Career", "Sign In"]



const Register = () => {
  const {showAlert, setShowAlert} = useRender()
  const [stateName, setStateName] = useState("");
  const [RegDetails, setRegDetails] = useState({
    Name: "",
    Email: "",
    Phone: null,
    State: "",
    District: "Baksa",
    Address: "",
    Pincode: "",
    Password: "",
    ConfirmPassword: ""
  })
const [checkMatchPassword, setCheckMatchPassword] = useState(true)

  useEffect(()=>{
    function addRegDetails(){
      setRegDetails(prev=>({...prev, State: stateName}))
    }
    
    addRegDetails()

  }, [stateName])

  function addFormDetails(e){
    let newvalue = e.target.value
    let name = e.target.name

    if(name=== "Confirm Password"){
      name = 'ConfirmPassword'
    }

    setRegDetails(prev=>({...prev, [name]: newvalue}))
  }

  function handleStateName(e) {
    setStateName(e.target.value);
  }
  useEffect(()=>{

    setCheckMatchPassword(true)
  }, [RegDetails.ConfirmPassword])

  function handleRegisterForm(e){
    e.preventDefault()
    console.log(RegDetails)
    if(RegDetails.Password !== RegDetails.ConfirmPassword) return setCheckMatchPassword(false)

   
      fetch("https://laundrycartapp-jahb.onrender.com/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(RegDetails)
      })
    .then((res)=>res.json())
    .then(data=>{
      
      data && setShowAlert(data.message)
      
      
    })
    .catch(e=>console.log(e))
 
  }
  return (<>
    {showAlert !== "" && <Alert message={showAlert}/>}
    <div className="register">
      <div className="top">
        <Navbar navNames={navNames}/>
      </div>

      <div className="middle">
      <div className="register-left">
                                        <div className="register-left-upper">
                                            <h1 className="register-left-title">
                                            <span> Laundry</span>
                                            <br />
                                            <span>Service</span>
                                            </h1>
                                            <h4 className="register-door">Doorstep Wash & <br></br>Dryclean Service</h4>
                                        </div>

                                        <div className="register-left-lower">
                                            <p id="register-text">Don't Have An Account?</p>
                                            <Button
                                            classname="reg-signin-btn"
                                            buttonName="Sign In"
                                            link="/"
                                            />
                                        </div>
                             </div>


          <div className="register-right">
        <h2 className="register-right-title">REGISTER</h2>

        <form onSubmit={handleRegisterForm} className="register-form">
          {inputfieldsArray.map((item, index) => {
            let label1,
              type1,
              label2,
              type2 = "";

            label1 = item[0] && item[0].value;
            type1 = item[0] && item[0].type;

            label2 = item[1] && item[1].value;
            type2 = item[1] && item[1].type;

            return (
              <div className="register-col" key={index}>
                <div className="first-col">
                  <label htmlFor={label1}>{label1}</label>

                  {type1 !== "dropdown" ? (
                    <input name={label1} type={type1} onChange={addFormDetails} required/>
                  ) : 
                  <select name={label2} id="dropdown" onChange={addFormDetails} required>
                          {indianDistricts[stateName].map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      
                    
                  }
                </div>

                {index !== inputfieldsArray.length - 1 ? (
                  <div className="second-col">
                    <label htmlFor={label2}>{label2}</label>

                    {type2 !== "dropdown" ? (
                      <input name={label2} type={type2} onChange={addFormDetails} required/>
                    ) : 
                      
                    <select
                    name={label1}
                    id="dropdown"
                    onChange={handleStateName }
                    required
                  >
                    {indianStates.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}{" "}
                        </option>
                      );
                    })}
                  </select>
                      
                    }
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
            {!checkMatchPassword && <p id="incorrect-pass">Passwords do not match</p>}
          <div className="agreement-box">
            <input type="checkbox" name="agreement" id="agreement" required/>
            <p id="agreement-text">
              I agree to Terms & Condition receiving marketing and promotional
              materials
            </p>
            
          </div>
        
          <Button buttonName="Register" classname="reg-register-btn" btnType="submit"/>
          
        </form>
      </div>

      </div>

      <div className="bottom">
        <Banner />
        <Footer />
        </div>

    </div>
    </>
  );
};

export default Register;
