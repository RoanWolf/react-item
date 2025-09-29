import Header from "./components/Header.jsx";
import ShopList from "./components/ShopList.jsx";

import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import AppDialog from "./components/AppDialog.jsx";

import { useState } from "react";
import { useLocalStorage } from "react-use";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [cartItemsArray, setCartItemsArray] = useLocalStorage("cartItems", []);
  
  return (
    <>
      <Header setVisible={setVisible} cartItemsArray={cartItemsArray} />
      <AppDialog
        visible={visible}
        setVisible={setVisible}
        products={cartItemsArray}
        setProducts={setCartItemsArray}
      />
      <ShopList
        cartItemsArray={cartItemsArray}
        setCartItemsArray={setCartItemsArray}
      />
    </>
  );
}
