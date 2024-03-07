import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({buttonName, classname, link}) => {

    function handleOnClick(){
      
    }
  return (
    <div>
        <Link to={link}><input type="button" value={buttonName} className={classname} onClick={handleOnClick}/></Link>
    </div>
  )
}

export default Button