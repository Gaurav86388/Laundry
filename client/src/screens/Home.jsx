import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import "./Home.css"

import Footer from '../components/Footer'

import CreateOrder from '../renders/CreateOrder'
import Records from '../renders/Records'
import Service from '../renders/Service'
import { useRender } from '../Context'
import CancelAlert from '../Extra/CancelAlert'

const navNames = ["Pricing", "Career", "Username"]

const Home = () => {

  const {render} = useRender()
 

  return (
    <div className='home'>
        <div className="top">
        <Navbar navNames = {navNames}/>
      </div>
      <div className="middle">

            <Aside/>
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