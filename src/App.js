import "./App.css";
import React, { Component } from "react";
import Scores from "./Components/Scores";
import News from "./Components/News";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Fixtures from "./Components/Fixtures";
import Highlights from "./Components/Highlights";
import Card from "./Components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="mb-3">
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
            <NavBar />
          </div>
          <Card/>
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} language="en" key="eng"/>} />
            <Route path="scores/" element={<Scores />} />
            <Route path="fixtures/" element={<Fixtures/>}/>
            <Route path="highlights/" element={<Highlights/>}/>
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
