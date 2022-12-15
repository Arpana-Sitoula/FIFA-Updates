import "./App.css";
import React, { useState } from "react";
import Scores from "./Components/Scores";
import News from "./Components/News";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Fixtures from "./Components/Fixtures";
import Highlights from "./Components/Highlights";
import Card from "./Components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [progress,setProgress]= useState(0)

    return (
      <div>
        <BrowserRouter>
          <div className="mb-3">
          <LoadingBar
        color='#f11946'
        progress={progress}
      />
            <NavBar />
          </div>
          <Card/>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey="28175a33e81f42988a6260df7f5b6776" language="en" key="eng"/>} />
            <Route path="scores/" element={<Scores />} />
            <Route path="fixtures/" element={<Fixtures/>}/>
            <Route path="highlights/" element={<Highlights/>}/>
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
export default App;

