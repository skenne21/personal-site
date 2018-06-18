import React from 'react';
import Header from '../Header';
import NavBar from '../Nav';
import Main from '../Main';
import Footer from '../Footer';
import './styles.css';

const Homepage = () => {
  return(
    <div className='Homepage'>
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Homepage;