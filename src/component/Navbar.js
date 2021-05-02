import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import sourceImage from './images/1.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <img src={sourceImage} className='logo'/>
          <i class='fab fa-firstdraft' />
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/article'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Article <i className='fas fa-caret-down' />
            </Link >
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/simplisia'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Simplisia
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/rhizoma'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Rhizoma
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
