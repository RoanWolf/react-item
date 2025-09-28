import style from "./button.module.css";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./features/counterSlice.js";
export default function Button() {
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.calculatorBtn}>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
}
