"use client"

import React, { useState } from 'react';
import '../style/menu.css';

const Menubtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <button onClick={toggleMenu} className="menu-toggle">
        Menu
      </button>
      <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
        <a href="#about" className="menu-item">About</a>
        <a href="#projects" className="menu-item">Projects</a>
        <a href="#contact" className="menu-item">Contact</a>
      </div>
    </nav>
  );
};

export default Menubtn;
