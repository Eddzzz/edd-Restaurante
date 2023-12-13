import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Galeria() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    "https://www.lugaris.com/wp-content/uploads/2019/10/luxury_SMALL2.jpg",
    "https://foodandpleasure.com/wp-content/uploads/2018/06/piantao-3.jpg",
    "https://gourmedia.es/wp-content/uploads/restaurantes-mas-elegantes-sevilla-tripadvisor-1.jpg",
    "https://i.pinimg.com/originals/66/ad/69/66ad69725aa037d059d292a3c5a522ab.jpg",
    "https://i0.wp.com/bioplant.es/wp-content/uploads/2020/01/gal_pedregu01.jpg?w=1170&ssl=1",
  ];
  return (
    <div>
      <div class="container-xxl bg-white p-0">
        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              Galeria
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
                      to="/galeria"
                    >
                      GALERIA /
                    </NavLink>
                  </li>
                </div>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div>
      <div className="container-xxl bg-white p-0">
        
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div >
            <h3 className="section-title ff-secondary text-start test fw-normal">
              Edd Restaurant
            </h3>
            <h1 className="mb-4">
              <FontAwesomeIcon
                icon={faUtensils}
                className="fa fa-utensils test me-2"
              />
              Nuestros Ambientes
            </h1>
            
          </div>
        </div>
      </div>
      
      <div className="w-50 mx-auto" >
        {/* Carousel */}
        <Carousel style={{ maxHeight: "100%" }}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ maxHeight: "100%", objectFit: "cover" }} 
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
    </div>
  );
}

export default Galeria;