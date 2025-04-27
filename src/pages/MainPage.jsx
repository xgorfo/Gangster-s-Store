import React from 'react';
import Aside from '../components/Aside';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

function MainPage({ cart, setCart }) {
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="main-page">
      <Aside />
      <main className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </main>
    </div>
  );
}

export default MainPage;
