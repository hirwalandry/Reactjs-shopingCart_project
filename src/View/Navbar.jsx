import React from "react";

import { useStateContext } from "../context/ContextProvider";

function Navbar(props) {
  const { Cart, openModal } = useStateContext();
  
  return (
    <div className="flex lg:justify-end sm:justify-start bg-zinc-100 shadow-md p-8">
      <div className="flex justify-between items-center  sm:w-[100%] lg:w-[60%]">
        <h1>SHOPIFY</h1>
        <div className="flex items-center gap-2">
          <button
            className="underline cursor-pointer"
            onClick={() => openModal()}
          >
            check cart
          </button>
          <div className="bg-zinc-300  px-4 py-2 rounded-[20px]">
            {Cart && Cart.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
