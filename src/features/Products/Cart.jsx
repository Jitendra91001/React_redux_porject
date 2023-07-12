import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Products.css'
import { addSync } from '../cart/CartSlice';
import { Link } from 'react-router-dom';
const Cart = () => {
    const dispatch=useDispatch()
  const products=useSelector((state)=>state.Products.Products)
    return (
        <>
        {
              products.map((product,index) => (
                <div className="card">
                    <img src={product.thumbnail}  alt="Denim Jeans" />
                    <h2>{product.title.slice(0,15) }</h2>
                    <p className="price">{product.price}</p>
                    <p>{product.description}</p>
                    <Link to="addtocart"> <p><button onClick={()=>dispatch(addSync(product))}>Add to Cart</button></p>
                    </Link>
                </div>
            ))
        }
        </>
    );
};

export default Cart