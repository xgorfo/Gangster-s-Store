import React from 'react';

function CartPage({ cart, setCart }) {
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} ₽
              <button onClick={() => removeFromCart(index)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Итого: {total} ₽</h3>
    </div>
  );
}

export default CartPage;
