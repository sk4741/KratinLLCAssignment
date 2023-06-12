import React from "react";

import "./App.css";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Details from "./Components/Details";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
// import About from './pages/about';
// import Events from './pages/events';
// import AnnualReport from './pages/annual';
// import Teams from './pages/team';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';

function App() {
  let isLoggedIn=false; 
  if(sessionStorage.getItem('userData')){
    isLoggedIn=true;
  }
  
  return (
    <div className="app container">
      <Navigation isLoggedIn={isLoggedIn} />
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" exact element={<Login/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
