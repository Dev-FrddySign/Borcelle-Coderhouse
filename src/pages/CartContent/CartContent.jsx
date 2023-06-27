import { useContext } from "react";
import { dataContext } from "../../component/Context/DataContext";
import CartElement from '../../component/CartElement/CartElement';
import CartTotal from '../../component/CartTotal/CartTotal'
import './CartContent.css';
import {useNavigate} from 'react-router-dom'
import { Button } from "react-bootstrap";



const CartContent = () => {
  const navigate = useNavigate();
  const { cart } = useContext(dataContext);


  return cart.length > 0 ? (
    <>       
      <CartElement />     
      <CartTotal />
      <div>
        <Button onClick={() => navigate(`/AreaDePago`)}>Siguiente</Button>
      </div>
    </>
  ) : (
    <h4 className="titulo-cart">Hola, tu carrito esta vacio. Para finalizar la compra debes seleccionar un item</h4>
  )
}

export default CartContent;
