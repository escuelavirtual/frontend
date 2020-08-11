import React from "react";
import "./style.scss";

const NavAppInfo = (props: any) => {
<<<<<<< HEAD
  return (
    <>
      <div className="NavAppInfo">
        <figure></figure>
        <a href="about:blank">
          <span>{props.AppName}</span>
          <span>{props.AppVersion}</span>
        </a>
      </div>
    </>
  );
};
=======
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
>>>>>>> 87ffbcb58670e0f288254d1ca9f497ef4c7937b6

type props = { AppName: string; AppVersion: string | number };

export default NavAppInfo;
