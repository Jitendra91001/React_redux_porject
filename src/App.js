import React from 'react';
import './App.css';
import { Products } from './features/Products/Products';
import { Route, Routes } from 'react-router-dom';
import { CartList } from './features/cart/CartList';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='*' element={ <Products/>}/>
      <Route path='addtocart' element={<CartList/>}/>
    </Routes>
    </div>
  );
}

export default App;
