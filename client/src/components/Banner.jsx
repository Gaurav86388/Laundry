import React from 'react'
import footerImg from "/Footer.png";
import fb from "../assets/socialmedia/facebook.png";
import insta from "../assets/socialmedia/instagram.png";
import linkedin from "../assets/socialmedia/linkedin.png";
import "./Banner.css"

const Banner = () => {
  return (<>

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
    </>
  )
}

export default Banner