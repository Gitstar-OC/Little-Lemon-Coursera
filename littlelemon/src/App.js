// import './App.css';
import React from 'react'
import { Home, About, LogIn, OrderOnline, Menu, Reservations } from './container/index';
import {Navbar} from "./components/index"
import { Routes, Route, } from 'react-router-dom';


 function App() {
  return (
      <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderOnline" element={<OrderOnline />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
      </>
  );
}


 export default App;
