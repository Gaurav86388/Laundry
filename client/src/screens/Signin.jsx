import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import "./SignIn.css"
import footerImg from '/Footer.png'

const Signin = () => {
  return (
    <div className='signin'>
        <Navbar />
        <div className="signin-left">

            <h1 className='signin-left-title'><span> Laundry</span><br/><span>Service</span></h1>
            <h4 className='door'>Doorstep Wash & Dryclean Service</h4>

            <div >
                <p id='register-text'>Don't Have An Account?</p>
                <Button classname='reg-register-btn' buttonName="Register" link="/register"/>
            </div>

        </div>

        <div className="signin-right">

            <h2 id="Signin-head">SIGN IN</h2>

            <form action="">
                <div className='wrapper'>
                    <div className='input-data'>
                        <input  type="text" required/>
                        <label  htmlFor="mobile-email">Mobile/Email</label>
                    </div> 
                </div>
                <div className='wrapper-pass'>
                    <div className='input-data-pass'>
                        <input  type="text" required/>
                        <label  htmlFor="password">Password</label>
                    </div>
                </div>
                <input type="url" name="forget-password" id="forget-password" value="Forget Password?"/>

                <Button buttonName="Sign In"classname='signin-signin-btn'/>
            </form>

        </div>
        
        <div className='refer'>
            <p className='refer-text'>Now Refer & Earn ₹500 for every referral*</p>
            <p className='TandC'>* Terms and conditions will be applied</p>
        </div>

        <div className='footer-img'>
            <img src={footerImg} alt="footer image"/>
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
                
           
        </div>
        <div className='footer'>
          <div className='text'><span>2021 </span><span>&copy; </span><span>Laundry</span></div>  
        </div>
        

    </div>
  )
}

export default Signin