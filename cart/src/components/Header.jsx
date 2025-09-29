import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";

import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
export default function TemplateDemo({ setVisible,cartItemsArray }) {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [iconTheme, setIconTheme] = useState("pi pi-sun");
  

  useEffect(() => {
    let link = document.getElementById("theme-link");
    if (!link) {
      link = document.createElement("link");
      link.id = "theme-link";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    link.href = `../../public/lara-${currentTheme}-cyan/theme.css`;
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    setIconTheme(currentTheme === "light" ? "pi pi-moon" : "pi pi-sun");
  };

  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const items = [
    {
      label: "Cart",
      icon: "pi pi-shopping-cart",
      badge: cartItemsArray.length,
      template: itemRenderer,
      command: () => {
        setVisible(true);
      },
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
      />
      <Button
        icon={iconTheme}
        aria-label="Filter"
        style={{ marginLeft: "0.5rem" }}
        onClick={toggleTheme}
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
