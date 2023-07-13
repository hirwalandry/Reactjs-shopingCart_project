import { useState, useEffect, createContext, useContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  let [Cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const AddToCart = (item) => {
    if (Cart.includes(item) === false) {
      Cart.push(item);

      localStorage.setItem("Cart", JSON.stringify(Cart));
    } else {
      console.log("Item in Cart does exist");
    }
  };
  const RemoveFromCart = (item) => {
    let CartItem = [...Cart]
   
     
       CartItem = CartItem.filter((cart) => cart.productId !== item.productId);
      localStorage.removeItem("Cart", JSON.stringify(item))
       setCart(CartItem)
    
     
  }
  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };
  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("Cart"));
    setCart(localCart || []);
  }, []);
  return (
    <StateContext.Provider
      value={{ Cart, setCart, AddToCart, RemoveFromCart, modal, closeModal, openModal }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
