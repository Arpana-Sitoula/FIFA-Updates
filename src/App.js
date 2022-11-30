import './App.css';

import React, { Component } from 'react'
import Navigation from './Components/Navigation';
import News from './Components/News';
import Footer from './Components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <News/>
        <Footer/>
      </div>
    )
  }
}



