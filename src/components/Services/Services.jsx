import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeadset,
  faUserTie,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div>
      <div className="container-xxl py-3">
        <div className="container">
          <div className="mb-5 text-center">
            <h2
              className="section-title ff-secondary text-start test
                                fw-normal"
            >
              Nuestros Servicios
            </h2>
          </div>
          <div className="row g-4">
            {/* card 1 */}
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3 shadow">
                <div className="p-4">
                  <FontAwesomeIcon
                    icon={faUserTie}
                    className="fa-3x test mb-3"
                  />
                  <h5>Chefs</h5>
                  <p>
                  Contratamos solo a los mejores chefs en Bolivia. Todos ellos pasan por un entrenamiento de 6 meses bajo la supervisión de nuestro chef principal, quien no es otro que el Sr. Juan Pérez, galardonado con el premio al Mejor Chef Boliviano en el 2002.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3 shadow">
                <div className="p-4">
                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="fa-3x test mb-3"
                  />
                  <h5>Comida Saludable</h5>
                  <p>
                  
                    Utilizamos solo los métodos más saludables para cocinar nuestros alimentos. Además, hemos establecido limpiezas periódicas para nuestros equipos, utensilios, muebles y más.
                  </p>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="service-item rounded pt-3 shadow">
                <div className="p-4">
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    className="fa-3x test mb-3"
                  />
                  <h5>Delivery</h5>
                  <p>
                  Ahora puedes recibir tus comidas en la puerta de tu casa realizando tus pedidos en nuestro sitio web.
                  </p>
                </div>
              </div>
            </div>
            {/* card4 */}
            <div className="col-lg-3 col-sm-6 wow fadeInUp">
              <div className="service-item rounded-pt-3 shadow">
                <div className="p-4">
                  <FontAwesomeIcon
                    icon={faHeadset}
                    className="fa-3x test mb-3 svgIcon"
                  />
                  <h5 className="pt-3">Atención al cliente</h5>
                  <p>
                    ¿Alguna situación que resolver? Resolveremos cualquier problema en cuanto aparezca, gracias a nuestro dedicado equipo de atención al cliente, disponible las 24 horas del día, los 7 días de la semana, para atender tus necesidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
