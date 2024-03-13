import React from 'react'

import './Navbar.css'
import profilepic from "/profilepic.png"
const Navbar = ({navNames}) => {

   

  return (
    <div className="nav">

        <h1 className='app-name'>LAUNDRY </h1>

        <ul className='links' type="none">
            {navNames.map((item, index)=>{
                const linkid = index === navNames.length-1 ? 'link-list-items-last' :'link-list-items'
                
                    const profileid = index === navNames.length-1 && item==="Username" 

                return <li key={index}>
                  {profileid ?
                  <div id={linkid + "-user"} key={index} >
                        <div className='user-profile-pic'>
                        <img src={profilepic} alt="profile-image"/>
                        </div>
                  User Name
                  </div>
                  :
                  <div id={linkid} key={index} >
                  {item}
                  </div>}
                  </li>
                 
            
                 
                 
            })}
       
        </ul>

    </div>
  )
}

export default Navbar