import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUtensils } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="row">
      <div className="container-xxl position-relative p-0">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5
        py-3 py-lg-0 sticky-lg-top"
        >
          
          <Link to="/" className="navbar-brand p-3">
            <h2 className="test m-0">
              <FontAwesomeIcon icon={faUtensils} className="px-lg-4 px-sm-2" />
              Edd <span className="text-success">Restaurant</span>
            </h2>
          </Link>

          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 px-3 text-start">
              <NavLink
                to="/"
                className="nav-item nav-link
                    link-underline link-underline-warning"
              >
                INICIO
              </NavLink>
              <NavLink
                to="/about"
                className="nav-item nav-link
                    link-underline link-underline-warning"
              >
                ACERCA DE
              </NavLink>
              <NavLink
                to="/products"
                className="nav-item nav-link
                    link-underline link-underline-warning"
              >
                MENU
                
              </NavLink>
              <NavLink
                to="/story"
                className="nav-item nav-link
                    link-underline link-underline-warning"
              >
                HISTORIA
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-item nav-link
                    link-underline link-underline-warning"
              >
                CONTACTO
              </NavLink>
              <NavLink
                to="/galeria"
                className="nav-item nav-link
                    link-underline link-underline-warning"
              >
                Galeria
              </NavLink>
              <NavLink
                to="/credits"
                className="nav-item nav-link
                    link-underline link-underline-warning"
              >
                Creditos
              </NavLink>
              
            </div>
            <Link to="/reservation" className="btn test2 py-2 px-4 justify-start">
              RESERVACIONES 
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
