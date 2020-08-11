import React from "react";
import "./style.scss";

const NavItems = (props: any) => {
<<<<<<< HEAD
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
=======
	const Items = [props.items];
	const ItemsList = Items.map((Items: string) => (
			<li><span>{Items}</span></li>
		))

  return (

		<>
			<div className="NavItems">
				<ul>{ItemsList}</ul>
			</div>
		</>  
  )

}
>>>>>>> 87ffbcb58670e0f288254d1ca9f497ef4c7937b6

export default NavItems;
