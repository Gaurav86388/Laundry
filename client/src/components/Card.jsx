import React, { useEffect } from 'react'
import "./Card.css"
import check from "/check.png"
const Card = ({setIsSelected, selected, title, cardAdd, setCardAdd,
   address, cardId,  setformData, cardSelect, on}) => {

function handleClick(){
  setIsSelected(cardId)
  setCardAdd(address)
  
}

useEffect(()=>{

  cardSelect && setformData(prev=>
    ({...prev, userAddress: {...prev.userAddress, title: title, fulladdress: cardAdd, city: cardAdd.split(",").splice(-1)[0]}}))
}, [cardSelect])
  return (
    <>
    {on !== "orderList" ?
      <div className="card" onClick={handleClick}>
      <div className='card-check'>{selected && <img src={check} alt="check image" />}</div>
        <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{address}</p>

  </div>
</div> :

      <div className="card" >
        <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{address}</p>

  </div>
</div>

  }
    
    </>
  )
}

export default Card