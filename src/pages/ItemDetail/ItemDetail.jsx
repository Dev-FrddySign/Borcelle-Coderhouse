import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'
import preloader2 from '../../assets/img/video/preloader2.gif'


const ItemDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

const items = [
    {
      "id": '1',
      "name": "Expreso americano",
      "categoria": "Tradicional",
      "descripcion": "Café tradicional hecho con agua caliente y granos molidos",
      "precio": 4500,
      "img": "americano.jpg",
    },
    {
      "id": '2',
      "name": "Expreso Tradicional",
      "categoria": "Tradicional",
      "descripcion": "Espreso diluido, menos intenso que el tradicional",
      "precio": 4500,
      "img": "tradicional.jpg"
    },
    {
      "id": '3',
      "name": "Expreso Cremoso",
      "categoria": "Tradicional",
      "descripcion": "Espreso diluido, menos intenso que el tradicional",
      "precio": 4500,
      "img": "cremoso.jpg"
    },
    {
      "id": '4',
      "name": "Expreso Helado",
      "categoria": "Tradicional, helado",
      "descripcion": "Bebida preparada con café espresso y cubitos de hielo",
      "precio": 4900,
      "img": "helado.jpg"
    },
    {
      "id": '5',
      "name": "Cafe con leche",
      "categoria": "Tradicional, con leche",
      "descripcion": "Espreso mitad y mitad tradicional con leche al vapor",
      "precio": 4900,
      "img": "leche.jpg"
    },
    {
      "id": '6',
      "name": "Latte",
      "categoria": "Tradicional, con leche",
      "descripcion": "Un shot de espresso con el doble de leche y espuma cremosa",
      "precio": 4900,
      "img": "latte.jpg"
    },
    {
      "id": '7',
      "name": "Capuccino",
      "categoria": "Tradicional, con leche",
      "descripcion": "Bebida de canela elaborada a partir de dosis iguales de café, leche y espuma",
      "precio": 5200,
      "img": "capuccino.jpg"
    },
    {
      "id": '8',
      "name": "Macchiato",
      "categoria": "Tradicional, con leche",
      "descripcion": "Café espresso mezclado con un poco de leche caliente y espuma",
      "precio": 5400,
      "img": "macchiato.jpg"
    },
    {
      "id": '9',
      "name": "Mocaccino",
      "categoria": "Tradicional, con leche",
      "descripcion": "Café espreso con chocolate, un poco de leche y espuma",
      "precio": 5400,
      "img": "mocaccino.jpg"
    },
    {
      "id": '10',
      "name": "Chocolate caliente",
      "categoria": "Tradicional, con leche",
      "descripcion": "Bebida elaborada con chocolate disuelto en leche caliente y café",
      "precio": 4400,
      "img": "chocolate.jpg"
    },
    {
      "id": '11',
      "name": "Cubano",
      "categoria": "Especial, Alcohol, Helado",
      "descripcion": "Bebida espresso helada con ron, nata y menta",
      "precio": 4400,
      "img": "cubano.jpg"
    },
    {
      "id": '12',
      "name": "Hawaiano",
      "categoria": "Especial",
      "descripcion": "Bebida dulce preparada con café y leche de coco",
      "precio": 5400,
      "img": "hawaiano.jpg"
    },
    {
      "id": '13',
      "name": "Árabe",
      "categoria": "Especial",
      "descripcion": "Bebida preparada con granos de café árabe y especias",
      "precio": 4500,
      "img": "arabe.jpg"
    },
    {
      "id": '14',
      "name": "Irlandes",
      "categoria": "Especial, Alcohol",
      "descripcion": "Bebida a base de café, whisky irlandés, azúcar y nata montada",
      "precio": 5500,
      "img": "irlandes.jpg"
    }
  ]

useEffect(() => {
  
  setTimeout(() => {
    const filter = items.find((item) => item.id === id);
    setItem(filter)
    setLoading(false)
  }, 2000);
  
  }, [id, items]);
  

  return (
    <Fragment>
      
      <button className='btn-volver' onClick={() => navigate(-1)}>Volver</button><br />
      
      {loading && <h1><img className='loadtwo-pg' src={preloader2} alt="" /></h1> }
      {item && !loading && (
        <div className='card-container-head'>
          <p>{item.id}</p>
          <Card className='card-product-id' style={{ width: '18rem' }}>
            <Card.Img className='card-img' variant="top" src={`/products/${item.img}`} />
            <Card.Body>
              <p>{item.categoria}</p>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.descripcion}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </Fragment>
  );
}

export default ItemDetail;