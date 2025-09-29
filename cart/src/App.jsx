import Header from "./components/Header.jsx";
import ShopList from "./components/ShopList.jsx";

import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import AppDialog from "./components/AppDialog.jsx";

export default function App() {
  return (
    <>
      <Header  />
      <AppDialog />
      <ShopList />
    </>
  );
}
