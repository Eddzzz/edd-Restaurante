import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Chair from "../../assets/about1.png";
import Chair2 from "../../assets/about-2.jpg";
import Chair3 from "../../assets/about-3.jpg";
import Chair4 from "../../assets/about-4.jpg";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
function AboutWelcom() {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-80 wow zoomIn"
                    data-wow-delay="0.1s"
                    src={Chair}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
                <div className="col-5 text-start">
                  <img
                    className="img-fluid rounded w-80 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={Chair2}
                    alt="hello"
                    style={{
                      marginTop: "25%",
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                    src={Chair3}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={Chair4}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.7s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="section-title ff-secondary text-start test fw-normal">
                Sobre Nosotros
              </h3>
              <h1 className="mb-4">
                <FontAwesomeIcon
                  icon={faUtensils}
                  className="fa fa-utensils test me-2"
                />
                Historia de Edd Restaurant
              </h1>
              <p className="mb-4">
              El director ejecutivo, Juan Pérez, inauguró el primer restaurante de Edd Foods en La Paz el 27 de enero de 2021. Hoy en día, contamos con 3 sucursales en toda Bolivia. Los Restaurantes Edd Restaurant son conocidos por atraer a una gran variedad de personas, incluyendo familias, niños, adultos mayores y profesionales de negocios. Nuestro ambiente acogedor es perfecto para celebrar ocasiones especiales, organizar almuerzos de negocios o reunirse para una deliciosa cena con amigos y familiares. Abierto todos los días para almuerzos y cenas, Edd Restaurant ofrece una selección de platos preparados de manera fresca utilizando únicamente los mejores ingredientes disponibles.
              </p>
              <p className="mb-4">
              Nuestros platos favoritos incluyen pescado fresco, costillas de cerdo, pasteles recién horneados, ensaladas especiales, pizzas al horno de leña, pasta, sándwiches, hamburguesas y más. Los productos horneados y postres de Edd Restaurant, como nuestro Pastel de Seis Capas de Chocolate, Pastel de Zanahoria casero y los deliciosamente ricos pasteles de queso crema, son favoritos populares entre nuestros clientes.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-dark px-3">
                    <h1
                      className="flex-shrink-0 display-5 test mb-0"
                      data-toggle="counter-up"
                    >
                      2
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Años de</p>
                      <h6 className="text-uppercase mb-0">Experiencia</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-dark px-3">
                    <h1
                      className="flex-shrink-0 display-5 test mb-0"
                      data-toggle="counter-up"
                    >
                      5
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Chefs</h6>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn test2 py-3 px-5 mt-2" href="/story">
                Leer mas
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWelcom;
