import React from 'react'
import "./Navbar.css"
import image from '../../Assets/littlelemon2.png'


const Navbar = () => {
  return (
    <nav>
       <img style={{width: '233px', height: '79px'}} src={image} />
    </nav>
  )
}

export default Navbar;
