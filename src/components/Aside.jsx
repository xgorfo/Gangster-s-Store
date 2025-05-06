import React from 'react';

function Aside({ setSelectedCategory }) {
  return (
    <aside className="aside">
      <h2>Категории</h2>
      <ul>
        <li><button onClick={() => setSelectedCategory('Все')}>Все</button></li>
        <li><button onClick={() => setSelectedCategory('Ноутбуки')}>Ноутбуки</button></li>
        <li><button onClick={() => setSelectedCategory('Смартфоны')}>Смартфоны</button></li>
        <li><button onClick={() => setSelectedCategory('Компьютеры')}>Компьютеры</button></li>
        <li><button onClick={() => setSelectedCategory('Аксессуары')}>Аксессуары</button></li>
      </ul>
    </aside>
  );
}

export default Aside;
