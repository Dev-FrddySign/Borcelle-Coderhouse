import React, {useState} from 'react'



export const CarritoContext = React.createContext([]);

const CarritoProvider = ({Children}) => {

    const [carrito, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const isInCart = (id) => carrito.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(carrito.filter(product => product.id !== id));

  return (
    <>
    <CarritoContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
    }}>
        {Children}
    </CarritoContext.Provider>

    </>
  )
}

export default CarritoProvider