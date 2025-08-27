import React from 'react'

function Shop() {
  return (
    <div>Shop</div>
  )
}

export default Shop;

export const allProducts = async () =>{
  const fetch = fetch('https://fakestoreapi.com/products')
  
  return fetch.json()
}

