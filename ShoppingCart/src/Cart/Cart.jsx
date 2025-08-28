import React from 'react'
import Shop from '../Shop/Shop'

function Cart({itemImg,itemTitle,itemPrice,itemQuatity}) {
  return (
   <div>
    <h1>{itemTitle}</h1>
   <img src={itemImg} alt="" />
   </div>
  )
}

export default Cart