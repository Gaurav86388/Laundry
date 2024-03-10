import React, { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { useRender } from '../Context'
import "./Aside.css"

import dark_home from "../assets/home_icons/dark-home-run.png"
import dark_more from "../assets/home_icons/dark-more.png"
import dark_list from "../assets/home_icons/dark-list.png"

import light_home from "../assets/home_icons/light-home-run.png"
import light_more from "../assets/home_icons/light-more.png"
import light_list from "../assets/home_icons/light-list.png"


const Aside = () => {
const {render, onHandleRender} = useRender()


  const [image, setImage] = useState({
    home_icon: light_home,
    more_icon:  dark_more,
    list_icon: dark_list
    
  })

  useEffect(()=>{

    function handleImage(){
      let home_icon, more_icon, list_icon = "";
 
       home_icon = render === "createOrder" ? dark_home: light_home
       more_icon =  render === "service" ? dark_more: light_more
       list_icon =   render === "records" ? dark_list: light_list


      setImage(prev=>({...prev, home_icon, more_icon, list_icon}))
    }


    handleImage()

  }, [render])


  return (
    <div className="aside">

            <div className={`aside-icon-space${render === "createOrder" ? " light" : ""}`}>
                <Link to={"/home"} id='createOrder' onClick={()=>onHandleRender('createOrder')}>
                    <img src={image.home_icon} alt="home_icon" />
                </Link>
            </div>

            <div className={`aside-icon-space${render === "service" ? " light" : ""}`}>
            <Link to={"/home"}  id='service' onClick={()=>onHandleRender('service')}> 
                <img src={image.more_icon} alt="more_icon" />
            </Link>
              </div>

              <div className={`aside-icon-space${render === "records" ? " light" : ""}`}>
                
            <Link to={"/home"} id='records' onClick={()=>onHandleRender('records')}>
                <img src={image.list_icon} alt="list_icon" />
            </Link>
              </div>





            </div>
  )
}

export default Aside