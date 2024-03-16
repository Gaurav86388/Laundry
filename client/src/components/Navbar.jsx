import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import profilepic from "/profilepic.png"
import logoutpic from "/exit.png"
const Navbar = ({navNames, username}) => {

   

  return (
    <div className="nav">

        <h1 className='app-name'>LAUNDRY </h1>

        <ul className='links' type="none">
            {navNames.map((item, index)=>{
                const linkid = index === navNames.length-1 ? 'link-list-items-last' :'link-list-items'
                
                    const profileid = index === navNames.length-1 && item==="Username" 

                  function handleLogout(){
                    localStorage.removeItem("jwt")
                  }


                return <li key={index}>
                  {profileid ?
                  <div id={linkid + "-user"} key={index} >
                        <div className='user-profile-pic'>
                        <img src={profilepic} alt="profile-image"/>
                        </div>

                        <div class="btn-group">
                      
                      {username === "" ? "User Name" : username}



                    <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"/>                  
                        <ul className="dropdown-menu">
                          <li> <Link to="/"><button className='logout-btn' onClick={handleLogout}> <span> Logout </span> <img src={logoutpic } alt="exit pic" /> </button>  </Link></li>
                        </ul>
                    </div>                
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