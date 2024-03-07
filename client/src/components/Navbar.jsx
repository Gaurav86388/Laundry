import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const navNames = ["Home", "Pricing", "Career", "Sign In"]
    const navLinks = ["/home", "/pricing", "/career", "/signin"]

  return (
    <div className="nav">

        <h1 className='app-name'>LAUNDRY </h1>

        <ul className='links' type="none">
            {navNames.map((item, index)=>{
                return <li key={index} >{item}</li>
            })}
       
        </ul>

    </div>
  )
}

export default Navbar