import React from "react";
import "./style.scss";

const NavAppInfo = (props: any) => {
		return (
				<>
					<div className="NavAppInfo">
						<figure></figure>
						<a href="#">
							<span>{props.AppName}</span>
							<span>{props.AppVersion}</span>
						</a>
					</div>
				</>
			)
	}

type props = {AppName: string, AppVersion: string | number};

export default NavAppInfo;