import React from 'react'
import './CartWidget.css'
import Icon from '@mdi/react';
import { mdiShoppingOutline } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import Totaltems from '../../pages/CartContent/Totaltems';
import { useContext } from "react";
import { dataContext } from "../../component/Context/DataContext";

const CartWidget = () => {
  const { cart } = useContext(dataContext);

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/CartContent`)}>
        <Icon className='icon-shop' path={mdiShoppingOutline} size={2} />
        {cart.length > 0 ? <Totaltems/> : null}
    </div>
  )
}

export default CartWidget