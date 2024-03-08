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
            <h4>Doorstep Wash & Dryclean Service</h4>

            <div className='register-text'>
                <p>Don't Have An Account?</p>
                <Button classname='register-btn' buttonName="Register"/>
            </div>

        </div>

        <div className="signin-right">

            <h2>SIGN IN</h2>

            <form action="">

                <label className="mobile-email" htmlFor="mobile-email">Mobile / Email</label>
                <input type="text" />
                <label className="password" htmlFor="password">Password</label>
                <input type="text" />
                <input type="url" name="forget-password" id="forget-password" value="Forget Password?"/>

                <Button buttonName="Sign In"classname='signin-btn'/>
            </form>

        </div>
        
        <div className='refer'>
            <p className='refer-text'>Now Refer & Earn ₹500 for every referral*</p>
            <p className='TandC'>* Terms and conditions will be applied</p>
        </div>

        <div className='footer-img'>
            <img src={footerImg} alt="footer image"/>
            <span id='about'>About us</span><br/>
            <span id='door'>Doorstep Wash & Dryclean Service</span>
        </div>
        <div className='footer'>
          <div className='text'><span>2021 </span><span>&copy; </span><span>Laundry</span></div>  
        </div>

    </div>
  )
}

export default Signin