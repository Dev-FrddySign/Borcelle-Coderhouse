import './CartTotal.css'
import { useContext } from "react";
import { dataContext } from "../../component/Context/DataContext";

const CartTotal = ({total}) => {
    const { cart } = useContext(dataContext);

    const calculateTotal = () => {
        return cart.reduce((suma, item) => {
          return suma + item.precio * item.quanty;
        }, 0);
};

    const totalPrice = total !== undefined ? total : calculateTotal();

    return (
            <div>
                <p>Total: {totalPrice}</p>
            </div>
    );
};
export default CartTotal;