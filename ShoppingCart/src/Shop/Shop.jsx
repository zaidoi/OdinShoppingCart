
import { useOutletContext } from "react-router-dom";


function Shop() {
 const {productsData,setProductsData,setItemsCart,setTotalState,cartItems} = useOutletContext()


  const handleItemQuantity = (id, newQty) => {
    setProductsData(prev =>
      prev.map(item => item.id === id ? {...item , qty:newQty} : item)
    )
    console.log("working");
    
  };

  const onClickItem = (item) => {
   for(let i = 0; i < cartItems.length; i++){
    if(item.qty === cartItems[i].qty){
      return
    }
   }

    setItemsCart(prev => [...prev,item])
    setTotalState(true)
  };

  return (
    <div className="flex flex-wrap gap-5 p-5 bg-white">
      {productsData.map((item) => (
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
               onChange={(e) => handleItemQuantity(item.id,e.target.value)}
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
