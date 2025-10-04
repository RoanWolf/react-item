import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

      </div>
      <Outlet />
    </>
  );
}
