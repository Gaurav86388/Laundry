import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
const Signin = () => {
  return (
    <div className='signin'>
        <Navbar />
        <div className="signin-left">

            <h1 className='signin-left-title'><span> Laundry</span><span>Service</span></h1>
            <h4>Doorstep Wash & Dryclean Service</h4>

            <div className='register-text'>
                <p>Don't Have An Account?</p>
                <Button classname='register-btn' buttonName="Register"/>
            </div>

        </div>

        <div className="signin-right">

            <h2>SIGN IN</h2>

            <form action="">

                <label htmlFor="mobile-email">Mobile / Email</label>
                <input type="text" />
                <label htmlFor="password">Password</label>
                <input type="text" />
                <input type="url" name="forget-password" id="forget-password" value="Forget Password?"/>

                <Button buttonName="Sign In"classname='signin-btn'/>
            </form>

        </div>

    </div>
  )
}

export default Signin