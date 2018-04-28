import React, { Component } from 'react';
import Header from '../Header';
import NavBar from '../Nav';
import About  from '../About';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <main>
          <About />
          <Skills />
          <Portfolio/>
        </main>
      </div>
    );
  }
}

export default App;
