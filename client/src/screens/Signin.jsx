import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "./SignIn.css";
import footerImg from "/Footer.png";
import fb from "/facebook.png";
import insta from "/instagram.png";
import linkedin from "/linkedin.png";
import lock from "/padlock.png";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div className="signin">
      <div className="top">
        <Navbar />
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
                                        <div className="refer">
                                        <p className="refer-text">
                                            Now Refer & Earn ₹500 for every referral*
                                        </p>
                                        <p className="TandC">* Terms and conditions will be applied</p>
                                        </div>

                                <div className="footer-up">
                                    <div className="bg-img"> <img src={footerImg} alt="bg-image"/></div>
                              
                                <div id="about">
                                    <b>ABOUT US</b>
                                    <p>Doorstep Wash & Dryclean Service</p>

                                </div>
                                
                                

                                <div id="foot-home">
                                    <b>Home</b>
                                    <p>Sign In</p>
                                    <p>Register</p>

                                </div>
                                
                                <div id="foot-price">
                                    <b>Pricing</b>
                                </div>

                                <div className="foot-carrier">
                                 
                                    <b>Carrier</b>                       
                                    <p>Blogs</p>
                                    <p>Create</p>
                                </div>

                                <div id="foot-contact">
                                    <b>Contact</b>
                                </div>

                                <div id="foot-sm">
                                   <b>SOCIAL MEDIA</b> 
                                   <div className="foot-sm-icons">

                                            <img src={fb} alt="fb logo" />
                                            <img src={insta} alt="insta logo" />
                                            <img src={linkedin} alt="linkedin logo" />

                                   </div>
                                    
                                </div>

                                </div>
                            <div className="footer-down">
                            
                                <p>2021 &copy; Laundry</p>
                              
                            </div>
        </div>
      
    </div>
  );
};

export default Signin;
