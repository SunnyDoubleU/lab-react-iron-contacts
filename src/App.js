import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import contacts from './data/contacts.json';


class App extends Component {


  render() {
    return (
      <Contact />

    );
  }
}

export default App;
