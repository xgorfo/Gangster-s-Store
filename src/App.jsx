import './App.css';
import MainPage from './pages/MainPage'
import SecondPage from './pages/SecondPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Aside from './components/Aside';

function App() {
  return (
    <Router>
       <Header></Header>
       <div className='page-content'>
      
        <Aside></Aside>

        <Routes>
           <Route path='/' element={<MainPage/>}/>
           <Route path='/cart' element={<SecondPage/>}/>
         </Routes>
       </div>
    </Router>
  );
}

export default App;
