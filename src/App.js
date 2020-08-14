import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Calendar from './Calendar';
import List from './List';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/calendar'>
            <Navbar />
            <Calendar />
          </Route>
          <Route path='/list'>
            <Navbar />
            <List />
          </Route>
          <Route path='/'>
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </Router>    
  );
}

export default App;
