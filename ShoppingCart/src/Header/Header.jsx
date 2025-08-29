import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-red-500">
      <div className="flex justify-between items-center py-4 px-6">
       
        <h1 className="text-2xl font-bold">Shopping Destination</h1>

        
        <ul className="hidden md:flex gap-10">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-white font-bold underline" : "text-black"} text-lg`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"shop"}
              className={({ isActive }) =>
                `${isActive ? "text-white font-bold underline" : "text-black"} text-lg`
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"cart"}
              className={({ isActive }) =>
                `${isActive ? "text-white font-bold underline" : "text-black"} text-lg`
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>

        
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

     
      {open && (
        <ul className="flex flex-col gap-4 bg-red-400 px-6 py-4 md:hidden">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-white font-bold underline" : "text-black"} text-lg`
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"shop"}
              className={({ isActive }) =>
                `${isActive ? "text-white font-bold underline" : "text-black"} text-lg`
              }
              onClick={() => setOpen(false)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"cart"}
              className={({ isActive }) =>
                `${isActive ? "text-white font-bold underline" : "text-black"} text-lg`
              }
              onClick={() => setOpen(false)}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
