import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";



function ProductsCard({ items,onLike, onAddToCart }) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 ">
      {items.map((item, index) => (
        <div
          className="relative  bg-white shadow-md rounded-md overflow-hidden"
          key={item.productId}
        >
          <img
            src={item.productImage}
            alt={item.productName}
            className="object-cover w-[100%] h-[100%] "
          />
          <div className="absolute  bottom-0 left-0 justify-end bg-black/40 w-[100%] p-2">
            <div className="flex flex-row justify-between items-center">
              <div className="text-white">{item.productName}</div>

              <div
                className={`${item.liked === true ? "font-quicksand cursor-pointer text-red-500" : "cursor-pointer text-white"} `}
                onClick={() => {
                  onLike(item);
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="text-white">${item.price}</div>
            </div>
            <div
              className="flex items-center justify-center bg-white py-1 px-2 rounded-md cursor-pointer hover:bg-zinc-100 shadow-lg text-center"
              onClick={() => onAddToCart(item)}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                size="xs"
                className="pr-2"
              />{" "}
              Add To Cart
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsCard;
