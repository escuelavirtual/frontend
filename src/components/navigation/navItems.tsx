import React from "react";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import "./style.scss";

const NavItems = (props: any) => {
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

export default NavItems;
