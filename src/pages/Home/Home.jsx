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
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-home"
              src={tiendaadentro}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-home"
              src={delivery}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
