import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import "./Home.css"

import Footer from '../components/Footer'

import CreateOrder from '../renders/CreateOrder'
import Records from '../renders/Records'
import Service from '../renders/Service'
const navNames = ["Pricing", "Career", "Username"]
const Home = () => {

  const [render, setRender] = useState('createOrder')

  return (
    <div className='home'>
        <div className="top">
        <Navbar navNames = {navNames}/>
      </div>
      <div className="middle">

            <Aside handleRender={setRender}/>
            <div className="main">

               {render === 'createOrder' && <CreateOrder />}
               {render === 'service' && <Service />}
               {render === 'records' && <Records />}

            </div>

      </div>
      
        <Footer />
      
      
        
    </div>
  )
}

export default Home