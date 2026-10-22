import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Attorneys from './components/Attorneys';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Services />
      <Attorneys />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
