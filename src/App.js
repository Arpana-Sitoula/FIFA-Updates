import './App.css';

import React, { Component } from 'react'
import Card from './Components/Card';
import News from './Components/News';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='mb-3'><NavBar/></div>
        <Card/>
        <News/>
        <Footer/>
      </div>
    )
  }
}



