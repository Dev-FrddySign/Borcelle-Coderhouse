import React from 'react'
import './TotalItems.css'
import { useContext } from "react";
import { dataContext } from "../../component/Context/DataContext";

const Totaltems = () => {
    const { cart,  } = useContext(dataContext);

    const itemQuanty = cart.reduce((acc, el) => {
        return acc + el.quanty }, 0);

    return (
        <div className='icon-cart-nmro'>{itemQuanty}</div>
    )
}

export default Totaltems