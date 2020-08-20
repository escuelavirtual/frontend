import React from "react";
import Navigation from "../../components/navigation/index";
import "./style.scss";
import PageNotFoundLogo from "../../assets/img/PageNotFoundLogo.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const PageNotFound = () => {
  return (
    <>
      <Navigation />
      <div className="pageNotFoundContent">
        <img src={PageNotFoundLogo} alt="img 404" />
        <section className="sectionMessage">
          <h1>¡Oh!, has llegado a una tierra desconocida</h1>
          <p>
            Al parecer te has varado en una tierra desconociad y/o perdida mi
            amigo, e aconsejo regresar al inicio...
          </p>
          <a href="/" className="irAlInicio">
            Ir al inicio <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
          </a>
        </section>
      </div>
    </>
  );
};

export default PageNotFound;
