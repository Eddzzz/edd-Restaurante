import React, { useEffect } from "react";
import "../App.css";
import Product from "../components/Product";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faCoffee,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Menu
          </h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center text-uppercase">
              <div className="d-flex justify-content-center align-items-center">
                <li>
                  <NavLink className="text-decoration-none text-white" to="/">
                    INICIO /
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-decoration-none text-white ms-1"
                    to="/about"
                  >
                    ACERCA DE /
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-decoration-none text-white ms-1"
                    to="/products"
                  >
                    MENU /
                  </NavLink>
                </li>
              </div>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container py-5 mb-0">
        <div class="text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
          <h4 class="ff-secondary text-center test fw-semi-bold">
          Deliciosas comidas de Edd Restaurant
          </h4>
          <h1 class="mb-5">Las Delicias más Populares</h1>
        </div>

        <div
          class="tab-class text-center wow fadeInUp mt-5"
          data-wow-delay="0.1s"
        >
          <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            <li class="nav-item">
              <a
                class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                <FontAwesomeIcon
                  icon={faCoffee}
                  className="fa-3x test"
                />
                <div class="ps-3">
                  <small class="text-dark">Popular</small>
                  <h6 class="mt-n1 mb-0 text-dark fw-bold">Desayuno</h6>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="d-flex align-items-center text-start mx-3 pb-3"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                <FontAwesomeIcon
                  icon={faBurger}
                  className="fa-3x test"
                />
                <div class="ps-3">
                  <small class="text-dark">Especial</small>
                  <h6 class="mt-n1 mb-0 text-dark fw-bold">Almuerzo</h6>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="d-flex align-items-center text-start mx-3 me-0 pb-3"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                <FontAwesomeIcon
                  icon={faUtensils}
                  className="fa-3x test"
                />
                <div class="ps-3">
                  <small class="text-body">Especial</small>
                  <h6 class="mt-n1 mb-0 fw-bold text-dark">Cena</h6>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Product />

    </div>
  );
}

export default Products;
