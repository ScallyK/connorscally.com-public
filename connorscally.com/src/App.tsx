import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import { SlidingNumber } from './components/core/sliding-number.tsx'
import { AnimatePresence } from "framer-motion";
import './assets/css/App.css'

import HomePage from './Home';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Details from './Details';
import Credits from './Credits';
import Coffee from './Coffee';

const App = () => {
  const [loading, setLoading] = useState(true);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 25);

    const timeout = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return loading ? (
    <div className="loading-screen">
      <SlidingNumber value={progress} />%
    </div>
  ) : (
    <Router>
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Credits" element={<Credits />} />
        <Route path="/Coffee" element={<Coffee />} />
      </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
