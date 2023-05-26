import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='header'>
        <Link to={'/home'} className='logo'><h1>CSBS-SFS</h1></Link>
        <ul className='nav-menu'>
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/grievances'}>Student Grievances</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact Us</Link>
          </li>
          <li>
            <Link to={'/'}>Log Out</Link>
          </li>
        </ul>
    </div>
  )
}

export default Navbar;