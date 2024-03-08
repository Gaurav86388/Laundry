import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { inputfieldsArray, indianStates, indianDistricts } from "./fieldsArray";
import footerImg from "/Footer.png";
import { useState } from "react";
import './Register.css'
import fb from '/facebook.png'
import insta from '/instagram.png'
import linkedin from '/linkedin.png'

const Register = () => {
  const [stateName, setStateName] = useState("Assam");

  function handleStateName(e) {
    setStateName(e.target.value);
  }
  return (
    <div className="register">
      <Navbar />
      <div className="register-left">
        <h1 className="register-left-title">
          <span> Laundry</span>
          <br />
          <span>Service</span>
        </h1>
        <h4>
          <span>Doorstep Wash &</span><br/> <span>Dryclean Service</span>
        </h4>

        <div >
          <p className="register-text">Already Have Account</p>
          <Button classname="signin-btn" buttonName="Sign In" link="/"/>
        </div>
      </div>

      <div className="register-right">
        <h2>REGISTER</h2>

        <form action="">
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

      <div className="refer">
        <p className="refer-text">Now Refer & Earn ₹500 for every referral*</p>
        <p className="TandC">* Terms and conditions will be applied</p>
      </div>

      <div className="footer-img">
        <img src={footerImg} alt="footer image" />
        <p id='about'><b>About us</b></p><br/>
            <p id='door'>Doorstep Wash & Dryclean Service</p>
            
                <p id="foot-home"><b>Home</b></p>
                <p id="foot-signin">Sign In</p>
                <p id="foot-regi">Register</p>

                <div id='foot-price'>
                    <b>Pricing</b>
                </div>

                <div className='foot-carrer'>
                    <p id="foot-carrer"><b>Carrer</b></p>
                    <p id="foot-blogs">Blogs</p>
                    <p id="foot-create">Create</p>
                </div>

                <div id='foot-contact'>
                    <b>Contact</b>
                </div>

                <p id='foot-sm'>SOCIAL MEDIA</p>
                <img src={fb} alt="fb logo" id='fb'/>
                <img src={insta} alt="insta logo" id='insta'/>
                <img src={linkedin} alt="linkedin logo" id='linkedin'/>
      </div>

      <div className='footer'>
          <div className='text'><span>2021 </span><span>&copy; </span><span>Laundry</span></div>  
        </div>
    </div>
  );
};

export default Register;
