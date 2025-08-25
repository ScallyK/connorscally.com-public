import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './assets/css/App.css';

// import Home from './Home'
const Home = React.lazy(() => import('./Home'));
const Credits = React.lazy(() => import('./Credits'));
const Details = React.lazy(() => import('./Details'));
const Projects = React.lazy(() => import('./Projects'));
const Contact = React.lazy(() => import('./Contact'));
const About = React.lazy(() => import('./About'));

export default function App() {

  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/details" element={<Details />} />
    </Routes>
    
    </BrowserRouter>
  )
}
