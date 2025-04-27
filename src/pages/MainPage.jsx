import React, { useState } from 'react';
import Aside from '../components/Aside';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

function MainPage({ cart, setCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = selectedCategory === 'Все'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="main-page">
      <Aside setSelectedCategory={setSelectedCategory} />
      <main className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </main>
    </div>
  );
}

export default MainPage;
