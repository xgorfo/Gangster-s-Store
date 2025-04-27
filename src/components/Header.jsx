import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cart }) {
  return (
    <header className="header">
      <h1>MyStore</h1>
      <nav>
        <Link to="/">Главная</Link> |
        <Link to="/cart">Корзина ({cart.length})</Link>
      </nav>
    </header>
  );
}

export default Header;
