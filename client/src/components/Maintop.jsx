import React from 'react'
import { useRender } from '../Context'
import search_icon from "../assets/home_icons/search.png"
import "./Maintop.css"
import Button from './Button'
const Maintop = () => {

  const {render} = useRender()
  return (
    <div className="main-top">
            {render !== 'service' && <h2 id="main-top-title">Orders | 0</h2>}
           {render === 'service' && <h2 id="main-top-title">Create Order </h2>} 

    {render === "records" &&
      <div className="main-top-create">
      <Button
          classname="home-create-btn"
          buttonName="Create"
        />
      </div>

    }
        <div className="main-top-searchbar">
         
          <div className="main-top-searchbar search-icon">
          <img src={search_icon} alt="search image" />
        </div>
        <input type="text" />
        </div>
    </div>
  )
}

export default Maintop