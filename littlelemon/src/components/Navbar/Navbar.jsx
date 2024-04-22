import React from 'react'
import "./Navbar.css"
import image from '../../Assets/littlelemon2.png'
import { Routes, Route, Link } from'react-router-dom'

import {About} from "./components"
import { Home, LogIn, OrderOnline, Menu, Reservations } from './container';




const Navbar = () => {
  return (
    <nav>
       <img style={{width: '233px', height: '79px'}} src={image} />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/orderOnline" element={<OrderOnline  />} />
          <Route path="/log-in" element={<LogIn />} />
        </Routes>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/reservations" className="nav-item">Reservations</Link>
        <Link to="/orderOnline" className="nav-item">Order Online</Link>
        <Link to="/log-in" className="nav-item">Log In</Link>

    </nav>
  )
}

export default Navbar;
