import { Dialog } from "primereact/dialog";
import AppOrderList from "./AppOrderList.jsx";
export default function AppDialog({
  visible,
  setVisible,
  products,
  setProducts,
}) {
  return (
    <Dialog
      header="Cart List"
      visible={visible}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      style={{ width: "50vw" }}
      breakpoints={{ "960px": "75vw", "641px": "100vw" }}
    >
      <AppOrderList products={products} setProducts={setProducts} />
    </Dialog>
  );
}
