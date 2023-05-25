import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import logo from './imagenes/logo.png';



const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
        
        <img src={logo} height="40px" width="40px"></img>
        <button className="btn btn-outline-success me-2" type="button" href="#trenDelantero">Tren Delantero</button>
        <button className="btn btn-outline-success me-2" type="button" href="#motor">Motor</button>
        <button className="btn btn-outline-success me-2" type="button" href="#frenos">Frenos</button>
        <button className="btn btn-outline-success me-2" type="button" href="#inyeccion">Inyeccion</button>
        <CartWidget />
      </form>
    
    </nav>

    

)
}

export default NavBar