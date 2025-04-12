import { Link } from "react-router-dom";

function Header() {
    return(
      <nav>
        <div className="navbar">
            <Link to="/">Главная</Link>
            <Link to="/cart">Корзина</Link>
        </div>
      </nav>
    );
}

export default Header;