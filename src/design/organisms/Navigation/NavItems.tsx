import React from "react";

const NavItems = (props: any) => {
  const Items = props.items;
  const ItemsList = Items.map((Items: string) => (
    <li>
      <a href="/">
        <span>{Items}</span>
      </a>
    </li>
  ));

  return (
    <>
      <div className="nav-items">
        <ul>{ItemsList}</ul>
      </div>
    </>
  );
};

export default NavItems;
