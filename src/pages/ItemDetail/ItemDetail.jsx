import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
      {loading && <h1><img classNameName='loadtwo-pg' src={preloader2} alt="" /></h1>}
      {item && !loading && (
        <div classNameName='card-container-head'>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`/products/${item.img}`} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">{item.categoria}</h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.name}</h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                      <p className="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </p>
                      <p className="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </p>
                      <p className="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </p>
                    </span>
                  </div>
                  <p className="leading-relaxed">{item.descripcion}</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Tamaño</span>
                      <div className="relative">
                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                          <option>Pequeño</option>
                          <option>Mediano</option>
                          <option>Grande</option>

                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">${item.precio}</span>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      <button classNameName='btn-volver' onClick={() => navigate(-1)}>Volver</button>
    </Fragment>
  );
}

export default ItemDetail;