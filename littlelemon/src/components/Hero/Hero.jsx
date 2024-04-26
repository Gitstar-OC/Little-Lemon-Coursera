import React from 'react'
import "./Hero.css"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <main>
      <h1> Little Lemon 
      <h2> Chicago </h2>
      </h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      {/* <Link to="/reservations" className="nav-item" id="reservation">Reservations</Link> */}
    </main>

  )
}

export default Hero
