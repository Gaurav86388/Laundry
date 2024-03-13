import React from 'react'
import "./Card.css"
import check from "/check.png"
const Card = ({isSelected, title, address, cardId, selected}) => {

function handleClick(){
  isSelected(cardId)
}
  return (
    <>
    <div className="card" onClick={handleClick}>
      <div className='card-check'>{selected &&<img src={check} alt="check image" />}</div>
        <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{address}</p>

  </div>
</div>
    </>
  )
}

export default Card