import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Header({ cart }) {
  return (
    <header>
      <h1>Gangster's Store</h1>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/cart">
          <FaShoppingCart size={24} />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
