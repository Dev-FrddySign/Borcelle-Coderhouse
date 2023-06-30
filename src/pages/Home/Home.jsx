import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import tienda from '../../assets/img/varios/tienda.jpg';
import tiendaadentro from '../../assets/img/varios/tiendaadentro.jpg';
import delivery from '../../assets/img/varios/delivery.jpg';
import section from '../../assets/img/logo y banner/section.jpg';


const Home = () => {


  return (
    <>
      <div className='slider-coffe'>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-home"
              src={tienda}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>El mejor cafe</h3>
              <p>Sal de la rutina, ven a Borcelle y disfruta del mejor cafe de chile.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-home"
              src={tiendaadentro}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Ven y disfruta</h3>
              <p>Disfruta de tu cafe en nuestras instalaciones.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-home"
              src={delivery}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>La prioridad</h3>
              <p>
                Nuestro lema es "El mejor cafe la mejor atencion".
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-section">
        <div className="text-section">
          <h1>Encuentra el cafe perfecto a cualquier hora del dia</h1>
        </div>
        <div className="img-section">
          <img src={section} alt="img-borcelle" />
        </div>
      </div>
    </>
  )
}

export default Home;
