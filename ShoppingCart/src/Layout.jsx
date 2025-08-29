import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useLoaderData } from "react-router-dom";


function Layout() {
const data = useLoaderData()
const [productsData,setProductsData] = useState([])
const [cartItems,setItemsCart] = useState([])
const [totalState,setTotalState] = useState(false)


useEffect(()=>{
  const updateData = data.map((item)=>{
    return {...item,qty:1}
  })
  setProductsData(updateData)
},[data])

   
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet context={{productsData,setProductsData,cartItems,setItemsCart,totalState,setTotalState}} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;


