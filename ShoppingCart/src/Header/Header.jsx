import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex  justify-around py-5 bg-red-500 ">
        <div>
          <h1 className="text-2xl">Shopping Destination</h1>
        </div>
        <div>
          <ul className="flex gap-10">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-black"} text-lg `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"shop"}
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-black"} text-lg`
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"cart"}
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-black"} text-lg`
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
