import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../Homepage';
import Resume from '../Resume';
import About from '../About'
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
