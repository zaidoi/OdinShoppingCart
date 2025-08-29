import { useOutletContext } from "react-router-dom";

function Shop() {
  const { productsData, setProductsData, setItemsCart, cartItems } =
    useOutletContext();

  const handleItemQuantity = (id, newQty) => {
    setProductsData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
    console.log("working");
  };

  const onClickItem = (item) => {
    for (let i = 0; i < cartItems.length; i++) {
      if (item.qty === cartItems[i].qty) {
        return;
      }
    }

    setItemsCart((prev) => [...prev, item]);
  };

  return (
    <div className="p-5 bg-white">
      {/* Responsive Grid */}
      <div className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      xl:grid-cols-5">
        {productsData.map((item) => (
          <div
            key={item.id}
            className="card bg-white p-5 flex flex-col gap-3 rounded-2xl shadow-lg border border-gray-300
                       transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-contain mx-auto transition-transform duration-300 hover:scale-110"
            />

            <h2 className="text-black font-semibold line-clamp-2 text-center">
              {item.title}
            </h2>
            <h2 className="text-red-500 font-bold text-center">
              ₹ {item.price}
            </h2>

            <div className="flex justify-between items-center mt-auto">
              <input
                value={item.qty}
                onChange={(e) => handleItemQuantity(item.id, e.target.value)}
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
    </div>
  );
}

export default Shop;
