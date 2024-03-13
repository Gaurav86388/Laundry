import React from 'react'
import { Link } from 'react-router-dom'
import { useRender } from '../Context'


const Button = ({buttonName, classname, link="", handleQuantity, handleRate, handleResetState, btnType}) => {


  const {onHandleRender, setShowAlert, setShowSummary, laundryCart} = useRender()


    function handleReset(){
      handleResetState(true)
      handleQuantity(0)
      handleRate(0)
      
    }

    function handleOnClick(){

      if(buttonName === "Reset"){
        handleReset()
      }
      if(buttonName === "Cancel"){
        onHandleRender("createOrder")
      }
      if(buttonName ==="Create"){
        onHandleRender("service")
      }
      if(buttonName === "Go Back" || buttonName === "Go to Sign in" || buttonName === "Go to Orders"){
        setShowAlert("")
      }

      if( buttonName === "Go to Orders"){
        setShowAlert("")
        setShowSummary(false)
        onHandleRender("records")
      }
      if(buttonName === "Proceed" && laundryCart.length >0){
        
        setShowSummary(true)
      }

    }
  return (
    <div>
      {btnType === "submit" ? 
          <input type="submit" value={buttonName} className={classname}/>
      : 
      <Link to={link}> <input type="button" value={buttonName} className={classname} onClick={handleOnClick}/></Link>
      }

        
        
    </div>
  )
}

export default Button