import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useStateContext } from "../context/ContextProvider";

function CartModal(props) {
  const { Cart, RemoveFromCart, closeModal } = useStateContext();
  const [itemCart, setItemCart] = useState(Cart);
  const [totalCount, setTotalCount] = useState(0)


  useEffect(() => {
    let sum = 0
    itemCart.forEach(cart => {
      sum = cart.price + sum;
      setTotalCount(sum)
    });
  })

  const handleIncrementQuantity = (itemQuantity, index) => {
    let cart = [...itemCart];
    if (itemQuantity < cart[index].limitedQuantity) {
      cart[index].quantity = cart[index].quantity + 1;
      cart[index].price = cart[index].price * cart[index].quantity;
      setItemCart(cart);
    } else {
      setItemCart(cart);
    }
  };
  const handleDecrementQuantity = (itemQuantity, index) => {
    let cart = [...itemCart];
    if (itemQuantity > 1) {
      cart[index].quantity = cart[index].quantity - 1;
      cart[index].price = cart[index].price / itemQuantity;
      setItemCart(cart);
    }
  };

  return (
    <div
      className="absolute top-0 bg-black/50  left-0 mx-auto my-auto  z-10 w-full h-full sm:px-5 sm:py-20 md:p-20"
      // onClick={() => closeModal()}
    >
      <div className=" rounded-md shadow-md bg-white ">
        <div className="flex flex-col divide-y p-2">
          <div className="flex justify-between items-center py-2">
            <div className=" text-3xl font-bold text-zinc-500">
              Shoping Cart
            </div>
            <div
              className="bg-zinc-100 hover:bg-zinc-200 px-4 py-2 rounded-md font-bold text-zinc-500 text-xl cursor-pointer"
              onClick={() => closeModal()}
            >
              <FontAwesomeIcon icon={faClose} />
            </div>
          </div>
          {itemCart &&
            itemCart.map((item, index) => (
              <div className="flex justify-between gap-4 py-2 " key={index}>
                <div className="flex gap-4">
                  <img
                    src={item.productImage}
                    className="w-20 h-20 rounded-md"
                    alt={item.productName}
                  />
                  <div className=" bg-zinc-100 p-2 rounded-md object-cover">
                    <div className="text-2xl font-bold">
                      T-SHIRT(
                      <span className="text-xl font-bold">
                        {item.productName}
                      </span>
                      )
                    </div>

                    <div className="mt-1">
                      <select className="bg-zinc-100 p-2 shadow-md rounded-md text-xl font-bold border-none">
                        <option value="" className="">
                          choose size
                        </option>
                        {item.size.map((s, index) => (
                          <option value="" key={index}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <div
                        className="cursor-pointer mt-1 underline"
                        onClick={() => {
                          RemoveFromCart(item);
                          console.log(itemCart);
                        }}
                      >
                        remove
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end">
                  <div className="text-2xl font-bold">${item.price}</div>
                  <div className="grid grid-cols-3 divide-x shadow-md rounded-md ">
                    <div
                      className="p-2 pl-6 text-zinc-500 cursor-pointer"
                      onClick={() => {
                        handleDecrementQuantity(item.quantity, index);
                      }}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </div>

                    <div className="w-10 flex justify-center items-center text-zinc-500">
                      {item.quantity}
                    </div>

                    <div
                      className="p-2 text-zinc-500 cursor-pointer"
                      onClick={() => {
                        handleIncrementQuantity(item.quantity, index);
                      }}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="text-2xl font-bold mt-2 text-right">
            Total: {totalCount}
          </div>
        </div>

        <div className="sticky  flex items-center justify-center bottom-0   bg-white w-full h-12 overflow-hidden m-0 rounded-b-md">
          <button className="bg-sky-500 hover:bg-sky-700 py-1 px-6 text-xl text-white font-bold shodow-md rounded-md">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
