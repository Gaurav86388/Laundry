import React from "react";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

import { inputfieldsArray, indianStates, indianDistricts } from "./fieldsArray";
import './Register.css'

const navNames = ["Home", "Pricing", "Career", "Sign In"]

const Register = () => {
  const [stateName, setStateName] = useState("");

  function handleStateName(e) {
    setStateName(e.target.value);
  }
  return (
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
                                            classname="reg-register-btn"
                                            buttonName="Sign In"
                                            link="/"
                                            />
                                        </div>
                             </div>


          <div className="register-right">
        <h2 className="register-right-title">REGISTER</h2>

        <form action="" className="register-form">
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
                    <input name={label1} type={type1} />
                  ) : 
                  <select name={label2} id="dropdown">
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
                      <input name={label2} type={type2} />
                    ) : 
                      
                    <select
                    name={label1}
                    id="dropdown"
                    onChange={handleStateName}
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

          <div className="agreement-box">
            <input type="checkbox" name="agreement" id="agreement" />
            <p id="agreement-text">
              I agree to Terms & Condition receiving marketing and promotional
              materials
            </p>
            
          </div>

          <Button buttonName="Register" classname="register-btn" />
        </form>
      </div>

      </div>

      <div className="bottom">
        <Banner />
        <Footer />
        </div>

    </div>
  );
};

export default Register;
