import React from 'react'

const Button = ({buttonName, classname}) => {

    function handleOnClick(){

    }
  return (
    <div>
        <input type="button" value={buttonName} className={classname} onClick={handleOnClick}/>
    </div>
  )
}

export default Button