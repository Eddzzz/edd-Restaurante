import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Reservation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div class="container-xxl bg-white p-0">
        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              Reservaciones
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
                      to="/reservation"
                    >
                      RESERVACIONES /
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
          <div className="row g-4">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <img
                class="flex-shrink-0 img-fluid rounded"
                src="https://rabda.s3.amazonaws.com/photos/12513/large/009.jpg?1366365635"
                alt=""
                style={{ width: 1000 }}
              ></img>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form>
                  <div className="row g-3">
                    <div>
                      <h3 className="section-title ff-secondary text-start test fw-normal">
                        Edd Restaurant
                      </h3>
                      <h1 className="mb-4">RESERVAS</h1>
                      <p className="">
                        Lunes - Sabado Reservas 
                      </p>
                      <p className="mb-4">
                        10AM - 9PM
                      </p>
                      <p className="mb-4">
                        Domingo
                      </p>
                      <p className="mb-4">
                        12PM - 7PM
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">Nombre</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label for="email">Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label for="subject">Fecha</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 150 }}
                        ></textarea>
                        <label for="message">Nota</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn test2 w-100 py-3" type="submit">
                        Reservar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
