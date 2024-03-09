import React from 'react'
import {Link} from 'react-router-dom'
import home_icon from '../assets/home_icons/light-home-run.png'
import list_icon from '../assets/home_icons/light-list.png'
import more_icon from '../assets/home_icons/light-more.png'
import "./Aside.css"

const Aside = ({handleRender}) => {

  function onHandleRender(command){

    handleRender(command)
  }
  return (
    <div className="aside">

            <Link to={"/home"} className='aside-icons' id='createOrder' onClick={()=>onHandleRender('createOrder')}>
                <img src={home_icon} alt="home_icon" />
            </Link>

            <Link to={"/home"} className='aside-icons' id='service' onClick={()=>onHandleRender('service')}> 
                <img src={more_icon} alt="more_icon" />
            </Link>

            <Link to={"/home"} className='aside-icons' id='records' onClick={()=>onHandleRender('records')}>
                <img src={list_icon} alt="list_icon" />
            </Link>


            </div>
  )
}

export default Aside