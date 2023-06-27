import { useContext } from "react";
import { dataContext } from "../../component/Context/DataContext";
import Card from 'react-bootstrap/Card';
import React from 'react'
import CartCounter from "../CartCounter/CartCounter";
import { Button } from "react-bootstrap";


const CartElement = () => {
    const { cart, setCart } = useContext(dataContext);

    const removeFromCart = (id) => {
        const foundId = cart.find((element) => element.id === id);

        const newCart = cart.filter((element)=> {
            return element !== foundId
        });
        setCart(newCart);
    };

    return cart.map((product) => {
        return (
            <>
                <div key={product.id} className=" card-shop d-flex justify-content-start d-flex justify-content-between">
                    <div className='cardproduct'>
                        <Card className='productItems' style={{ width: '18px' }} />
                        <Card.Img className='CardImg' variant="top" src={product.imagenes} alt='img-product-card' />
                        <Card.Body />
                        <Card.Title>{product.name}</Card.Title>
                    </div>
                </div>
                <div >
                    <CartCounter product={product}/>
                </div>
                <div className="btn-remover">
                <Button className="bg-danger" onClick={() => removeFromCart(product.id)}>🗑</Button>
                </div>
                <div className="precio-item">
                    <h3>Precio: {product.precio * product.quanty}</h3> 
                </div>
            </>
        );
    });
};

export default CartElement;
