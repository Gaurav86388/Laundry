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

                return <>
                {profileid ?
                  <li id={linkid + "-user"} key={index} >
                  <div className='user-profile-pic'>
                   <img src={profilepic} alt="profile-image"/>
                  </div>
                  User Name
                  </li>
                  :
                  <li id={linkid} key={index} >
                  {item}
                  </li>
                 
            }
                 
                  </>
            })}
       
        </ul>

    </div>
  )
}

export default Navbar