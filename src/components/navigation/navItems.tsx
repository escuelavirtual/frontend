import React from "react";
import "./style.scss";

const NavItems = (props: any) => {
  const Items = [props.items];
  const ItemsList = Items.map((Items: string) => (
    <li>
      <a href="https://">
        <span>{Items}</span>
      </a>
    </li>
  ));

  return (
    <>
      <div className="navItems">
        <ul>{ItemsList}</ul>
      </div>
    </>
  );
};

export default NavItems;
