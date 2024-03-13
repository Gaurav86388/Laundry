import { serviceList } from "../imageimports"
import Button from "../components/Button"
import { useState, useEffect } from "react"


const [darkBleach, darkIron, darkTowel, darkWashingMachine
    , lightBleach, lightIron, lightTowel, lightWashingMachine] = serviceList
  

  let washType = [
    {type: [darkWashingMachine, lightWashingMachine], cost: 50, name: "Washing, "},
  {type : [darkIron, lightIron], cost: 30, name: "Ironing, "},
  {type : [darkTowel, lightTowel], cost: 100, name: "Towel, "},
  {type : [darkBleach, lightBleach], cost: 70, name: "Bleach, "},
  
  ]

    function GenerateWashIcons({darkicon, lighticon, cost, handleCost,resetState, setResetState, servicename}){
  
      const [activeState, setActiveState] = useState(false)

  
      function handleActiveState(cost, servicename){
    
        setActiveState(prev=>!prev)
        handleCost(cost, activeState, servicename)
      }

      useEffect(()=>{
        function reset(){
          setActiveState(false)
        }

        if(resetState){
          reset()
        }

        return ()=>setResetState(false)
      }, [resetState])
      
  
      return  <div className='wash-type-icons'>          
      <img src={activeState ? darkicon : (resetState ? lighticon : lighticon)} alt="icon images" onClick={()=>handleActiveState(cost, servicename) }/>
      </div>
    }
  

export default function GenerateRows({cloth, cloth_title,updateLaundryCart, item_id, laundryCart}){

    const [quantity, setQuantity] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
    const [totalRate, setTotalRate] = useState(0)
    const [activePrice, setActivePrice] = useState(false)

    const [resetState, setResetState] = useState(false)
    
    const [updateLaundryRow, setUpdateLaundryRow] = useState({
      item_id: item_id,
      product: "",
      serviceNames: [],
      expense: {
        calculation: "",
        result: ""
      }
    })
    
//for cart

console.log(updateLaundryRow)

function updateCart(updateLaundryRow, laundryCart){
  
  updateLaundryCart((prevState) => {
    // Handle updating existing items or adding new items based on updateLaundryRow
    if (laundryCart.length > 0) {
      // Find the item to update by its item_id (assuming unique identifiers)
      const existingItem = laundryCart.find(item => item.item_id === updateLaundryRow.item_id);

      if (existingItem) {
        // Update existing item properties directly
        return prevState.map(item => (
          item.item_id === updateLaundryRow.item_id ? updateLaundryRow : item
        ));
      } else {
        // Add new item to the state
        return [...prevState, updateLaundryRow];
      }
    } else {
      // Initial cart or adding new item when cart is empty
      return [updateLaundryRow]; // Add the new item directly
    }
  });


}

   
useEffect(()=>{

  if(quantity > -1  && totalRate > -1){
    updateCart(updateLaundryRow, laundryCart)
  }
 
 



}, [ quantity, totalRate,updateLaundryRow])




//for calculate sum

function calculateSum(quantity, totalRate){

  setTotalCost(quantity *  totalRate)

}
    useEffect(()=>{

  
        quantity > 0 && totalRate > 0 ? setActivePrice(true)  : setActivePrice(false)     
        calculateSum(quantity, totalRate)
        
         

    }, [quantity, totalRate])


//for row

function addproducttitle(totalRate, quantity, cloth_title){
  const title =  totalRate> 0 && quantity > 0 ? cloth_title : ""
  setUpdateLaundryRow(prev=>({...prev, product: title}))
}


function addexpense(totalRate, quantity){

 const calculation = quantity > 0 && totalRate > 0 ?  quantity.toString() + " x " + totalRate.toString() + " = " : ""
const result = quantity > 0 && totalRate > 0 ? (quantity * totalRate).toString() : ""

setUpdateLaundryRow(prev=>({...prev, expense: {calculation: calculation, result: result}}))

}

useEffect(()=>{


if(quantity > -1 && totalRate -1){
  addproducttitle(totalRate, quantity, cloth_title)
  addexpense(totalRate, quantity)
}

quantity < 1 && setUpdateLaundryRow(prev=>({...prev, serviceNames: []}))



}, [totalRate, quantity])





    function handleCost(cost, activeState, servicename){

        setTotalRate(prev=>{
           const newValue =  activeState ? prev - cost: prev + cost
            return newValue
        })

        setUpdateLaundryRow(prev=>{
          
          const updateservice = activeState ? prev.serviceNames.filter(item=>item !== servicename) : [...prev.serviceNames, servicename]
          return {...prev, serviceNames: updateservice}
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
          const servicename = item.name
  
          return <GenerateWashIcons key ={i}darkicon={darkicon} lighticon={lighticon} cost = {item.cost} handleCost={handleCost}
          resetState={resetState} setResetState={setResetState} servicename = {servicename}/>
        })}
        
      </td>
  
      <td className='price-section'>
        <div className="price-section-div">

        <div className='price-text'>
  
            {totalCost === 0 &&  !activePrice  && <h2 id="price-null">—</h2>}
            {totalCost > 0 && activePrice && <h2 id="price-cal">{quantity} x {totalRate} = <span id="price-total">{totalCost}</span></h2>}

            </div>
            {totalCost > 0 && activePrice &&
            <div className='reset-div'>
            <Button buttonName="Reset" classname="price-reset-btn" handleQuantity = {setQuantity} handleRate={setTotalRate} handleResetState={setResetState}/>
            </div>
            }

        </div>

      </td>
  
    </tr>
    </tbody>
  }

