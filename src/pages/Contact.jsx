import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div class="container-xxl bg-white p-0">
        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              Contacto
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
              <iframe
                className="position-relative rounded w-100 h-100"
                
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5508942496276!2d-68.1336285892419!3d-16.498263084179428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2172481f6a8f%3A0xf2fadffaffeac29!2sUmsa!5e0!3m2!1ses-419!2sbo!4v1702430721340!5m2!1ses-419!2sbo"
                frameborder="0"
                style={{ minheight: 350, border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                title="myMap"
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form>
                  <div className="row g-3">
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
                        <label for="subject">Subject</label>
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
                        <label for="message">Mensaje</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn test2 w-100 py-3"
                        type="submit"
                      >
                        Enviar
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

export default Contact;
