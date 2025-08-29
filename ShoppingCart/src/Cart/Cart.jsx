import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const { cartItems, setItemsCart } = useOutletContext();
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    let sum = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotalValue(sum);
  }, [cartItems]);

  const deleteItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setItemsCart(updatedCart);
  };

  return (
    <div className="p-5">
      {cartItems.length > 0 ? (
        <div className="flex flex-col gap-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-xl flex flex-col md:flex-row items-center md:items-start gap-5 p-5 border border-gray-300"
            >
             
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-contain"
              />

             
              <div className="flex flex-col gap-3 text-center md:text-left">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <h2 className="text-red-500 font-bold text-lg">${item.price}</h2>
                <h2 className="text-gray-600">Qty: {item.qty}</h2>

                <button
                  onClick={() => deleteItem(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg transition hover:bg-black"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

         
          <h1 className="text-2xl font-bold bg-white shadow-md px-6 py-3 rounded-lg self-end">
            Total : ${Math.floor(totalValue)}
          </h1>
        </div>
      ) : (
        <h1 className="text-2xl text-center text-gray-600 bg-white shadow-md px-6 py-3 rounded-lg">
          Cart is Empty
        </h1>
      )}
    </div>
  );
}

export default Cart;
