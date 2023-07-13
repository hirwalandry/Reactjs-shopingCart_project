import * as React from "react";
import Products from "./View/Products";
import Navbar from "./View/Navbar";
import CartModal from './View/CartModal';
import {useStateContext} from "./context/ContextProvider"

const App = () => {
  const { modal } = useStateContext();
  return (
    
      <div className="relative font-quicksand pb-2">
        <Navbar />
        <Products />
        {modal === true ? <CartModal /> : null}
      </div>
    
  );
};

export default App;
