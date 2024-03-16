import React from 'react'
import Maintop from '../components/Maintop'
import Button from "../components/Button"
import GenerateRows from '../components/GenerateRows'
import "./Service.css"
import { useRender } from '../Context'
import {clothes} from "../imageimports.js"
import Summary from "../components/Summary"

const productNames = ["Shirts", "T Shirts", "Trousers", "Jeans", "Boxers", "Joggers", "Others"]




const Service = () => {

  const {showSummary, laundryCart, setLaundryCart} = useRender()

  function updateLaundryCart(newArray){
    setLaundryCart(newArray)

  }
  
 
  return (
    <>
    {showSummary && <Summary laundryCart={laundryCart}/>}
    
    <>
    <Maintop />
    <div className="main-center-service">
    
    <table className='service-center'>
      <thead> 
      <tr>
        <th>Product Types</th>
        <th>Quantity</th>
        <th>Wash Type </th>
        <th>Price</th>
      </tr>

      </thead>
    {clothes.map((cloth, index)=>{

      return <GenerateRows key={index} cloth_title = {productNames[index]}cloth={cloth}
      updateLaundryCart = {updateLaundryCart} item_id = {index} laundryCart = {laundryCart}
      />

    })}
    
    </table>

      <div className="service-bottom">

        <Button buttonName="Cancel" classname="cancel-btn" />
       <Button buttonName="Proceed" classname="proceed-btn" />
      </div>

    </div>
    </>
    </>
  )
}

export default Service