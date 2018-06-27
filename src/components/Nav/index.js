import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = ({ history }) => {
  
  const determineLink = () => {
    const { pathname } = history.location;

    switch (pathname) {
      case '/':
        return homepage();
      case '/about':
        return returnHomepage(pathname);
      case '/resume':
        return returnHomepage(pathname);
      case '/portfolio':
        return returnHomepage(pathname);
      default:
        return null;
    }
  }

  const homepage = () => {
    console.log('homepage', history.location.pathname)
    return (
      <div>
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
      </div>
    )
  }

  const returnHomepage = (pathname) => {
    return (
      <div>
        <Link 
          className='nav_link'
          to='/'
        >HOME
        </Link>
        <Link 
          className='nav_link'
          to='/about'
        >ABOUT
        </Link>
        <Link
          className='nav_link'
          to='/resume'
        >RESUME
        </Link>
        <Link
          className='nav_link'
          to='/portfolio'
        >PORTFOLIO
        </Link>
      </div>
    ) 
  } 
  




  return(
    <div className='NavBar'>
      <ul>
        {determineLink()}
      </ul>
    </div>
  )
}



export default NavBar;