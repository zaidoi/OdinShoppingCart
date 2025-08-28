import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";

function Shop() {
  const data = useLoaderData();
  console.log(data);
  
  const [items,setItems] = useState(data)
  
  
  useEffect(() => {
    const newData = data.map((item)=>{
     return {...item , qty: item.qty++} 
    })
    setItems(newData)
  },[data])

  const handleItemQuantity = (id, e) => {
    setValueOfItem(e.target.value);
    console.log(e.target.value);
  };

  const onClickItem = (props) => {
    <Cart
      itemImg={props.image}
      itemTitle={props.title}
      itemPrice={props.price}
      itemQuantity={props.qty}
    />;
  };

  return (
    <div className="flex flex-wrap gap-5 p-5 bg-white">
      {items.map((item) => (
        <div
          key={item.id}
          className=" flex-1 min-w-[250px] max-w-[300px] card bg-white w-60 p-5 flex flex-col gap-3 rounded-2xl shadow-lg border border-black 
                     transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-32 h-32 object-contain mx-auto transition-transform duration-300 hover:scale-110"
          />

          <h2 className="text-black font-semibold line-clamp-2">
            {item.title}
          </h2>
          <h2 className="text-red-500 font-bold">₹ {item.price}</h2>

          <div className="flex justify-between items-center">
            <input
              value={item.qty}
              onChange={(e) => handleItemQuantity(e)}
              type="number"
              className="border border-black rounded-lg py-1 px-2 w-16 h-10 text-center 
                         focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={() => onClickItem(item)}
              className="bg-red-500 text-white rounded-lg px-4 py-2 
                         transition-colors duration-300 hover:bg-black hover:text-white"
            >
              Add Item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
