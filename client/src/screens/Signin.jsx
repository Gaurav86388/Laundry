import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "./SignIn.css";

import lock from "/padlock.png";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const navNames = ["Home", "Pricing", "Career", "Sign In"]
const Signin = () => {
  return (
    <div className="signin">
      <div className="top">
        <Navbar navNames = {navNames}/>
      </div>

      <div className="middle">
                            <div className="signin-left">
                                        <div className="signin-left-upper">
                                            <h1 className="signin-left-title">
                                            <span> Laundry</span>
                                            <br />
                                            <span>Service</span>
                                            </h1>
                                            <h4 className="door">Doorstep Wash & Dryclean Service</h4>
                                        </div>

                                        <div className="signin-left-lower">
                                            <p id="register-text">Don't Have An Account?</p>
                                            <Button
                                            classname="reg-register-btn"
                                            buttonName="Register"
                                            link="/register"
                                            />
                                        </div>
                             </div>

                            <div className="signin-right">
                                        
                            <h1 className="signin-right-title">SIGN IN</h1>

                                <form action="" className="signin-form">
                                    
                                        <div className="input-data">
                                            
                                            <label htmlFor="mobile-email">Mobile / Email</label>
                                            <input type="text" required />
                                       
                                    </div>
                                   
                                    <div className="input-data">
                                        
                                        <label htmlFor="password">Password</label>
                                        <input type="password" required />
                                        
                                        
                                        
                                    </div>
                                    <div className="lock">
                                        <img src={lock} alt="lock"/>
                                        </div>
                                    
                                    <Link to="/" id='forget-link'> Forget Password ?</Link>

                                    <Button buttonName="Sign In" classname="signin-signin-btn" />
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

export default Signin;
