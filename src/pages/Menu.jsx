import React from "react";
import { menuList } from "../helpers/menuList";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {menuList.map((menuItem, key) => {
          return (
            <div className="menuItem">
              <div>
                <img src={menuItem.image} alt="item-img" />
              </div>
              <h3>{menuItem.name}</h3>
              <p> $ {menuItem.price} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
