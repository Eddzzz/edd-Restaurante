/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faArrowUp,
  faMailBulk,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-link footer 
        pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4
                className="section-title ff-secondary text-start
                        test fw-normal mb-4"
              >
                Edd Restaurant
              </h4>
              <NavLink to="/about" className="btn btn-link">
                Acerca De
              </NavLink>
              <NavLink to="/products" className="btn btn-link">
                Menu
              </NavLink>
              <NavLink to="/contact" className="btn btn-link">
                Contacto
              </NavLink>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4
                className="section-title ff-secondary text-start test
                        fw-normal mb-4"
              >
                Contacto
              </h4>
              <p className="mb-2 text-light">
                <FontAwesomeIcon icon={faMapMarked} className="me-3" />
                 La Paz
              </p>
              <p className="mb-2 text-light">
                <FontAwesomeIcon icon={faPhone} className="me-3" />
                12345678
              </p>
              <p className="mb-2 text-light">
                <FontAwesomeIcon icon={faMailBulk} className="me-3" />
                eddretaurant@gmail.com
              </p>
              <div className="d-flex pt-2">
           
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-light">
                <h4
                  className="section-title ff-secondary text-start test
                                fw-normal mb-4"
                >
                  Horarios
                </h4>
                <h5 className="text-light fw-normal">Lunes - Sabado</h5>
                <p>10AM - 9PM</p>
                <h5 className="text-light fw-normal">Domingo</h5>
                <p>12PM - 7PM</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-light">
                <h4
                  className="section-title ff-secondary text-start test
                                fw-normal mb-4"
                >
                  Noticias
                </h4>
                <p>
                Mantente al día con nuestros nuevos platos y deliciosos descuentos suscribiéndote a nuestro pagina web.
                </p>
                <div className="position-relative mx-auto" max-width="400px">
                  <input
                    className="form-control border-warning w-100 py-3
                                ps-4 pe-5"
                    type="text"
                    placeholder="Your Email"
                  />
                  <button
                    type="button"
                    className="btn test2 py-2 position-absolute
                                top-0 end-0 mt-2 me-2"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <hr className="border border-warning " />
          </div>
          <div className="container text-white">
            <div className="copyright">
              <div className="row">
                <div
                  className="col-md-6 text-center text-md-start
                            mb-3 mb-md-0"
                >
                  &copy; Edd restaurant, All Rights Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <NavLink to="/">Inicio</NavLink>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg test2 btn-lg-square back-to-top">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
}

export default Footer;
