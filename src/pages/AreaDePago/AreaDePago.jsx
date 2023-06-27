import React from 'react';
import './AreaDePago.css'
import PaymentMethod from '../../component/PaymentMethod/PaymentMethod';
import Checkout from '../../component/Checkout/Checkout';



const AreaDePago = () => {
    return (
        <>
            <PaymentMethod/>
            <Checkout/>
        </>
    )
}

export default AreaDePago