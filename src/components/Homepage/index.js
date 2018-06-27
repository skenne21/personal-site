import React from 'react';
import Header from '../Header';
import NavBar from '../Nav';
import Main from '../Main';
import Footer from '../Footer';
import './styles.css';

const Homepage = (props) => {
  console.log(props)
  return(
    <div className='Homepage'>
      <NavBar history={props.history}/>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Homepage;