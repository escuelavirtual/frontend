import React from "react";
import "./style.scss";

function UserStatus(): JSX.Element {
  return (
    <div>
      <div id="UserStatusLogut">
        <button id="ButtonLogin">Iniciar Secion</button>
        <button id="ButtonRegister">Regitrarse</button>
      </div>
      <div id="UserStatusLogin"></div>
    </div>
  );
}

export default UserStatus;
