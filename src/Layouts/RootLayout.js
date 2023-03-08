import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
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
            <Outlet />
        </main>
    </div>
  );
}

export default RootLayout