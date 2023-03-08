import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

// page imports
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
    <header>
        <nav>
            <h1>Skyras13 Software</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About Me</NavLink>
            <NavLink to="projects">My Projects</NavLink>
            <NavLink to="contact">Contact Me</NavLink>
        </nav>
    </header>
        <main>
            <Routes>
                <Route path="/" element={<Home />} />;
                <Route path="about" element={<About />} />;
                <Route path="projects" element={<Projects />} />;
                <Route path="contact" element={<Contact />} />;
            </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App