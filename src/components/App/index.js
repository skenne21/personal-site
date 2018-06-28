import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../Homepage';
import Resume from '../Resume';
import About from '../About';
import Portfolio from '../Portfolio';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/about' component={About}/>
          <Route path='/portfolio' component={Portfolio}/>
        </Switch>
      </div>
    );
  }
}

export default App;
