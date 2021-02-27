import React from 'react';
import './css/App.css';
import Home from './Home';
import Navbar from './Navbar';
import MyCalendar from './Calendar';
import List from './List/List';
import Tracker from './Tracker/Tracker';

function App() {
  return (
    <div id="wrapper">
      <div id="top" />
      <Navbar />
      <div id="main">
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
    </div>
  );
}

export default App;
