import React from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Calendar from './Calendar';
import List from './List/List';

function App() {
  return (
    <div id="wrapper">
      <div id="top" />
      <Navbar />
      <div id="main">
        <Home />
      </div>
      <div id="calendar">
        <Calendar />
      </div>
      <div id="list">
        <List />
      </div>
    </div>
  );
}

export default App;
