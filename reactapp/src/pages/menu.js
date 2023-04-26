import React from "react";
import { MenuList } from "../helpers/menuList.js";
import MenuItem from "../components/menuItem.js";
import "../styles/menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">OUR MENU</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;