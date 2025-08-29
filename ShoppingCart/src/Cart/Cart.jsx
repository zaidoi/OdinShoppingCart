import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

function Cart() {
  const {cartItems,setItemsCart,totalState} = useOutletContext()
const[totalValue,setTotalValue] = useState(0)

useEffect(() => {
  let sum = 0
  for(let i = 0 ; i < cartItems.length; i++){
    const item = cartItems[i]
    const value = item.price * item.qty
    sum+= value
  }
  setTotalValue(sum)
},[cartItems])

const deleteItem = (e) =>{
  console.log(e);
  
const updatedCart = cartItems.filter((item) => item.id !== e.id)
setItemsCart(updatedCart)
}


  console.log(cartItems);
  return (
   <div >
    {cartItems.map((item) => (
   <div className='p-5 bg-white flex'>
    <div> 
      <img src={item.image} alt={item.title} width={120}/>
    </div>
    <div className='mt- p-4 flex flex-col gap-3'>
      <h1 className='text-2xl'>{item.title}</h1>
      <h2>${item.price}</h2> 
      <h2>Qty: {item.qty}</h2>
      <button className='self-start bg-red-500 text-white px-2 py-1 rounded-lg' onClick={()=>deleteItem(item)}>Delete</button>
    </div>
   </div>
    ))}
   
   {totalState ?  (
    <h1 className='text-3xl outline-1  bg-white px-5 py-3'>Total : {Math.floor(totalValue)}</h1>
   ):(<h1 className='text-3xl outline-1 mt-50 text-center  bg-white px-5 py-3'>Cart is Empty</h1>)}
   </div>
  )
}

export default Cart