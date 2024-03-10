import React from 'react'
import { Link } from 'react-router-dom'
import { useRender } from '../Context'



const Button = ({buttonName, classname, link, handleQuantity, handleRate}) => {


  const {onHandleRender} = useRender()


    function handleReset(){
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

    }
  return (
    <div>
        <Link to={link}><input type="button" value={buttonName} className={classname} onClick={handleOnClick}/></Link>
    </div>
  )
}

export default Button