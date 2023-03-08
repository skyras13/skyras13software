import React from 'react';

import { 
    createBrowserRouter,
    Route, 
    NavLink, 
    createRoutesFromElements,
    RouterProvider
    } from 'react-router-dom';

// page imports
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import RootLayout from './Layouts/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />;
            <Route path="about" element={<About />} />;
            <Route path="projects" element={<Projects />} />;
            <Route path="contact" element={<Contact />} />;
        </Route>
    )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App