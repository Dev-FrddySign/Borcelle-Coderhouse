import { useContext } from "react";
import { dataContext } from "../../component/Context/DataContext";
import CartElement from '../../component/CartElement/CartElement';
import CartTotal from '../../component/CartTotal/CartTotal'
import './CartContent.css';


const CartContent = () => {
  const { cart } = useContext(dataContext);


  return cart.length > 0 ? (
    <>
      <CartElement />
      <CartTotal />
    </>
  ) : (
    <h4 className="titulo-cart">Hola, tu carrito esta vacio. Para finalizar la compra debes seleccionar un item</h4>
  )
}

export default CartContent;
