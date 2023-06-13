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
import RegistrationForm from "./Components/EventRegistration";

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
          <Route path="/" exact element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          
          <Route path="/register" element={<RegistrationForm/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
