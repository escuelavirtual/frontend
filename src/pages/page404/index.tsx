import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="pageNotFoundContent">
      <img
        src={`${process.env.PUBLIC_URL}/img/PageNotFoundLogo.svg`}
        alt="404"
      />
      <section className="sectionMessage">
        <h1>¡Oh!, has llegado a una tierra desconocida</h1>
        <p>
          Al parecer te has varado en una tierra desconocida y/o perdida mi
          amigo, e aconsejo regresar al inicio...
        </p>
        <Link to="/" className="irAlInicio">
          Ir al inicio
          <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
        </Link>
      </section>
    </div>
  );
}
