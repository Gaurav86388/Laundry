import React from 'react'

import './Navbar.css'

const Navbar = () => {

    const navNames = ["Home", "Pricing", "Career", "Sign In"]

  return (
    <div className="nav">

        <h1 className='app-name'>LAUNDRY </h1>

        <ul className='links' type="none">
            {navNames.map((item, index)=>{
                const linkid = index === navNames.length-1 ? 'link-list-items-last' :'link-list-items'
                return <li id={linkid} key={index} >{item}</li>
            })}
       
        </ul>

    </div>
  )
}

export default Navbar