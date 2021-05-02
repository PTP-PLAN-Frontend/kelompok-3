import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Image from './images/1.png';

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
      <Navbar.Brand><div className='logo-wrapper'><img src={Image} alt="logo" className='logo-title' /></div></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          <Navbar.Text className='mr-3'>
            <Link to='/'><h5>Home</h5></Link>
          </Navbar.Text>
          <Navbar.Text className='mr-3'>
            <Link to='/about'><h5>About</h5></Link>
          </Navbar.Text>
            <Navbar.Text className='mr-3'>
            <Link to='/article'><h5>Article</h5></Link>
          </Navbar.Text>
            <Navbar.Text className='mr-3'>
            <Link to='/cultivation'><h5>Cultivation</h5></Link>
          </Navbar.Text>
            <Navbar.Text className='mr-3'>
            <Link to='/simplisia'><h5>Simplisia</h5></Link>
          </Navbar.Text>
            <Navbar.Text className='mr-3'>
            <Link to='/rhizoma'><h5>Rhizoma</h5></Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavbarComponent;
