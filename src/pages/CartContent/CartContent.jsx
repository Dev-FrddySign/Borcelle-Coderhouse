import { useContext } from "react";
import { dataContext } from "../../component/Context/DataContext";
import CartElement from '../../component/CartElement/CartElement';
import CartTotal from '../../component/CartTotal/CartTotal'
import './CartContent.css';
import { useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap";



const CartContent = () => {
  const navigate = useNavigate();
  const { cart } = useContext(dataContext);


  return cart.length > 0 ? (
    <>
      <CartElement />
      <CartTotal />
      <div>
        <Button onClick={() => navigate('#Checkout-id')}>Siguiente</Button>
      </div>
      <div>
      <fieldset id="Checkout" style={{ border: "1px solid black" }}>
          <section className='Checkout d-flex'>
            <form className="form-checkout">
              <legend>
                Informacion
              </legend>
              <div className="col-span-3">
                <label
                  for="FirstName"
                  className="group-input"
                >
                  Nombres:
                </label>

                <input
                  type="text"
                  id="FirstName"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-3">
                <label
                  for="LastName"
                  className="group-input"
                >
                  Apellidos:
                </label>

                <input
                  type="text"
                  id="LastName"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label for="Email" className="group-input">
                  Correo Electronico:
                </label>

                <input
                  type="email"
                  id="Email"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label for="Phone" className="group-input">
                  Telefono:
                </label>

                <input
                  type="tel"
                  id="Phone"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Detalles de la tarjeta
                </legend>

                

                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                  <div>
                    <label for="CardNumber" className="sr-only"> Numero de la tarjeta </label>

                    <input
                      type="text"
                      id="CardNumber"
                      placeholder="Card Number"
                      className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>

                  <div className="flex">
                    <div className="flex-1">
                      <label for="CardExpiry" className="sr-only"> Decha de vencimiento </label>

                      <input
                        type="text"
                        id="CardExpiry"
                        placeholder="Expiry Date"
                        className="relative w-full rounded-es-md border-gray-200 focus:z-10 sm:text-sm"
                      />
                    </div>

                    <div className="-ms-px flex-1">
                      <label for="CardCVC" className="sr-only"> CVC </label>

                      <input
                        type="text"
                        id="CardCVC"
                        placeholder="CVC"
                        className="relative w-full rounded-ee-md border-gray-200 focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Dirección de Envio
                </legend>

                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                  <div>
                    <label for="Country" className="sr-only">Pais</label>

                    <select
                      id="Country"
                      className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                    >
                      <option>Selecciona...</option>
                      <option>England</option>
                      <option>Wales</option>
                      <option>Scotland</option>
                      <option>France</option>
                      <option>Belgium</option>
                      <option>Japan</option>
                    </select>
                  </div>

                  <div>
                    <label className="sr-only" for="PostalCode"> Codigo Postal </label>

                    <input
                      type="text"
                      id="PostalCode"
                      placeholder="ZIP/Post Code"
                      className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>
              </fieldset>

              <div className="col-span-6">
                <button
                  className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                >
                  Pagar
                </button>
              </div>
            </form>
          </section>
        </fieldset>
      </div>
    </>
  ) : (
    <h4 className="titulo-cart">Hola, tu carrito esta vacio. Para finalizar la compra debes seleccionar un item</h4>
  )
}

export default CartContent;
