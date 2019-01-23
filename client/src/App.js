import './App.css';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';

import Fib from './fib';
import OtherPage from './otherPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <header>
            <Link to='/'>Home</Link>
            <Link to='/other-page'>Other Page</Link>
          </header>
          <Route exact path='/' component={Fib} />
          <Route path='/other-page' component={OtherPage} />
        </div>
      </Router>
    );
  }
}

export default App;
