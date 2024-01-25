import './App.css';
import Home from './pages/Home';
import Labtest from './pages/Labtest';
import Medicine from './pages/Medicine'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
import Loginnn from './pages/Loginnn';
import Registerrr from './pages/Registerrr';
import { useContext } from 'react';
import { isAuthTokenContext } from './Context/ContextShare';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import UserMedicinedisplay from './pages/UserMedicinedisplay';

function App() {
  const {isAuthToken , setIsAuthToken} = useContext(isAuthTokenContext)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/login' element={<Loginnn/>} />

        <Route path='/register' element={<Registerrr/>} />

        <Route path='/labtest' element={isAuthToken?<Labtest labtest />:<Home/>} />

        <Route path='/medicine' element={<Medicine/>} />

        <Route path='/wishlist' element={<WishList/>} />

        <Route path='/cart' element={<Cart/>} />

        <Route path='/userlogin' element={<UserLogin/>} />

        <Route path='/userregister' element={<UserRegister/>} />

        <Route path ='/userMedicine' element={<UserMedicinedisplay/>}/>
        
      </Routes>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
