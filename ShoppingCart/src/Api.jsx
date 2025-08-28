export const allProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  };