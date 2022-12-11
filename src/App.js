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

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="mb-3">
            <NavBar />
          </div>
          <Card/>
          <Routes>
            <Route path="/" element={<News language="en" key="eng"/>} />
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
