import './CartTotal.css'
import { useContext } from "react";
import { dataContext } from "../../component/Context/DataContext";

const CartTotal = () => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((suma, item) => {
        return suma + item.precio * item.quanty
    }, 0);

    return (
            <div className="info-total">
                <h3> Total a pagar $ {total} </h3>
            </div>
    );
};
export default CartTotal;