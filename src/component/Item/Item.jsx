import './Item.css'
import React from 'react'
import {useNavigate} from 'react-router-dom'


const Item = (props) => {
  const navigate = useNavigate();

  const { id, img } = props;

  return (
    <div className="card-container">
      <div className="card-product">
        <img className="img-product" src={`/products/${img}`} alt="product-img" />
        <button onClick={() => navigate(`/item/${id}`)} className='btn-img'>Ver</button>
      </div>
    </div>
  )
}

export default Item