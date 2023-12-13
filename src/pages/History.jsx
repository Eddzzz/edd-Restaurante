import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Story() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div class="container-xxl bg-white p-0">
        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              Historia de Edd Restaurant
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
                      to="/story"
                    >
                      HISTORIA /
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
          <div className="row">
            <div className="col-lg-6 order-lg-1 order-2">
              {/* Contenido del texto */}
              <h3 className="section-title ff-secondary text-start test fw-normal">
                Edd Restaurant
              </h3>
              <h1 className="mb-4">
                <FontAwesomeIcon
                  icon={faUtensils}
                  className="fa fa-utensils test me-2"
                />
              HISTORIA
            </h1>
            <p className="">
              Hace algunos años, en el corazón de La Paz, un apasionado chef
              llamado Diego Pérez soñaba con compartir su amor por la
              gastronomía boliviana de una manera única y especial. Decidió
              convertir su sueño en realidad y fundó Edd Restaurante. Diego
              tenía una visión clara: ofrecer no solo comida deliciosa, sino una
              experiencia gastronómica que cautivara los sentidos de todos los
              comensales.
            </p>
            <p className="mb-4">
              Con determinación y dedicación, Diego comenzó a trabajar
              incansablemente para perfeccionar sus habilidades culinarias. Se
              asoció con agricultores locales para obtener los ingredientes más
              frescos y de la mejor calidad, comprometiéndose a resaltar los
              sabores auténticos de Bolivia en cada plato.
            </p>
            <p>
              El restaurante abrió sus puertas con un ambiente acogedor y una
              decoración que reflejaba la rica cultura boliviana. Desde el
              primer día, Edd Restaurante se convirtió en un lugar de encuentro
              para familias, amigos y amantes de la buena comida. La dedicación
              de Diego y su equipo por ofrecer un servicio excepcional y platos
              exquisitos rápidamente se convirtió en el sello distintivo del
              lugar.
            </p>
            <p>
              Con el tiempo, la reputación de Edd Restaurante creció y se
              expandió más allá de las fronteras de La Paz. La pasión de Diego
              por la cocina boliviana auténtica y su compromiso con la
              excelencia atrajeron a comensales de todas partes del país y,
              eventualmente, turistas internacionales.
            </p>
            <p>
              Pero más allá de su éxito, lo que hace especial a Edd Restaurante
              es su compromiso con la comunidad. Diego colabora activamente con
              organizaciones benéficas locales, apoyando a jóvenes talentosos
              interesados en la gastronomía y promoviendo prácticas sostenibles
              en la industria alimentaria
            </p>
            <p>
              La historia de Edd Restaurante no solo es sobre comida deliciosa y
              éxito comercial, sino sobre un sueño hecho realidad, una pasión
              por la autenticidad y un compromiso con la comunidad y la
              excelencia. En cada plato servido en Edd Restaurante, se puede
              saborear la dedicación, el amor y el espíritu innovador que lo
              convierten en un lugar especial para todos los que lo visitan.
            </p>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
              {/* Video */}
              <div className="embed-responsive embed-responsive-16by9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/6fhAchG-jcw?si=yL-cvHACRSdKnKPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Story;
