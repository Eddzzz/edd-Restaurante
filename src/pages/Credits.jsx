import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Credits() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div class="container-xxl bg-white p-0">
        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              Creditos
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
                      to="/contact"
                    >
                      CONTACTO / 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-decoration-none text-white ms-1"
                      to="/contact"
                    >
                      CREDITOS /
                    </NavLink>
                  </li>
                </div>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="col-lg-6">
            <h3 className="section-title ff-secondary text-start test fw-normal">
              Datos Personales
            </h3>
            <h1 className="mb-4">
              <FontAwesomeIcon
                icon={faUtensils}
                className="fa fa-utensils test me-2"
              />
              INF-121
            </h1>
            <p className="">Edwin Nina Parisaca</p>
            <p className="mb-4">C.I.: 13506809</p>
            <div className="d-flex align-items-center border-start border-5 border-dark px-3">
              <h1
                className="flex-shrink-0 display-5 test mb-0"
                data-toggle="counter-up"
              >
                A
              </h1>
              <div className="ps-4">
                
                <h6 className="text-uppercase mb-0">Paralelo</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credits;
