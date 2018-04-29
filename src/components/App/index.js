import React, { Component } from 'react';
import Header from '../Header';
import NavBar from '../Nav';
import Main from '../Main';
import Footer from '../Footer';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
