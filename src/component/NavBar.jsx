import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
        <button className="btn btn-outline-success me-2" type="button" href="#Button1">Button1</button>
        <button className="btn btn-outline-success me-2" type="button" href="#Button2">Button2</button>
        <button className="btn btn-outline-success me-2" type="button" href="#Button3">Button3</button>
        <button className="btn btn-outline-success me-2" type="button" href="#Button4">Button4</button>
        <CartWidget />
      </form>
    
    </nav>

    

)
}

export default NavBar