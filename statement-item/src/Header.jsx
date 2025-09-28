import { useState } from "react";
import style from "./header.module.css";

import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const counter = useSelector((state) => state.counter.value);

  return (
    <>
      <header className={style.header}>
        <nav>{counter}</nav>
      </header>
    </>
  );
}
