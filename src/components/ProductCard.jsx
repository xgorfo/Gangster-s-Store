import React from 'react';
import { motion } from 'framer-motion';

function ProductCard({ product, addToCart }) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>{product.price} ₽</strong></p>
      <button onClick={() => addToCart(product)}>Добавить в корзину</button>
    </motion.div>
  );
}

export default ProductCard;
