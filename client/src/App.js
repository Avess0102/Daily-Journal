import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Compose from './components/Compose/Compose';
import Try from './components/Try/Try';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/compose" element={<Compose />}></Route>
          <Route exact path="/compose" element={<Try />}></Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
