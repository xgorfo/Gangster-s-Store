import './App.css';
import MainPage from './pages/MainPage'
import SecondPage from './pages/SecondPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/second">О нас</Link>
      </nav>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/second' element={<SecondPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
