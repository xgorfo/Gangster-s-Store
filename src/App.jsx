import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<MainPage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
}

export default App;
