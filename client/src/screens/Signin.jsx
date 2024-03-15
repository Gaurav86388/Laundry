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


const navNames = ["Home", "Pricing", "Career", "Sign In"];
const Signin = () => {
  const navigate = useNavigate()
  const [signinDetails, setSigninDetails] = useState({
    Userkey: "",
    Password: "",
  });

  const [signinSuccess, setSigninSuccess] = useState(false)



  function handleSigninForm(e) {
    e.preventDefault();
    console.log(signinDetails);
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
        console.log(data)
        if(data.message === 'validated'){
          setSigninSuccess(true)

          setTimeout(()=>{
            navigate("/home")
          }, 1000)
        } 
      })
      .catch((e) => console.log(e));
  }

  function handleOnChange(e) {
    let name = e.target.name;
    let value = e.target.value;

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
            <div className="input-data">
              <label htmlFor="Userkey">Mobile / Email</label>
              <input
                name="Userkey"
                type="text"
                required
                onChange={handleOnChange}
              />
            </div>

            <div className="input-data">
              <label htmlFor="Password">Password</label>
              <input
                name="Password"
                type="password"
                required
                onChange={handleOnChange}
              />
            </div>
            <div className="lock">
              <img src={lock} alt="lock" />
            </div>

            <Link to="/" id="forget-link">
              {" "}
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
