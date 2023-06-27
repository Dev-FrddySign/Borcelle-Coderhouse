import React from 'react';
import './CartCounter.css';
import Button from 'react-bootstrap/Button';
import { dataContext } from "../../component/Context/DataContext";
import { useContext } from "react";

const CartCounter = ({product}) => {
    const { cart, setCart, buyProducts } = useContext(dataContext);

    const decrese = () => { 
        const productRepeat = cart.find((item) => item.id === product.id);

        productRepeat.quanty !== 1 && 
        setCart(cart.map((item) => (item.id === product.id ? {...product, quanty: 
        productRepeat.quanty - 1 } : item)));
    };

    return (
        <div>
            <div className='btn-shp-hook-s-r'>
                
                <Button className='btn-restar' onClick={decrese}>-</Button>
                <div><p className='number-cart'>{product.quanty}</p></div>
                <Button className='btn-sumar' onClick={() => buyProducts(product)}>+</Button>
            </div>
        </div>
    )
}

export default CartCounter