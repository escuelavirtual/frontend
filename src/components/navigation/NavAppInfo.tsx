import React from "react";
import "./style.scss";

const NavAppInfo = (props: any) => {
		return (
				<>
					<div className="NavAppInfo">
						<figure></figure>
						
							<span>{props.AppName}</span>
							<span>{props.AppVersion}</span>
						
					</div>
				</>
			)
	}

type props = {AppName: string, AppVersion: string | number};

export default NavAppInfo;
