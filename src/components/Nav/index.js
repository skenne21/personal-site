import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  
  return(
    <div className='NavBar'>
      <ul>
        <Link 
          className="nav_link"
          to="/about"
        >ABOUT
        </Link>
        <Link
          className="nav_link"
          to="/resume"
        >RESUME
        </Link>
        <Link
          className="nav_link"
          to="portfolio"
        >PORTFOLIO
        </Link>
      </ul>
    </div>
  )
}

export default NavBar;