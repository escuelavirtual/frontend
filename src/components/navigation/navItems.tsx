import React from "react";

const NavItems = (props: any) => {
  const items = [props.items];
  const itemsOnclick = [props.itemsOnclick];
  const listItems = items.map((items: string, itemsOnclick: any) => (
    <li>
      <a href="https://" onClick={itemsOnclick}>
        <span>{items}</span>
      </a>
    </li>
  ));

  return (
    <>
      <div className="navItems">
        <ul>{listItems}</ul>
      </div>
    </>
  );
};

type props = { items?: string; itemsOnclick?: string };

export default NavItems;
