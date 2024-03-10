import { serviceList } from "../imageimports"
import Button from "../components/Button"
import { useState, useEffect } from "react"

const [darkBleach, darkIron, darkTowel, darkWashingMachine
    , lightBleach, lightIron, lightTowel, lightWashingMachine] = serviceList
  
  let washType = [{
    type: [darkWashingMachine, lightWashingMachine], cost: 50
  },
  {type : [darkIron, lightIron], cost: 30},
  {type : [darkTowel, lightTowel], cost: 100},
  {type : [darkBleach, lightBleach], cost: 70},
  ]

    function GenerateWashIcons({darkicon, lighticon, cost, handleCost}){
  
      const [activeState, setActiveState] = useState(false)
  
      function handleActiveState(cost){
    
        setActiveState(prev=>!prev)
        handleCost(cost, activeState)
      }
    
  
      return  <div className='wash-type-icons'>          
      <img src={activeState ? darkicon :lighticon} alt="icon images" onClick={()=>handleActiveState(cost) }/>
      </div>
    }
  

export default function GenerateRows({cloth, cloth_title}){

    const [quantity, setQuantity] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
    const [totalRate, setTotalRate] = useState(0)
    const [activePrice, setActivePrice] = useState(true)

    useEffect(()=>{

        function calculateSum(){

            setTotalCost(quantity *  totalRate)
       
        }
        quantity > 0 || totalRate > 0 ? setActivePrice(true) : setActivePrice(false)
        calculateSum()

    }, [quantity, totalRate])




    function handleCost(cost, activeState){

        setTotalRate(prev=>{
           const newValue =  !activeState ? prev + cost : prev - cost
            return newValue
        })
        
    }

 
    return   <tbody>
                 
    <tr>
      <td className='product-type'>
        <div className='product-img'>
        <img src={cloth} alt="product_img" />
        </div>
  
        <div className='product-description'>
          <h3>{cloth_title}</h3>
          <p>Lorem ipsum is simply dummy text fo the</p>
        </div>
        </td>
  
      <td className='product-qt'>
        <input type="number" min={0}  id="product-qt-input" onChange={(e)=>setQuantity(e.target.value)} value={quantity}/>
  
      </td>
  
      <td className='wash-type'>
        {washType.map((item, i)=>{
  
          const darkicon = item.type[0]
          const lighticon = item.type[1]

  
          return <GenerateWashIcons key ={i}darkicon={darkicon} lighticon={lighticon} cost = {item.cost} handleCost={handleCost}/>
        })}
        
      </td>
  
      <td className='price-section'>
        <div className="price-section-div">

        <div className='price-text'>
  
            {!activePrice && <h2 id="price-null">—</h2>}
            {totalCost > 0 && activePrice && <h2 id="price-cal">{quantity} x {totalRate} = <span id="price-total">{totalCost}</span></h2>}

            </div>
            {totalCost > 0 && activePrice &&
            <div className='reset-div'>
            <Button buttonName="Reset" classname="price-reset-btn" handleQuantity = {setQuantity} handleRate={setTotalRate}/>
            </div>
            }

        </div>

      </td>
  
    </tr>
    </tbody>
  }

