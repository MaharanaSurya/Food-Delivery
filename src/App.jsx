import React from 'react'
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart"
import PlaceOder from './pages/PlaceOrder/PlaceOrder';

const App = () => {
  return (
    <div className='app'>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/oder' element={<PlaceOder/>} />
    </Routes>
    </div>
  )
}

export default App;
