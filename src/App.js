import React from 'react';
import './css/App.css';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import MyCalendar from './Calendar';
import List from './List/List';
import Tracker from './Tracker/Tracker';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div id="wrapper">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <div id="top" />
            <Navbar />
            <div id="main">
              <a href="/login">Login</a>
              <Home />
            </div>
            <div id="calendar">
              <MyCalendar />
            </div>
            <div id="list">
              <List />
            </div>
            <div id="tracker">
              <Tracker />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
