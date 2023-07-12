import React from 'react';
import { fetchAsync } from './ProductSlice';
import { useDispatch } from 'react-redux';
import Cart from './Cart';
import { CartList } from '../cart/CartList';

export function Products() {
  const dispatch=useDispatch()

  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <button className='float-end btn btn-success me-3' onClick={()=>dispatch(fetchAsync())}>All Data</button>

        <Cart/>
      </div>
    </div>
    </>
  );
}
