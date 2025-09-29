import { Dialog } from "primereact/dialog";
import AppOrderList from "./AppOrderList.jsx";
import { useSelector, useDispatch } from "react-redux";
import { disableVisible } from "./visibleSlice";

export default function AppDialog() {
  const visible = useSelector((state) => state.visible);
  const dispatch = useDispatch();

  return (
    <Dialog
      header="Cart List"
      visible={visible}
      onHide={() => {
        if (!visible) return;
        dispatch(disableVisible());
      }}
      style={{ width: "50vw" }}
      breakpoints={{ "960px": "75vw", "641px": "100vw" }}
    >
      <AppOrderList />
    </Dialog>
  );
}
