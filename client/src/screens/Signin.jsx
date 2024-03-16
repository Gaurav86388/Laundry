import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "./SignIn.css";

import lock from "/padlock.png";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Loader from "../Extra/Loader";

import { useRender} from "../Context";
const navNames = ["Home", "Pricing", "Career", "Sign In"];


const Signin = () => {
  const navigate = useNavigate()
  const [signinDetails, setSigninDetails] = useState({
    Userkey: "",
    Password: "",
  });

  const [signinSuccess, setSigninSuccess] = useState(false)
  const [userNotFound, setNotUserFound] = useState(false)
  const [passwordInCorrect, setPasswordInCorrect] = useState(false)

  const {setUsername} = useRender()

  function handleSigninForm(e) {
    e.preventDefault();
  
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(signinDetails),
    })
      .then((res) => res.json())
      .then((data) => {

        if(data.message === 'validated'){
          const token = data.token
 
          localStorage.setItem('jwt', token)

          setSigninSuccess(true)
          setUsername(data.name)

          setTimeout(()=>{
            navigate("/home")
          }, 1000)
        } 
        else if(data.message === "Not Found"){
            setNotUserFound(true)
        }
        else if(data.message === "Invalid password"){
          setPasswordInCorrect(true)
        }
      })
      .catch((e) => console.log(e));
  }

  function handleOnChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    if(name === "Userkey"){
      setNotUserFound(false)
    }
    else if(name ==="Password"){
      setPasswordInCorrect(false)
    }
    setSigninDetails((prev) => ({ ...prev, [name]: value }));
  }
  return ( <>
    {signinSuccess && <Loader />}
    <div className="signin">
      <div className="top">
        <Navbar navNames={navNames} />
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
              classname="signin-register-btn"
              buttonName="Register"
              link="/register"
            />
          </div>
        </div>

        <div className="signin-right">
          <h1 className="signin-right-title">SIGN IN</h1>

          <form className="signin-form" onSubmit={handleSigninForm}>

            <div className={userNotFound? "input-data-not-found":"input-data-found"}>
              
              <input
                name="Userkey"
                type="text"
                required
                onChange={handleOnChange}
               
              />
              <label htmlFor="Userkey">Mobile / Email</label>
              
            </div>
           <p className={userNotFound ? "error-message-active" :"error-message-inactive"}>Please enter a valid phone number</p>
            <div className={passwordInCorrect ? "input-data-wrong-password":"input-data-password"}>
              
              <input
                name="Password"     
                type="password"
                required
                onChange={handleOnChange}
              />
                <label htmlFor="Password">Password</label>
                
            </div>

            <p  className={passwordInCorrect? "error-message-active" :"error-message-inactive"}>Please enter a valid password</p>

            <div className="lock">
              <img src={lock} alt="lock" />
            </div>

            <Link to="/" id="forget-link">
             
              Forget Password ?
            </Link>

            <Button
              buttonName="Sign In"
              classname="signin-signin-btn"
              btnType="submit"
            />
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

export default Signin;
